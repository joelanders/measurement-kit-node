#include <nan.h>
#include <measurement_kit/ooni.hpp>

#include "version.hpp"  // NOLINT(build/include)

using v8::Function;
using v8::Local;
using v8::String;
using v8::Value;
using Nan::AsyncQueueWorker;
using Nan::AsyncWorker;
using Nan::Callback;
using Nan::HandleScope;
using Nan::New;
using Nan::Null;
using Nan::To;

NAN_METHOD(Version) {
  std::string v = mk::ooni::orchestrate::testing_registry_url();
  Local<String> nV = New("XXX").ToLocalChecked();
  info.GetReturnValue().Set(nV);
}
