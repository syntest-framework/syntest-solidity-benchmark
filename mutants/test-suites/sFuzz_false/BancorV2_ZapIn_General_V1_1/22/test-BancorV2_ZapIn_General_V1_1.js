const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintr8NrT99 = BigInt("1548")
		const BancorV2_ZapIn_General_V1_1sloWlB = await BancorV2_ZapIn_General_V1_1.new(uintr8NrT99, {from: accounts[1]});
		const uintUKEQ3HV = BigInt("160")
		const addressQx9XuiB = await BancorV2_ZapIn_General_V1_1sloWlB.owner.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1sloWlB.toggleContractActive.call({from: accounts[3]});
//		const uint168W1MAl = await BancorV2_ZapIn_General_V1_1sloWlB.set_new_goodwill.call(uintUKEQ3HV, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1sloWlB.toggleContractActive.call({from: accounts[0]});

		assert.equal(addressQx9XuiB, 0x8bB419505543b709577F5e99013d0182b9eFE29D)
		await expect(BancorV2_ZapIn_General_V1_1sloWlB.toggleContractActive.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintRiGievg = BigInt("1395")
		const BancorV2_ZapIn_General_V1_1LPXqus9 = await BancorV2_ZapIn_General_V1_1.new(uintRiGievg, {from: accounts[4]});
		const byteLRnoqzB = "0x0415"
		const addressNC5djp9 = accounts[0]
		const addresszYVkvfV = accounts[2]
		const uintSo1Csk = BigInt("658")
		const uintGRXJcAL = BigInt("1278")
		const addressb77Tawc = accounts[3]
		const addressJ3OZOmq = accounts[3]
		const addressys9Efbr = accounts[1]
		const bytey4se9GI = "0x131e00180c090b0d100c0c0e160a020919091e06021119190d"
		const addressm9zB64T = accounts[1]
		const addressEsuxSnV = accounts[1]
		const uintPcLGaJV = BigInt("1944")
		const uintYl71JdC = BigInt("333")
		const addressYDf8tY = accounts[0]
		const addressU4eW11d = accounts[5]
		const addressFJKQ66p = accounts[3]
		const uintqSpo7Tp = BigInt("1881")
//		const uint256l8co4Yd = await BancorV2_ZapIn_General_V1_1LPXqus9.ZapInSingleSided.call(addressys9Efbr, addressJ3OZOmq, addressb77Tawc, uintGRXJcAL, uintSo1Csk, addresszYVkvfV, addressNC5djp9, byteLRnoqzB, {from: accounts[2]});
//		const uint256XsBjbqu = await BancorV2_ZapIn_General_V1_1LPXqus9.ZapInSingleSided.call(addressFJKQ66p, addressU4eW11d, addressYDf8tY, uintYl71JdC, uintPcLGaJV, addressEsuxSnV, addressm9zB64T, bytey4se9GI, {from: accounts[4]});
//		const uint16Nb8fjwR = await BancorV2_ZapIn_General_V1_1LPXqus9.set_new_goodwill.call(uintqSpo7Tp, {from: accounts[5]});

		await expect(BancorV2_ZapIn_General_V1_1LPXqus9.ZapInSingleSided.call(addressys9Efbr, addressJ3OZOmq, addressb77Tawc, uintGRXJcAL, uintSo1Csk, addresszYVkvfV, addressNC5djp9, byteLRnoqzB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintOemHsr9 = BigInt("1263")
		const BancorV2_ZapIn_General_V1_1QAWixer = await BancorV2_ZapIn_General_V1_1.new(uintOemHsr9, {from: accounts[2]});
		const addresscVKCMPj = accounts[4]
		const addressTYDEcfo = accounts[0]
//		const addressP4tEDJ = await BancorV2_ZapIn_General_V1_1QAWixer.toPayable.call(addresscVKCMPj, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1QAWixer.nonReentrant.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1QAWixer.stopInEmergency.call({from: accounts[3]});
//		const addressWWTHJP = await BancorV2_ZapIn_General_V1_1QAWixer.inCaseTokengetsStuck.call(addressTYDEcfo, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1QAWixer.toPayable.call(addresscVKCMPj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintFtiWy0 = BigInt("750")
		const BancorV2_ZapIn_General_V1_1xzFiUeg = await BancorV2_ZapIn_General_V1_1.new(uintFtiWy0, {from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1xzFiUeg.renounceOwnership.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1xzFiUeg.renounceOwnership.call({from: accounts[2]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintWcI4f5K = BigInt("668")
		const BancorV2_ZapIn_General_V1_1aIES051 = await BancorV2_ZapIn_General_V1_1.new(uintWcI4f5K, {from: accounts[1]});
		const uintmK8Z0uI = BigInt("1655")
		const addressOHAugf = accounts[1]
//		await BancorV2_ZapIn_General_V1_1aIES051.renounceOwnership.call({from: accounts[1]});
//		const uint16tFqCS0l = await BancorV2_ZapIn_General_V1_1aIES051.set_new_goodwill.call(uintmK8Z0uI, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1aIES051.toggleContractActive.call({from: accounts[3]});
//		const addressyqZZbEA = await BancorV2_ZapIn_General_V1_1aIES051.inCaseTokengetsStuck.call(addressOHAugf, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1aIES051.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1aIES051.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintdqTmuTc = BigInt("143")
		const BancorV2_ZapIn_General_V1_1d8w8kCT = await BancorV2_ZapIn_General_V1_1.new(uintdqTmuTc, {from: accounts[3]});
		const addressJLVyor7 = accounts[5]
//		const addressSNOPw1R = await BancorV2_ZapIn_General_V1_1d8w8kCT.inCaseTokengetsStuck.call(addressJLVyor7, {from: accounts[3]});
//		const addressp0CRgs9 = await BancorV2_ZapIn_General_V1_1d8w8kCT.owner.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1d8w8kCT.stopInEmergency.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1d8w8kCT.inCaseTokengetsStuck.call(addressJLVyor7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintK1yrQ1j = BigInt("143")
		const BancorV2_ZapIn_General_V1_1d8w8kCT = await BancorV2_ZapIn_General_V1_1.new(uintK1yrQ1j, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1d8w8kCT.toggleContractActive.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1d8w8kCT.toggleContractActive.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintSflPPRj = BigInt("143")
		const BancorV2_ZapIn_General_V1_1d8w8kCT = await BancorV2_ZapIn_General_V1_1.new(uintSflPPRj, {from: accounts[3]});
		const byteLLTKRkA = "0x2006170e091d061c08110f200a110a0f1202161c01131c161a0c1608150e"
		const addressrzluK4S = accounts[2]
		const addressoHQdwYl = accounts[1]
		const uintBWYHQkC = BigInt("1955")
		const uintOLNeEpo = BigInt("1344")
		const addressmbukPYQ = accounts[5]
		const addressTZ1cuH = accounts[1]
		const addresslzQdVXK = accounts[0]
//		await BancorV2_ZapIn_General_V1_1d8w8kCT.withdraw.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1d8w8kCT.stopInEmergency.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ggeBwO4 = await BancorV2_ZapIn_General_V1_1d8w8kCT.ZapInSingleSided.call(addresslzQdVXK, addressTZ1cuH, addressmbukPYQ, uintOLNeEpo, uintBWYHQkC, addressoHQdwYl, addressrzluK4S, byteLLTKRkA, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1d8w8kCT.withdraw.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintodhKnAv = BigInt("143")
		const BancorV2_ZapIn_General_V1_1d8w8kCT = await BancorV2_ZapIn_General_V1_1.new(uintodhKnAv, {from: accounts[3]});
		const uintfIIkFLZ = BigInt("1489")
		const addressC1AhgOL = accounts[1]
		const uint16fUy3aVy = await BancorV2_ZapIn_General_V1_1d8w8kCT.set_new_goodwill.call(uintfIIkFLZ, {from: accounts[3]});
//		const addressJFrmzUi = await BancorV2_ZapIn_General_V1_1d8w8kCT.inCaseTokengetsStuck.call(addressC1AhgOL, {from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1d8w8kCT.stopInEmergency.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1d8w8kCT.inCaseTokengetsStuck.call(addressC1AhgOL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintvka3eaF = BigInt("143")
		const BancorV2_ZapIn_General_V1_1d8w8kCT = await BancorV2_ZapIn_General_V1_1.new(uintvka3eaF, {from: accounts[3]});
		const addressf74LpiT = accounts[0]
		const uintj7KA9h5 = BigInt("1106")
		const addressHlurYjj = await BancorV2_ZapIn_General_V1_1d8w8kCT.transferOwnership.call(addressf74LpiT, {from: accounts[3]});
		const uint16uiolsvi = await BancorV2_ZapIn_General_V1_1d8w8kCT.set_new_goodwill.call(uintj7KA9h5, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1d8w8kCT.nonReentrant.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1d8w8kCT.stopInEmergency.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1d8w8kCT.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})