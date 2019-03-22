using System.Collections.Generic;

namespace Tiger.ConfigurationServices.UI.Models
{
    public partial class Config
    {
        public Config()
        {
            //Entity Framework interprets a property as a foreign key property
            //if it is named <navigation property name><primary key property name>
            ConfigValue = new HashSet<ConfigValue>();
        }

        public byte ConfigKey { get; set; }
        public string ConfigName { get; set; }
        public byte CuroDbServerKey { get; set; }
        public byte ApplogDbServerKey { get; set; }
        public bool IsProduction { get; set; }
        public string Description { get; set; }

        // Navigation properties hold other entities that are related to this entity
        // If you specify ICollection<T>, EF creates a HashSet<T> collection by default

        public Servers ApplogDbServerKeyNavigation { get; set; }
        public Servers CuroDbServerKeyNavigation { get; set; }
        public ICollection<ConfigValue> ConfigValue { get; set; }
    }
}