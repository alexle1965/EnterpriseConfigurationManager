namespace Tiger.ConfigurationServices.UI.Models
{
    public partial class ConfigValue
    {
        public int ConfigValueKey { get; set; }
        public byte ConfigKey { get; set; }
        public short ConfigSettingKey { get; set; }
        public string ConfigValue1 { get; set; }

        //Entity Framework interprets a property as a foreign key property
        //if it is named <navigation property name><primary key property name>

        public Config ConfigKeyNavigation { get; set; }
        public ConfigSetting ConfigSettingKeyNavigation { get; set; }
    }
}