const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenDeUzal = await ThriftToken.new({from: accounts[0]});
		const uintGWYM32 = BigInt("1308")
		const addresscyegRyX = accounts[2]
		const addressizIeAH7 = accounts[3]
		const boolK1tDTB = await ThriftTokenDeUzal.decreaseApproval.call(addresscyegRyX, uintGWYM32, {from: accounts[3]});
		const uint256JSVGw8X = await ThriftTokenDeUzal.transferableTokens.call(addressizIeAH7, {from: accounts[1]});

		assert.equal(boolK1tDTB, true)
		assert.equal(uint256JSVGw8X, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokeno4Xas5f = await ThriftToken.new({from: accounts[1]});
		const addressmRSmFSn = accounts[2]
		const addressO8URF0 = accounts[4]
		const uintkTT2gmR = BigInt("1567")
		const addresswoH53pq = "0x0000000000000000000000000000000000000001"
		const uintBjgl2YY = BigInt("511")
		const addressRZuWarB = accounts[4]
		const addressL4i5KPf = accounts[0]
		const uintV6PkoEa = BigInt("870")
		const addressTyKDPnq = accounts[1]
		const addressYv9EhcR = accounts[3]
		const uintCiPGzo = BigInt("1265")
		const addressqcaZvSO = accounts[0]
		const uintM7VZYRO = BigInt("1726")
		const addressvGATu9y = accounts[4]
		const uint256HtIPRB = await ThriftTokeno4Xas5f.allowance.call(addressO8URF0, addressmRSmFSn, {from: accounts[5]});
		const boolL6l5yAi = await ThriftTokeno4Xas5f.increaseApproval.call(addresswoH53pq, uintkTT2gmR, {from: accounts[1]});
//		const boollZTM4m0 = await ThriftTokeno4Xas5f.transferFrom.call(addressL4i5KPf, addressRZuWarB, uintBjgl2YY, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbez91dt = await ThriftTokeno4Xas5f.transferFrom.call(addressYv9EhcR, addressTyKDPnq, uintV6PkoEa, {from: accounts[1]});
//		const boolOJmk3AB = await ThriftTokeno4Xas5f.decreaseApproval.call(addressqcaZvSO, uintCiPGzo, {from: accounts[3]});
//		const boolHIfZPxD = await ThriftTokeno4Xas5f.transfer.call(addressvGATu9y, uintM7VZYRO, {from: accounts[0]});

		assert.equal(boolL6l5yAi, true)
		assert.equal(uint256HtIPRB, BigInt("0"))
		await expect(ThriftTokeno4Xas5f.transferFrom.call(addressL4i5KPf, addressRZuWarB, uintBjgl2YY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenoU8Jvq = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const address6auiNo = accounts[2]
		const addressjRUJtrN = accounts[4]
		const uintuzWPEhl = BigInt("453")
		const addressCegfQTm = accounts[3]
		const addressDSImYy = accounts[4]
		const addressgpjFHFe = accounts[0]
		const uintgPU2oQB = BigInt("1118")
		const addressbK6IaTb = accounts[4]
		const addressFKG8hxt = accounts[1]
		const addressBvaXal9 = accounts[0]
		const uint256t1KJ67X = await ThriftTokenoU8Jvq.allowance.call(addressjRUJtrN, address6auiNo, {from: accounts[3]});
		const boolPYOgQ8L = await ThriftTokenoU8Jvq.transferFrom.call(addressDSImYy, addressCegfQTm, uintuzWPEhl, {from: accounts[1]});
		const addressZdzvUH = await ThriftTokenoU8Jvq.transferOwnership.call(addressgpjFHFe, {from: accounts[3]});
		const boolnh1go7t = await ThriftTokenoU8Jvq.transferFrom.call(addressFKG8hxt, addressbK6IaTb, uintgPU2oQB, {from: accounts[0]});
		const uint256UBPkJ18 = await ThriftTokenoU8Jvq.transferableTokens.call(addressBvaXal9, {from: accounts[2]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokencvLYaUc = await ThriftToken.new({from: accounts[1]});
		const addressSyyn20 = accounts[0]
		const uinttsxM69 = BigInt("1239")
		const addressEqzWy2W = accounts[1]
		const addressC6L73PA = accounts[0]
		const uinttAMQMbD = BigInt("563")
		const addressSblHrPM = accounts[3]
		const addressH9KeMHW = accounts[3]
//		const addressgHRB2Ds = await ThriftTokencvLYaUc.transferOwnership.call(addressSyyn20, {from: accounts[3]});
//		const boolkEt4dzi = await ThriftTokencvLYaUc.transferFrom.call(addressC6L73PA, addressEqzWy2W, uinttsxM69, {from: accounts[3]});
//		const booljNItcJY = await ThriftTokencvLYaUc.transferFrom.call(addressH9KeMHW, addressSblHrPM, uinttAMQMbD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ThriftTokencvLYaUc.transferOwnership.call(addressSyyn20, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenh4XnmU = await ThriftToken.new({from: accounts[2]});
		const uintMRF9NcV = BigInt("714")
		const addressz2wgca = accounts[1]
		const uintuH7pVnD = BigInt("969")
		const addressBsGCQT2 = accounts[3]
		const uintHtfqcrZ = BigInt("1031")
		const addressB6rtxZ5 = "0x0000000000000000000000000000000000000001"
		const uintpiW7e3a = BigInt("1636")
		const addressqI7GlFo = accounts[2]
//		const boolJEwb6J = await ThriftTokenh4XnmU.transfer.call(addressz2wgca, uintMRF9NcV, {from: accounts[1]});
//		const boolPBVjHmn = await ThriftTokenh4XnmU.decreaseApproval.call(addressBsGCQT2, uintuH7pVnD, {from: accounts[2]});
//		const boolWvZ8Au = await ThriftTokenh4XnmU.approve.call(addressB6rtxZ5, uintHtfqcrZ, {from: accounts[1]});
//		const boolB5fHpH0 = await ThriftTokenh4XnmU.increaseApproval.call(addressqI7GlFo, uintpiW7e3a, {from: accounts[5]});

		await expect(ThriftTokenh4XnmU.transfer.call(addressz2wgca, uintMRF9NcV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenDeUzal = await ThriftToken.new({from: accounts[0]});
		const uintFlnZef7 = BigInt("1315")
		const addressIbu8xO5 = accounts[2]
		const uintI6CBgfS = BigInt("1499")
		const addressGAAtM4F = accounts[3]
		const boolK1tDTB = await ThriftTokenDeUzal.decreaseApproval.call(addressIbu8xO5, uintFlnZef7, {from: accounts[3]});
		const boolf3M6VhG = await ThriftTokenDeUzal.approve.call(addressGAAtM4F, uintI6CBgfS, {from: accounts[0]});

		assert.equal(boolK1tDTB, true)
		assert.equal(boolf3M6VhG, true)
	});
})