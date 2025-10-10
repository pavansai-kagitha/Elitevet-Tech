import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from "../../Common/Buttons/Button";

const Subscribe = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const status = params.get('subscription_status');

    if (status) {
      switch(status) {
        case 'subscribed':
          setMessage('✅ You have successfully subscribed to job alerts!');
          break;
        case 'unsubscribed':
          setMessage('⚠️ You have unsubscribed from job alerts.');
          break;
        case 'already_subscribed':
          setMessage('ℹ️ You are already subscribed to job alerts.');
          break;
        case 'already_unsubscribed':
          setMessage('ℹ️ You are already unsubscribed from job alerts.');
          break;
        default:
          setMessage('');
      }
    }

    // Auto-redirect after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer); // Cleanup
  }, [location, navigate]);

  return (
    <section className="bg-black position-relative d-flex align-items-center min-vh-100">
      <div className="w-100 h-100 position-absolute top-0 start-0 bg-grd-3"></div>

      <div className="container position-relative z-3 pt-lg-8 pb-lg-1 pb-4">
        <div className="pb-5">
          <div className="row g-3 align-items-center text-center">
            <div className="col-12">
              <div className="content_outer my-5">
                {message ? (
                  <h1 className="text-white display-1 fw-bold font-primary mb-3">
                    {message}
                  </h1>
                ) : (
                  <h1 className="text-white display-1 fw-bold font-primary mb-3">
                    ⚠️ No subscription status found.
                  </h1>
                )}

                <p className="text-white font-sec lead mb-3">
                  You will be redirected back to the homepage shortly.
                </p>

                <Button 
                  to="/" 
                  classname="btn bg-pry rounded-pill mt-3 text-white" 
                  text="Back to Home Now" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
