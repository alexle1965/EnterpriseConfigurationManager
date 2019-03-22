using System.Collections.Generic;

namespace Tiger.ConfigurationServices.UI.Models
{
    public partial class Servers
    {
        public Servers()
        {
            //Entity Framework interprets a property as a foreign key property
            //if it is named <navigation property name><primary key property name>

            ConfigApplogDbServerKeyNavigation = new HashSet<Config>();
            ConfigCuroDbServerKeyNavigation = new HashSet<Config>();
        }

        public byte ServersKey { get; set; }
        public string ServerName { get; set; }
        public string ServerType { get; set; }
        public bool IsActive { get; set; }

        // Navigation properties hold other entities that are related to this entity
        // If you specify ICollection<T>, EF creates a HashSet<T> collection by default

        public ICollection<Config> ConfigApplogDbServerKeyNavigation { get; set; }
        public ICollection<Config> ConfigCuroDbServerKeyNavigation { get; set; }
    }
}