const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenaoZvlFZ = await MIMOToken.new({from: accounts[2]});
		const uintCPAU8h = BigInt("642")
		const addressb8yOMc = accounts[5]
		const uintHOXegsp = BigInt("234")
		const addressCx6bv2V = accounts[1]
		const uinttJSNLkh = BigInt("1735")
		const boolwptfZoN = await MIMOTokenaoZvlFZ.approve.call(addressb8yOMc, uintCPAU8h, {from: accounts[1]});
		const uintiuq9JMC = await MIMOTokenaoZvlFZ.totalSupply.call({from: accounts[4]});
//		const boolSPu0Mpe = await MIMOTokenaoZvlFZ.transfer.call(addressCx6bv2V, uintHOXegsp, {from: accounts[5]});
//		const uint256M2DBAqu = await MIMOTokenaoZvlFZ.setMinFee.call(uinttJSNLkh, {from: accounts[4]});

		assert.equal(boolwptfZoN, true)
		assert.equal(uintiuq9JMC, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenaoZvlFZ.transfer.call(addressCx6bv2V, uintHOXegsp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenqqwvtIp = await MIMOToken.new({from: accounts[3]});
		const addressbuiWZSE = accounts[3]
		const uintqvYC2He = BigInt("408")
		const addressoiQqmHR = accounts[3]
		const uintp1cqApd = await MIMOTokenqqwvtIp.totalSupply.call({from: accounts[0]});
		const uintNsKq7b = await MIMOTokenqqwvtIp.balanceOf.call(addressbuiWZSE, {from: accounts[4]});
		const boolZtgivQl = await MIMOTokenqqwvtIp.approve.call(addressoiQqmHR, uintqvYC2He, {from: accounts[3]});

		assert.equal(boolZtgivQl, true)
		assert.equal(uintNsKq7b, BigInt("0"))
		assert.equal(uintp1cqApd, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenRxnLiCy = await MIMOToken.new({from: accounts[3]});
		const uintQvcBuPE = BigInt("563")
		const addressgWaubw4 = "0x0000000000000000000000000000000000000001"
		const uint256yMtaQs = await MIMOTokenRxnLiCy.getFee.call(uintQvcBuPE, {from: accounts[1]});
		const uinttCWGHZs = await MIMOTokenRxnLiCy.totalSupply.call({from: accounts[5]});
		const uintV1nQxCI = await MIMOTokenRxnLiCy.balanceOf.call(addressgWaubw4, {from: accounts[3]});

		assert.equal(uint256yMtaQs, BigInt("50000000000000000"))
		assert.equal(uintV1nQxCI, BigInt("0"))
		assert.equal(uinttCWGHZs, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokennnJrJ7 = await MIMOToken.new({from: accounts[3]});
		const addresspSZqyYL = accounts[2]
		const addressfSNuILS = accounts[3]
		const uintSwbXnGO = BigInt("1125")
		const addressu8Y3QLi = accounts[0]
		const addressGTKdWqN = accounts[3]
		const uintvkOcaO = BigInt("1562")
		const uintxb3cTcm = await MIMOTokennnJrJ7.balanceOf.call(addresspSZqyYL, {from: accounts[4]});
		const uintQ9ifAdA = await MIMOTokennnJrJ7.balanceOf.call(addressfSNuILS, {from: accounts[5]});
		const uint256bkg8FCM = await MIMOTokennnJrJ7.setFeeRate.call(uintSwbXnGO, {from: accounts[4]});
		const uintm2R6yq = await MIMOTokennnJrJ7.allowance.call(addressGTKdWqN, addressu8Y3QLi, {from: "0x0000000000000000000000000000000000000001"});
		const uint256e0nbtkC = await MIMOTokennnJrJ7.setMinFee.call(uintvkOcaO, {from: accounts[1]});

		assert.equal(uintQ9ifAdA, BigInt("0"))
		assert.equal(uintm2R6yq, BigInt("0"))
		assert.equal(uintxb3cTcm, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenZRl0VXT = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressy3EsTIq = accounts[3]
		const addressXk1W36Q = accounts[1]
		const addressmB3YXJq = accounts[1]
		const addressny2NYf = accounts[2]
		const uintuYCRBbk = await MIMOTokenZRl0VXT.balanceOf.call(addressy3EsTIq, {from: accounts[0]});
		const uint0SQxOa = await MIMOTokenZRl0VXT.allowance.call(addressmB3YXJq, addressXk1W36Q, {from: accounts[2]});
		const uintOkeviQE = await MIMOTokenZRl0VXT.balanceOf.call(addressny2NYf, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenEyaK4Mf = await MIMOToken.new({from: accounts[1]});
		const uintAiouz1g = BigInt("1830")
		const uintqSw2vd = BigInt("302")
		const addressYMTUe7A = accounts[5]
		const addressWjgs93M = accounts[2]
		const uintvupjDjv = BigInt("2044")
		const addressfcLTt9e = accounts[0]
		const addressbA2ybo = accounts[1]
		const addressq8IA9Ry = "0x0000000000000000000000000000000000000001"
		const uintzmpoP6t = BigInt("1227")
		const addressc1A0PQY = "0x0000000000000000000000000000000000000001"
		const uint59lP2d = BigInt("440")
		const addressbVQzwIa = accounts[3]
		const addressmbILCTw = accounts[2]
		const uint256t8cj1X = await MIMOTokenEyaK4Mf.setFeeRate.call(uintAiouz1g, {from: accounts[2]});
//		const boolBiUgZRb = await MIMOTokenEyaK4Mf.transferFrom.call(addressWjgs93M, addressYMTUe7A, uintqSw2vd, {from: accounts[2]});
//		const boolMjQTlY = await MIMOTokenEyaK4Mf.approve.call(addressfcLTt9e, uintvupjDjv, {from: accounts[3]});
//		const uintqqKOrbr = await MIMOTokenEyaK4Mf.allowance.call(addressq8IA9Ry, addressbA2ybo, {from: accounts[3]});
//		const boolAdYJyn = await MIMOTokenEyaK4Mf.transfer.call(addressc1A0PQY, uintzmpoP6t, {from: accounts[2]});
//		const boolGMNlA3O = await MIMOTokenEyaK4Mf.transferFrom.call(addressmbILCTw, addressbVQzwIa, uint59lP2d, {from: accounts[4]});

		await expect(MIMOTokenEyaK4Mf.transferFrom.call(addressWjgs93M, addressYMTUe7A, uintqSw2vd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenEyaK4Mf = await MIMOToken.new({from: accounts[1]});
		const uintRljrDN = BigInt("824")
		const uintltgutYY = BigInt("1830")
		const addressneySgdb = accounts[0]
		const addressvkrlrmw = "0x0000000000000000000000000000000000000001"
		const uintGT7Qw5 = BigInt("1227")
		const addressetayVrE = "0x0000000000000000000000000000000000000000"
		const uintW1fMLAa = BigInt("139")
		const addresssiTOtnx = accounts[3]
		const uintAic9ciQ = BigInt("440")
		const addressg4HEKyD = accounts[3]
		const addressQh7bksu = accounts[2]
		const uint256ocIA4L2 = await MIMOTokenEyaK4Mf.getFee.call(uintRljrDN, {from: accounts[1]});
		const uint256t8cj1X = await MIMOTokenEyaK4Mf.setFeeRate.call(uintltgutYY, {from: accounts[2]});
		const uintqqKOrbr = await MIMOTokenEyaK4Mf.allowance.call(addressvkrlrmw, addressneySgdb, {from: accounts[3]});
//		const boolAdYJyn = await MIMOTokenEyaK4Mf.transfer.call(addressetayVrE, uintGT7Qw5, {from: accounts[2]});
//		const boolnXfWS9o = await MIMOTokenEyaK4Mf.transfer.call(addresssiTOtnx, uintW1fMLAa, {from: accounts[5]});
//		const boolGMNlA3O = await MIMOTokenEyaK4Mf.transferFrom.call(addressQh7bksu, addressg4HEKyD, uintAic9ciQ, {from: accounts[4]});

		assert.equal(uint256ocIA4L2, BigInt("50000000000000000"))
		assert.equal(uintqqKOrbr, BigInt("0"))
		await expect(MIMOTokenEyaK4Mf.transfer.call(addressetayVrE, uintGT7Qw5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenywZoInr = await MIMOToken.new({from: accounts[0]});
		const uintGjoXkbV = BigInt("1391")
		const addressqlaoHvC = "0x00000000000000000000000000000000000000-1"
		const addressZuH3V4e = accounts[0]
		const uintQdCirEL = BigInt("364")
		const addresszMLCoG2 = accounts[5]
		const uintKtTbj2W = BigInt("881")
		const addressEYJAOQt = accounts[3]
		const addresswTsA7tM = accounts[3]
//		const boolrPwsvc = await MIMOTokenywZoInr.transferFrom.call(addressZuH3V4e, addressqlaoHvC, uintGjoXkbV, {from: accounts[4]});
//		const boolHzwXek = await MIMOTokenywZoInr.transfer.call(addresszMLCoG2, uintQdCirEL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolh1NyJrn = await MIMOTokenywZoInr.transferFrom.call(addresswTsA7tM, addressEYJAOQt, uintKtTbj2W, {from: accounts[3]});

		await expect(MIMOTokenywZoInr.transferFrom.call(addressZuH3V4e, addressqlaoHvC, uintGjoXkbV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})