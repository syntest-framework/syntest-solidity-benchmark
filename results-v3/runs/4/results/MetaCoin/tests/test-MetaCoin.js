const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoiniO8YvMz = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCgqOQQA = BigInt("1730")
		const addressODsRtj2 = accounts[0]
		const uintLHANpTf = BigInt("1151")
		const addressPnyMEky = accounts[4]
		const uintg5u2h7 = BigInt("1231")
		const addressvjKcLjF = accounts[0]
		const boolpsulsIQ = await MetaCoiniO8YvMz.sendCoin.call(addressODsRtj2, uintCgqOQQA, {from: accounts[2]});
		const boolR9vdfiY = await MetaCoiniO8YvMz.sendCoin.call(addressPnyMEky, uintLHANpTf, {from: accounts[0]});
		const boolaz5OQED = await MetaCoiniO8YvMz.sendCoin.call(addressvjKcLjF, uintg5u2h7, {from: accounts[5]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinoS5wQjd = await MetaCoin.new({from: accounts[1]});
		const uinttbaeHJh = BigInt("499")
		const addressQMcSpiy = accounts[1]
		const uintXNfyEZW = BigInt("877")
		const addresskdivPLO = accounts[3]
		const uintcY2dQBO = BigInt("1514")
		const addressVV0ZVPF = accounts[4]
		const uintPFAoB9e = BigInt("1013")
		const addresscvye1nD = accounts[1]
		const boolZfFJKNp = await MetaCoinoS5wQjd.sendCoin.call(addressQMcSpiy, uinttbaeHJh, {from: accounts[4]});
		const boolC7Zw8bf = await MetaCoinoS5wQjd.sendCoin.call(addresskdivPLO, uintXNfyEZW, {from: accounts[4]});
		const boolcd2ZS3P = await MetaCoinoS5wQjd.sendCoin.call(addressVV0ZVPF, uintcY2dQBO, {from: accounts[5]});
		const boolOtWRP5y = await MetaCoinoS5wQjd.sendCoin.call(addresscvye1nD, uintPFAoB9e, {from: accounts[5]});

		assert.equal(boolC7Zw8bf, false)
		assert.equal(boolOtWRP5y, false)
		assert.equal(boolZfFJKNp, false)
		assert.equal(boolcd2ZS3P, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinCInqIdj = await MetaCoin.new({from: accounts[2]});
		const uinthSIzdMs = BigInt("404")
		const addressrnvFPPx = accounts[2]
		const uintGVNu8LI = BigInt("801")
		const addressfPEE3Z = accounts[5]
		const uintcJFBh05 = BigInt("1900")
		const addressrIWcDys = accounts[4]
		const uintDjPvK77 = BigInt("430")
		const addressly1xeqw = accounts[3]
		const boolwdCzYDe = await MetaCoinCInqIdj.sendCoin.call(addressrnvFPPx, uinthSIzdMs, {from: accounts[3]});
		const boolfXIhRFA = await MetaCoinCInqIdj.sendCoin.call(addressfPEE3Z, uintGVNu8LI, {from: accounts[3]});
		const boolLBVK4F = await MetaCoinCInqIdj.sendCoin.call(addressrIWcDys, uintcJFBh05, {from: accounts[3]});
		const boolbReDzOq = await MetaCoinCInqIdj.sendCoin.call(addressly1xeqw, uintDjPvK77, {from: accounts[2]});

		assert.equal(boolLBVK4F, false)
		assert.equal(boolbReDzOq, true)
		assert.equal(boolfXIhRFA, false)
		assert.equal(boolwdCzYDe, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinxWE3rha = await MetaCoin.new({from: accounts[1]});
		const uintWl4oXYc = BigInt("2034")
		const addressOggant = accounts[1]
		const uinth3gioyh = BigInt("617")
		const addressvzM2UVC = accounts[4]
		const uintDwRSK6p = BigInt("2")
		const addressNkc9XHO = accounts[5]
		const uintvRp11eT = BigInt("514")
		const addressSIPFtZ6 = accounts[4]
		const uintqIgcwbW = BigInt("1858")
		const addressoiNar2f = accounts[1]
		const boolKAwXGEy = await MetaCoinxWE3rha.sendCoin.call(addressOggant, uintWl4oXYc, {from: accounts[1]});
		const boolH1JAHoa = await MetaCoinxWE3rha.sendCoin.call(addressvzM2UVC, uinth3gioyh, {from: accounts[0]});
		const boolK8NVnDx = await MetaCoinxWE3rha.sendCoin.call(addressNkc9XHO, uintDwRSK6p, {from: accounts[1]});
		const boolGiDw8g3 = await MetaCoinxWE3rha.sendCoin.call(addressSIPFtZ6, uintvRp11eT, {from: accounts[4]});
		const boolHU1Afxd = await MetaCoinxWE3rha.sendCoin.call(addressoiNar2f, uintqIgcwbW, {from: accounts[5]});

		assert.equal(boolGiDw8g3, false)
		assert.equal(boolH1JAHoa, false)
		assert.equal(boolHU1Afxd, false)
		assert.equal(boolK8NVnDx, true)
		assert.equal(boolKAwXGEy, true)
	});
})