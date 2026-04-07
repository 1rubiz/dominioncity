import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import useLoadingStore from '../store/loading';
import { toast } from 'sonner';

interface Account {
  bank: string;
  name: string;
  number: string;
}

export default function Payments() {
  const { start, stop } = useLoadingStore();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const apiUrl = import.meta.env.VITE_API;

  const fetchAccounts = useCallback(async () => {
    start();
    const token = sessionStorage.getItem('token');
    try {
      const response = await axios.get(`${apiUrl}/api/accounts`, {
        headers: {
          Authorization: token,
        },
      });
      setAccounts(response.data.data);
      toast.success('Accounts loaded successfully');
    } catch (err) {
      console.error(err);
      toast.error('Failed to load accounts. Please contact support.');
    } finally {
      stop();
    }
  }, [apiUrl, start, stop]);

  const handleCopy = async (accountNumber: string, index: number) => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopiedId(index);
      toast.success('Account number copied to clipboard');
      setTimeout(() => setCopiedId(null), 2000);
    } catch (error) {
      console.error(error);
      toast.error('Failed to copy account number');
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <div className='w-full py-20 min-h-screen bg-background text-on-surface'>
      {/* Header Section */}
      <div className='pt-20 pb-12 px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=''
        >
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-2'>
            Payment Accounts
          </h1>
          <p className='text-muted-foreground text-sm sm:text-base'>
            Click on account numbers to copy them to your clipboard
          </p>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='px-4 sm:px-6 lg:px-8 pb-20 flex flex-wrap justify-center gap-6'
      >
        {accounts.length > 0 ? (
          accounts.map((account, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className='w-full sm:max-w-sm'
            >
              <div className='bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow'>
                {/* Card Header with Gradient */}
                <div className='bg-linear-to-r from-slate-700/80 to-slate-400 text-primary-foreground p-6'>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center'>
                      <span className='text-lg font-bold'>💳</span>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold'>{account.bank}</h3>
                      <p className='text-sm opacity-90'>Offering</p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className='p-6 space-y-5'>
                  {/* Bank Field */}
                  <div>
                    <p className='text-xs font-semibold text-muted-foreground uppercase tracking-wider'>
                      Bank
                    </p>
                    <p className='text-base sm:text-lg font-medium text-card-foreground mt-2'>
                      {account.bank}
                    </p>
                  </div>

                  {/* Account Name Field */}
                  <div>
                    <p className='text-xs font-semibold text-muted-foreground uppercase tracking-wider'>
                      Account Name
                    </p>
                    <p className='text-base sm:text-lg font-medium text-card-foreground mt-2'>
                      {account.name}
                    </p>
                  </div>

                  {/* Account Number Field with Copy Button */}
                  <div>
                    <p className='text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2'>
                      Account Number
                    </p>
                    <div className='flex items-center justify-between bg-input rounded-lg p-3 border border-border hover:border-primary/50 transition-colors cursor-pointer group'
                      onClick={() => handleCopy(account.number, index)}
                    >
                      <p className='text-base sm:text-lg font-mono font-semibold text-card-foreground'>
                        {account.number}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className='ml-3 p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors'
                      >
                        {copiedId === index ? (
                          <Check className='w-5 h-5 text-accent' />
                        ) : (
                          <Copy className='w-5 h-5 text-primary' />
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-center py-12'
          >
            <p className='text-muted-foreground'>
              No accounts available. Please try refreshing the page.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
