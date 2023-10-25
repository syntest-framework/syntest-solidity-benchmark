const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicEzzsioL = await Dynamic.new({from: accounts[4]});
		const uintWekLyae = BigInt("1810")
		const stringNn7QSa = "WziljqgJu2kpnjA4pRBI5iPNtwFw6djgsy4Kb9WwQYJbev7V5XzwHzHD"
		const uintxXttyi3 = BigInt("61")
		const uintTp78dMr = BigInt("448")
		const string3WNROG = "DfQcq9glaPzw3MflxI3lYEVGEn"
		const uintFR64bT = BigInt("1029")
		const uintIxzoX17 = BigInt("1949")
		const stringuPU6Af = "MtHvOXufVsrTJdUaO756O6wMo9OPV6mKUQUHCmDQ6KOu94jZmDN"
		const uintGCXdJnP = BigInt("1129")
		const boolKdPOHI5 = await DynamicEzzsioL.echidna_test.call({from: accounts[3]});
		const boolZHzWihV = await DynamicEzzsioL.yolo.call(uintxXttyi3, stringNn7QSa, uintWekLyae, {from: accounts[2]});
		const booldB4fcsl = await DynamicEzzsioL.yolo.call(uintFR64bT, string3WNROG, uintTp78dMr, {from: accounts[0]});
		const bool0SCyQd = await DynamicEzzsioL.yolo.call(uintGCXdJnP, stringuPU6Af, uintIxzoX17, {from: accounts[0]});

		assert.equal(bool0SCyQd, true)
		assert.equal(boolKdPOHI5, true)
		assert.equal(boolZHzWihV, true)
		assert.equal(booldB4fcsl, true)
	});

	it('test for Dynamic', async () => {
		const DynamicJbQVtPh = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqQAzhG3 = BigInt("1760")
		const stringk4X0Gj = "sN8CnqnItyNwxIrnBlKkcI8ZfzCDS8CzSmTBtjTShaXBD1DX9e3zEd6CNaLqkILQX2"
		const uintEMiqz9w = BigInt("395")
		const uintiH7wwe7 = BigInt("951")
		const stringdUqVz6T = "snLgPsyXaT6hac3vXyvzSpa6eZxlhLevVWg"
		const uintrEVLBOf = BigInt("1404")
		const uinthAMjZrG = BigInt("482")
		const stringmjkux3m = "llMX57j56P8QOJvJJ03bOw5FyfkoM52MhBTEstOlpLnojvxBuObFJUEBEeTMgSfUEXWXODj5DGknlakUziaB8astDTM"
		const uintPmplR04 = BigInt("1899")
		const uintsCeGByA = BigInt("1525")
		const stringeQ0081 = "fx9QuA1VwgaNVpfZG665cHxk32f6WqiVULUGl77mG4qaDKsHVTbfpU7P2N2Uvk595F8Ed0OcTS8utDcngQGpT8SHspJyhxyPje"
		const uintAAzkfaZ = BigInt("1302")
		const boolu7vqN0m = await DynamicJbQVtPh.yolo.call(uintEMiqz9w, stringk4X0Gj, uintqQAzhG3, {from: "0x0000000000000000000000000000000000000001"});
		const boolfTiZhuy = await DynamicJbQVtPh.yolo.call(uintrEVLBOf, stringdUqVz6T, uintiH7wwe7, {from: accounts[1]});
		const boolUdcirMI = await DynamicJbQVtPh.yolo.call(uintPmplR04, stringmjkux3m, uinthAMjZrG, {from: accounts[5]});
		const booldm8UBgD = await DynamicJbQVtPh.yolo.call(uintAAzkfaZ, stringeQ0081, uintsCeGByA, {from: accounts[0]});
	});
})