namespace Tiger.ConfigurationServices.UI
{
    public static class Routes
    {
        private const string API = "api/1/";

        public static class ManageConfig
        {
            public const string ConfigNames = API + "manageconfig/confignames.json";
            public const string ConfigSettings = API + "manageconfig/configsettings.json";
            public const string ConfigValueByConfigKey = API + "manageconfig/result/{configkey}";
            public const string ConfigValueByConfigSettingKey = API + "manageconfig/result/setting/{configsettingkey}";
        }
    }
}