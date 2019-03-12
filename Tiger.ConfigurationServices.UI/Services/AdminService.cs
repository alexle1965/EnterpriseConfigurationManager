using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tiger.ConfigurationServices.UI.Models;

namespace Tiger.ConfigurationServices.UI.Services
{
    public class AdminService
    {
        private MaintContext dbContext = new MaintContext();

        /// <summary>
        /// Servers Table
        /// </summary>
        /// <returns>All servers</returns>
        public async Task<IEnumerable<Servers>> GetServersAsync()
        {
            IEnumerable<Servers> allServers = await dbContext.Servers.ToListAsync().ConfigureAwait(false);

            return allServers.OrderBy(s => s.ServerName).ToList();
        }

        /// <summary>
        /// Config Table
        /// </summary>
        /// <returns>All configs</returns>
        public async Task<IEnumerable<Config>> GetAllConfigAsync()
        {
            // all properties from the db
            IEnumerable<Config> allConfigs = await dbContext.Config.ToListAsync().ConfigureAwait(false);

            return allConfigs.OrderBy(c => c.ConfigName).ToList();
        }

        /// <summary>
        /// ConfigSetting Table
        /// </summary>
        /// <returns>All config settings</returns>
        public async Task<IEnumerable<ConfigSetting>> GetAllConfigSettingAsync()
        {
            // all properties from the db
            IEnumerable<ConfigSetting> allSettings = await dbContext.ConfigSetting.ToListAsync().ConfigureAwait(false);

            return allSettings.OrderBy(cs => cs.ConfigSettingName).ToList();
        }

        //
        // Add New Server
        //
        public async Task<Servers> InsertServerAsync(Servers server)
        {
            dbContext.Add(server);
            await dbContext.SaveChangesAsync().ConfigureAwait(false);
            return server;
        }

        //
        // Add New Config
        //
        public async Task<Config> InsertConfigAsync(Config config)
        {
            dbContext.Add(config);
            await dbContext.SaveChangesAsync().ConfigureAwait(false);
            return config;
        }

        //
        // Add New Config Setting
        //
        public async Task<ConfigSetting> InsertConfigSettingAsync(ConfigSetting configSetting)
        {
            dbContext.Add(configSetting);
            await dbContext.SaveChangesAsync().ConfigureAwait(false);
            return configSetting;
        }

        //
        // Add New Config Setting
        //
        public async Task<ConfigValue> InsertConfigValueAsync(ConfigValue configValue)
        {
            dbContext.Add(configValue);
            await dbContext.SaveChangesAsync().ConfigureAwait(false);
            return configValue;
        }
    } //class
} //namespace