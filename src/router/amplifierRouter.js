import SelectDevice from "../views/SelectDevice.vue";
import ConnectionEstablished from "../views/ConnectionEstablished.vue";
import MainMenu from "../views/amplifier/MainMenu.vue";
import HealthStatus from "../views/amplifier/HealthStatus.vue"
import ThresholdConfig from "../views/amplifier/ThresholdConfig.vue"
import DeviceConfiguration from "../views/amplifier/DeviceConfiguration.vue"
import DownstreamConfiguration from "../views/amplifier/DownstreamConfiguration.vue"
import PilotSetup from "../views/amplifier/PilotSetup.vue"
import ConfigureSettings from "../views/amplifier/ConfigureSettings.vue"
import UpstreamConfiguration from "../views/amplifier/UpstreamConfiguration.vue"
import AdvancedDiagnostics from "../views/amplifier/AdvancedDiagnostics.vue";
import UtilitiesMenu from "../views/amplifier/UtilitiesMenu.vue";
import ProfilesInfo from "../views/amplifier/ProfilesInfo.vue";
import SpectrumDisplay from "../views/amplifier/SpectrumDisplay.vue";
import AuxilaryPluginSelection from "../views/amplifier/AuxilaryPluginSelection.vue";
import PortDefinition from "../views/amplifier/PortDefinition.vue";
import FirmwareUpgrade from "../views/amplifier/FirmwareUpgrade.vue";
import TestMode from "../views/amplifier/TestMode.vue";
import IngressControlSwitch from "../views/amplifier/IngressControlSwitch.vue";

import DownstreamLevelSelection from "../views/amplifier/DownstreamLevelSelection.vue";
import TrunkLevelDetailView from "../views/amplifier/TrunkLevelDetailView.vue";
import GuidedSetup from "../views/amplifier/GuidedSetup.vue";
import GuidedConfigfile from "../views/amplifier/GuidedConfigfile.vue";
import GuidedConfigureVACThresholds from "../views/amplifier/GuidedConfigureVACThresholds.vue";
import GuidedSetupPilotSetup from "../views/amplifier/GuidedSetupPilotSetup.vue";
import ConfigureGainTiltFrequencies from "../views/amplifier/ConfigureGainTiltFrequencies.vue";
import DownstreamLevelAdjustment from "../views/amplifier/DownstreamLevelAdjustment.vue";
import UpstreamInputAttenuationSettingManual from "../views/amplifier/UpstreamInputAttenuationSettingManual.vue"
import UpstreamLevelAdjustment from "../views/amplifier/UpstreamLevelAdjustment.vue";
import GuidedAmplifierMode from "../views/amplifier/GuidedAmplifierMode.vue";
import GuidedProfilesInfo from "../views/amplifier/GuidedProfilesInfo.vue";
import DeviceInformation from "../views/amplifier/DeviceInformation.vue";


const basePath = "/amplifier";

export default [
  { path: `${basePath}/selectdevice`, name: "SelectDevice", component: SelectDevice },
  { path: `${basePath}/connectionestablished`, name: "ConnectionEstablished", component: ConnectionEstablished },
  { path: `${basePath}/mainmenu`, name: "MainMenu", component: MainMenu },
  { path: `${basePath}/healthstatus`, name: "HealthStatus", component: HealthStatus },
  { path: `${basePath}/thresholdconfig`, name: "ThresholdConfig", component: ThresholdConfig },  
  { path: `${basePath}/deviceconfiguration`, name: "DeviceConfiguration", component: DeviceConfiguration },  
  { path: `${basePath}/downstreamconfiguration`, name: "DownstreamConfiguration", component: DownstreamConfiguration },  
  { path: `${basePath}/configuresettings`, name: "ConfigureSettings", component: ConfigureSettings },  
  { path: `${basePath}/pilotsetup`, name: "PilotSetup", component: PilotSetup },  
  
  { path: `${basePath}/upstreamconfiguration`, name: "UpstreamConfiguration", component: UpstreamConfiguration },    
  { path: `${basePath}/advanceddiagnostics`, name: "AdvancedDiagnostics", component: AdvancedDiagnostics },    
  { path: `${basePath}/utilitiesmenu`, name: "UtilitiesMenu", component: UtilitiesMenu },    
  { path: `${basePath}/profilesinfo`, name: "ProfilesInfo", component: ProfilesInfo },    
  { path: `${basePath}/spectrumdisplay`, name: "SpectrumDisplay", component: SpectrumDisplay },    
  { path: `${basePath}/auxilarypluginselection`, name: "AuxilaryPluginSelection", component: AuxilaryPluginSelection },    
  { path: `${basePath}/firmwareupgrade`, name: "FirmwareUpgrade", component: FirmwareUpgrade },    
  { path: `${basePath}/testmode`, name: "TestMode", component: TestMode },  
  { path: `${basePath}/ingresscontrolswitch`, name: "IngressControlSwitch", component: IngressControlSwitch },
  { path: `${basePath}/portdefinition`, name: "PortDefinition", component: PortDefinition },
  { path: `${basePath}/downstreamlevelselection`, name: "DownstreamLevelSelection", component: DownstreamLevelSelection },
  { path: `${basePath}/trunkleveldetailview`, name: "TrunkLevelDetailView", component: TrunkLevelDetailView },
  { path: `${basePath}/guidedsetup`, name: "GuidedSetup", component: GuidedSetup },
  { path: `${basePath}/guidedconfigfile`, name: "GuidedConfigfile", component: GuidedConfigfile },
  { path: `${basePath}/guidedconfigurevacthresholds`, name: "GuidedConfigureVACThresholds", component: GuidedConfigureVACThresholds },
  { path: `${basePath}/guidedsetuppilotsetup`, name: "GuidedSetupPilotSetup", component: GuidedSetupPilotSetup },
  { path: `${basePath}/gaintiltfreq`, name: "ConfigureGainTiltFrequencies", component: ConfigureGainTiltFrequencies },
  { path: `${basePath}/downstreamleveladjustment`, name: "DownstreamLevelAdjustment", component: DownstreamLevelAdjustment },
  { path: `${basePath}/upstreaminputattenuationsettingmanual`, name: "UpstreamInputAttenuationSettingManual", component: UpstreamInputAttenuationSettingManual },
  { path: `${basePath}/upstreamleveladjustment`, name: "UpstreamLevelAdjustment", component: UpstreamLevelAdjustment },
  { path: `${basePath}/guidedamplifiermode`, name: "GuidedAmplifierMode", component: GuidedAmplifierMode },
  { path: `${basePath}/guidedprofilesinfo`, name: "GuidedProfilesInfo", component: GuidedProfilesInfo },
  { path: `${basePath}/deviceinformation`, name: "DeviceInformation", component: DeviceInformation },
  
  
];

