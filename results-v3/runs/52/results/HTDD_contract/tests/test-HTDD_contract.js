const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractRxjyRlC = await HTDD_contract.new({from: accounts[4]});
		const uintsfPMUuv = BigInt("1808")
		const addressQESOqLF = accounts[1]
		const addressxguSZME = accounts[4]
		const addressb4Dzxiu = accounts[5]
		const addressdogMBtD = accounts[3]
		const uintoIVgFD2 = BigInt("868")
		const addressKNkgcAR = accounts[4]
		const address8RuLqx = accounts[1]
		const addressu4WAKrl = accounts[0]
		const uinttYsWCc9 = BigInt("992")
		const addresstFgpBav = accounts[3]
		const addressO2zeS2R = accounts[1]
		const uintuTIjj2V = BigInt("1806")
		const addressRD38P3p = accounts[3]
		const boolkN1dpoy = await HTDD_contractRxjyRlC.transferFrom.call(addressxguSZME, addressQESOqLF, uintsfPMUuv, {from: accounts[4]});
		const uint256cdSYQrw = await HTDD_contractRxjyRlC.allowance.call(addressdogMBtD, addressb4Dzxiu, {from: accounts[2]});
		const boolkQzIQO9 = await HTDD_contractRxjyRlC.transfer.call(addressKNkgcAR, uintoIVgFD2, {from: accounts[0]});
		const uint256MlXYuo5 = await HTDD_contractRxjyRlC.allowance.call(addressu4WAKrl, address8RuLqx, {from: accounts[4]});
		const boolyfO7d4w = await HTDD_contractRxjyRlC.transferFrom.call(addressO2zeS2R, addresstFgpBav, uinttYsWCc9, {from: accounts[5]});
		const boolW3pv6BH = await HTDD_contractRxjyRlC.transfer.call(addressRD38P3p, uintuTIjj2V, {from: accounts[3]});

		await expect(HTDD_contractRxjyRlC.transferFrom.call(addressxguSZME, addressQESOqLF, uintsfPMUuv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contract55f7mJ = await HTDD_contract.new({from: accounts[5]});
		const uintkEcG8aQ = BigInt("256")
		const addressN8w2TRH = accounts[2]
		const uintkydPOQ = BigInt("143")
		const addressfnZTV4 = accounts[2]
		const uinte1Byymf = BigInt("303")
		const addressukwgwBS = accounts[2]
		const addresskRlDqC = accounts[0]
		const boolMJdaFv2 = await HTDD_contract55f7mJ.approve.call(addressN8w2TRH, uintkEcG8aQ, {from: accounts[0]});
		const boolHzpkw05 = await HTDD_contract55f7mJ.approve.call(addressfnZTV4, uintkydPOQ, {from: accounts[1]});
		const boolmhKM0n7 = await HTDD_contract55f7mJ.transferFrom.call(addresskRlDqC, addressukwgwBS, uinte1Byymf, {from: accounts[1]});

		assert.equal(boolHzpkw05, true)
		assert.equal(boolMJdaFv2, true)
		await expect(HTDD_contract55f7mJ.transferFrom.call(addresskRlDqC, addressukwgwBS, uinte1Byymf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractpu88uRu = await HTDD_contract.new({from: accounts[2]});
		const uintoqws32L = BigInt("527")
		const addressss3SL7r = accounts[2]
		const uintmE3nHqw = BigInt("1105")
		const addressD04hpID = "0x0000000000000000000000000000000000000001"
		const uintYHTy1H = BigInt("609")
		const addresso7xGVOU = accounts[2]
		const uinttwGajwX = BigInt("773")
		const addressWAcnMUJ = accounts[4]
		const addresszNdbYnV = accounts[2]
		const uintmBy3g7G = BigInt("1241")
		const addressTQVP6eR = accounts[1]
		const uintyCGPEzB = BigInt("1411")
		const addressEVBzZ8w = accounts[3]
		const addresszFMGVyy = accounts[2]
		const boolgm8gaWy = await HTDD_contractpu88uRu.transfer.call(addressss3SL7r, uintoqws32L, {from: accounts[3]});
		const boolZKsCRy = await HTDD_contractpu88uRu.transfer.call(addressD04hpID, uintmE3nHqw, {from: accounts[4]});
		const boolE59GlZE = await HTDD_contractpu88uRu.approve.call(addresso7xGVOU, uintYHTy1H, {from: accounts[0]});
		const boollYqY0C5 = await HTDD_contractpu88uRu.transferFrom.call(addresszNdbYnV, addressWAcnMUJ, uinttwGajwX, {from: accounts[5]});
		const boolFvNEd02 = await HTDD_contractpu88uRu.approve.call(addressTQVP6eR, uintmBy3g7G, {from: accounts[4]});
		const boolwNVKp3 = await HTDD_contractpu88uRu.transferFrom.call(addresszFMGVyy, addressEVBzZ8w, uintyCGPEzB, {from: accounts[1]});

		await expect(HTDD_contractpu88uRu.transfer.call(addressss3SL7r, uintoqws32L, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractJyFHdg = await HTDD_contract.new({from: accounts[1]});
		const uintkWMNJM2 = BigInt("223")
		const addressGRg3KuU = accounts[3]
		const uinthQ9gDiN = BigInt("1942")
		const addressucwx6h4 = accounts[0]
		const addressQG3nRVQ = accounts[1]
		const boolO6HYKPl = await HTDD_contractJyFHdg.transfer.call(addressGRg3KuU, uintkWMNJM2, {from: accounts[1]});
		const boolCMIyNou = await HTDD_contractJyFHdg.transferFrom.call(addressQG3nRVQ, addressucwx6h4, uinthQ9gDiN, {from: accounts[2]});

		assert.equal(boolO6HYKPl, true)
		await expect(HTDD_contractJyFHdg.transferFrom.call(addressQG3nRVQ, addressucwx6h4, uinthQ9gDiN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractRxjyRlC = await HTDD_contract.new({from: accounts[4]});
		const address4gzTct = accounts[5]
		const addressdZ7p1ow = accounts[3]
		const uintMovqV6p = BigInt("868")
		const addressykJk3iT = accounts[4]
		const addressYqZXCld = accounts[1]
		const addressNJOIFyh = accounts[1]
		const uintyDW2aQO = BigInt("992")
		const addressYq3peIq = accounts[3]
		const addresszWHfn6J = accounts[1]
		const uint256cdSYQrw = await HTDD_contractRxjyRlC.allowance.call(addressdZ7p1ow, address4gzTct, {from: accounts[2]});
		const boolkQzIQO9 = await HTDD_contractRxjyRlC.transfer.call(addressykJk3iT, uintMovqV6p, {from: accounts[0]});
		const uint256MlXYuo5 = await HTDD_contractRxjyRlC.allowance.call(addressNJOIFyh, addressYqZXCld, {from: accounts[4]});
		const boolyfO7d4w = await HTDD_contractRxjyRlC.transferFrom.call(addresszWHfn6J, addressYq3peIq, uintyDW2aQO, {from: accounts[5]});

		assert.equal(uint256cdSYQrw, BigInt("0"))
		await expect(HTDD_contractRxjyRlC.transfer.call(addressykJk3iT, uintMovqV6p, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contracthHQ0IcH = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgcCqxR = BigInt("384")
		const addressbrhFlLj = accounts[1]
		const uintRe4H7Y = BigInt("261")
		const addressNuwiuyp = accounts[4]
		const addressfFnWw9a = accounts[4]
		const uintDkpbHGj = BigInt("369")
		const addresso6c3o1k = accounts[3]
		const addresswFQ7CfL = accounts[1]
		const uintcrgvhs0 = BigInt("238")
		const addressiJE2eqV = "0x0000000000000000000000000000000000000001"
		const boolYrtoLX = await HTDD_contracthHQ0IcH.approve.call(addressbrhFlLj, uintgcCqxR, {from: accounts[0]});
		const booloqPYc1 = await HTDD_contracthHQ0IcH.transferFrom.call(addressfFnWw9a, addressNuwiuyp, uintRe4H7Y, {from: accounts[2]});
		const boolZN6txAr = await HTDD_contracthHQ0IcH.transferFrom.call(addresswFQ7CfL, addresso6c3o1k, uintDkpbHGj, {from: accounts[2]});
		const boolQJFCxCg = await HTDD_contracthHQ0IcH.approve.call(addressiJE2eqV, uintcrgvhs0, {from: accounts[5]});
	});
})