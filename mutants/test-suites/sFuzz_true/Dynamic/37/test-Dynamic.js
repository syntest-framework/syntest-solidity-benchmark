const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicnjhbbED = await Dynamic.new({from: accounts[2]});
		const uintaq023VU = BigInt("807")
		const stringGwz7Z5I = "AfBU9enJfYGNlCwsuYQ5lBOkxV9xDMTlECq26WirKhA7lmoS2voWFNSYTOOPimgtJn"
		const uintUaeYRA1 = BigInt("1288")
		const uintexvOwq = BigInt("1728")
		const stringJcbJFAm = "UJEsZV9wMRcgA1K4DzZqs74W"
		const uintrotlyP = BigInt("3")
		const boolCkPSvJP = await DynamicnjhbbED.echidna_test.call({from: accounts[0]});
		const boolyxj6vE = await DynamicnjhbbED.echidna_test.call({from: accounts[5]});
		const boolwds17RY = await DynamicnjhbbED.echidna_test.call({from: accounts[3]});
		const boolAG8S2B5 = await DynamicnjhbbED.yolo.call(uintUaeYRA1, stringGwz7Z5I, uintaq023VU, {from: accounts[3]});
		const boolwxZxAHQ = await DynamicnjhbbED.yolo.call(uintrotlyP, stringJcbJFAm, uintexvOwq, {from: accounts[1]});

		assert.equal(boolAG8S2B5, true)
		assert.equal(boolCkPSvJP, true)
		assert.equal(boolwds17RY, true)
		assert.equal(boolwxZxAHQ, true)
		assert.equal(boolyxj6vE, true)
	});

	it('test for Dynamic', async () => {
		const DynamicXDh7QtV = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintx5jvKko = BigInt("923")
		const strings4Ayn9x = "VbnA17bPGxRq4oChvbCDsjfsWwHJNPvGeWWFAlFp5q6tDbk4YIo8y7RJJyXsFbVUO2Maghx1"
		const uintAhV50jI = BigInt("1555")
		const uintlwr5YiM = BigInt("1718")
		const stringX8JxvaL = "ZJy9BycI2g29iO3TdoeGP2BZkEyh37FjkmM6Um4Q3gV8ei80VUzaPzj4U9e6JxSuluHiWknZx0Cux5LFzTDiPDM1JE"
		const uintILMX6i = BigInt("1127")
		const uintuUb2AZQ = BigInt("1233")
		const stringD667mBe = "i7AjxYrHuN69eALvDXDMFW"
		const uintgg6S744 = BigInt("71")
		const boolIl8klRN = await DynamicXDh7QtV.echidna_test.call({from: accounts[2]});
		const boolQsjTJMQ = await DynamicXDh7QtV.yolo.call(uintAhV50jI, strings4Ayn9x, uintx5jvKko, {from: accounts[4]});
		const booliQRge27 = await DynamicXDh7QtV.yolo.call(uintILMX6i, stringX8JxvaL, uintlwr5YiM, {from: accounts[4]});
		const bool84M8CR = await DynamicXDh7QtV.echidna_test.call({from: accounts[3]});
		const boolxSLjzGX = await DynamicXDh7QtV.yolo.call(uintgg6S744, stringD667mBe, uintuUb2AZQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolHcJGDoI = await DynamicXDh7QtV.echidna_test.call({from: accounts[1]});
	});
})