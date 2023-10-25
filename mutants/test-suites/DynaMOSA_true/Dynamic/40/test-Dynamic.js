const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicMZswhTn = await Dynamic.new({from: accounts[0]});
		const uintIkXkY1U = BigInt("443")
		const stringKGDrEu = "sGutDJ1ogRznoDXnCNRWp4dD916kAIWbwY6n7Mto1FVxuQARwgluzXIlRMin79pVQTIJzqr"
		const uintDDETJKE = BigInt("2037")
		const uintRwJF1ps = BigInt("1915")
		const stringH8SXBy = "Qy8A3DdfAQw5Yts28KVmGD6EMx4bS2dCLiBdbq4sGA1JgU3D57w2ITYEttJlf6"
		const uintFFDopDj = BigInt("543")
		const uintiSPIES = BigInt("727")
		const stringqPMh0ug = "EesuqJXFD8obifhzusdys4mQCuJUGIYhmWY3pBWRRSGMWifun7kfWqXALdVGAWKYuJ"
		const uintk3IuHLH = BigInt("1767")
		const boolPfbyoz5 = await DynamicMZswhTn.yolo.call(uintDDETJKE, stringKGDrEu, uintIkXkY1U, {from: accounts[5]});
		const boolr1nl0jl = await DynamicMZswhTn.yolo.call(uintFFDopDj, stringH8SXBy, uintRwJF1ps, {from: accounts[4]});
		const boolUuah0u = await DynamicMZswhTn.echidna_test.call({from: accounts[5]});
		const boolhtAxdB = await DynamicMZswhTn.yolo.call(uintk3IuHLH, stringqPMh0ug, uintiSPIES, {from: accounts[3]});
		const boolvyO1E4O = await DynamicMZswhTn.echidna_test.call({from: accounts[2]});

		assert.equal(boolPfbyoz5, true)
		assert.equal(boolUuah0u, true)
		assert.equal(boolhtAxdB, true)
		assert.equal(boolr1nl0jl, true)
		assert.equal(boolvyO1E4O, true)
	});

	it('test for Dynamic', async () => {
		const DynamicLQYfcHi = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintu2yotxr = BigInt("611")
		const stringeehCPB = "Qs6fM3YjatHFzAWJJrYt7KpQIOTtpYNAVYbNc0GUNQk1vwUTHXRFU8ka4tx4amjvvCL"
		const uintydhJApi = BigInt("757")
		const uintltEZoAo = BigInt("763")
		const stringeMG5sJZ = "fByC5sKudfFNxgraoVvALieilJiHovZFfzd2KNcA7Swe6eqocycvM1czfu"
		const uintBXLhmKc = BigInt("752")
		const boolJSkb98 = await DynamicLQYfcHi.echidna_test.call({from: accounts[3]});
		const boolXnuR72U = await DynamicLQYfcHi.yolo.call(uintydhJApi, stringeehCPB, uintu2yotxr, {from: accounts[0]});
		const boolB0SjOPA = await DynamicLQYfcHi.echidna_test.call({from: accounts[3]});
		const boolllhTflx = await DynamicLQYfcHi.echidna_test.call({from: accounts[2]});
		const boolQSNxV30 = await DynamicLQYfcHi.yolo.call(uintBXLhmKc, stringeMG5sJZ, uintltEZoAo, {from: accounts[2]});
		const booltmRcVRG = await DynamicLQYfcHi.echidna_test.call({from: accounts[2]});
	});
})