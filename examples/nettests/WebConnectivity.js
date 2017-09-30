const mk = require('../../build/Release/measurement-kit')
const SegfaultHandler = require('segfault-handler')
SegfaultHandler.registerHandler('crash.log')

const options = {
  backend: '',
  geoipCountryPath: '',
  geoipAsnPath: '',
  saveRealProbeIp: false,
  saveRealProbeAsn: true,
  saveRealProbeCc: true,
  noCollector: false,
  collectorBaseUrl: '',
  maxRuntime: '',
  softwareName: '',
  softwareVersion: '',

  verbosity: mk.LOG_INFO,
  inputFilePath: '',
  errorFilePath: '',
  outputFilePath: ''
}

wc = mk.WebConnectivityTest(options)
wc.on_progress((prog, s) => {
  console.log('progress', prog, s)
})
wc.on_log((type, s) => {
  console.log('log', type, s)
})
wc.on_entry((e) => {
  console.log('entry', e)
})
wc.add_input('https://ooni.io/')
wc.run(() => {console.log('done')})
//  .then(result => {
//    console.log('web_connectivity test finished running with result', result)
//  })
//  .catch(error => {
//    console.log(error)
//  })
