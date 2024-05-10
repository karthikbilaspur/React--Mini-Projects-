import { createContext, useEffect, useState } from "react";
import featureFlags from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function featureFlags() {
    try {
      setLoading(true);
      //original service call
      const response = await featureFlagsDataServiceCall();
      setEnabledFlags(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    featureFlags();
  }, []);

  return (
    <featureFlags.Provider value={{ loading, enabledFlags }}>
      {children}
    </featureFlags.Provider>
  );
}