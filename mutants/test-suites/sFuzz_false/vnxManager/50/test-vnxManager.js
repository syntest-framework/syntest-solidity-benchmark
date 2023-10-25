const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerVv6pzun = await vnxManager.new({from: accounts[0]});
		const uintaczVe2E = BigInt("13")
		const addressBtuNruU = accounts[1]
		const boolF295a1a = await vnxManagerVv6pzun.isAdmin.call({from: accounts[0]});
		const boolRaz4mPS = await vnxManagerVv6pzun.hasRole.call(addressBtuNruU, uintaczVe2E, {from: accounts[3]});
		const uint256doFH2Mc = await vnxManagerVv6pzun.totalRoles.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolF295a1a, true)
		assert.equal(boolRaz4mPS, false)
		assert.equal(uint256doFH2Mc, BigInt("1"))
	});

	it('test for vnxManager', async () => {
		const vnxManagery01bBY9 = await vnxManager.new({from: accounts[4]});
		const uintpPT2knE = BigInt("2044")
		const addressQ0dddH = accounts[1]
		const boolWyo0lRD = await vnxManagery01bBY9.hasRole.call(addressQ0dddH, uintpPT2knE, {from: accounts[3]});
		const addresstyQfCkW = await vnxManagery01bBY9.owner.call({from: accounts[4]});

		assert.equal(addresstyQfCkW, 0x4b19EF35649414440EC60bFA499faf5Eea107b76)
		assert.equal(boolWyo0lRD, false)
	});

	it('test for vnxManager', async () => {
		const vnxManagerXimwloP = await vnxManager.new({from: accounts[0]});
		const stringJj601K8 = "9MLfDHWFmKJi2Q624iPdqsCbX9jHVrA8UTGjojt5i9FKvqg6iPSeVlkpmLiCOgpxg1U7AtF1X"
		const uintswmtmVt = BigInt("292")
		const stringA3e07Wf = "n8SiVfzuWuSzMqwnn17FS99lWJVhPnxJ3Anlpfh91w3Qc6Gdr"
		const boolsk7XUJc = await vnxManagerXimwloP.isOwner.call({from: accounts[1]});
		const uint256sC4wWkN = await vnxManagerXimwloP.addRootRole.call(stringJj601K8, {from: accounts[2]});
//		const uint256Jl0GGAg = await vnxManagerXimwloP.addRole.call(stringA3e07Wf, uintswmtmVt, {from: accounts[3]});

		assert.equal(boolsk7XUJc, false)
		assert.equal(uint256sC4wWkN, BigInt("0"))
		await expect(vnxManagerXimwloP.addRole.call(stringA3e07Wf, uintswmtmVt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageruzvcFhM = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintG6DF6za = BigInt("916")
		const stringLSRUQ4S = "d6ng5GvxqAd11QDFrdQjcjpkxA6g0v6ROW2HU8Al7e1svsbv5OpgBzJpkWA4JdaDrbsG"
		const addressDZXoC3i = accounts[3]
		const addressgktmXRJ = accounts[1]
		const uint256dhVzmUa = await vnxManageruzvcFhM.addRole.call(stringLSRUQ4S, uintG6DF6za, {from: accounts[4]});
		const uint256lyVqmxU = await vnxManageruzvcFhM.totalRoles.call({from: accounts[0]});
		const boolncjZq7 = await vnxManageruzvcFhM.isOwner.call({from: accounts[3]});
		const boolUJunva1 = await vnxManageruzvcFhM.transferContractOwnership.call(addressgktmXRJ, addressDZXoC3i, {from: "0x0000000000000000000000000000000000000001"});
		const boolsE2DQAR = await vnxManageruzvcFhM.isAdmin.call({from: accounts[4]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerYCal8E8 = await vnxManager.new({from: accounts[3]});
		const addressV9iRUF4 = accounts[2]
//		await vnxManagerYCal8E8.onlyOwner.call({from: accounts[1]});
//		const addressJ1dgJAi = await vnxManagerYCal8E8.transferOwnership.call(addressV9iRUF4, {from: accounts[3]});
//		await vnxManagerYCal8E8.onlyAdmin.call({from: accounts[5]});

		await expect(vnxManagerYCal8E8.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerJAqR5oB = await vnxManager.new({from: accounts[0]});
		const uintrrPyXr = BigInt("669")
		const addressYHLp8EM = accounts[2]
		const uintJxMzOIr = BigInt("1833")
		const addresspdOvvV = accounts[1]
		const uintY4t7TGp = BigInt("402")
		const addressZtcH0FX = accounts[1]
		const bool5bCihq = await vnxManagerJAqR5oB.hasRole.call(addressYHLp8EM, uintrrPyXr, {from: accounts[2]});
		const boolDQIlpib = await vnxManagerJAqR5oB.hasRole.call(addresspdOvvV, uintJxMzOIr, {from: accounts[1]});
//		const addressB3QKxx6 = await vnxManagerJAqR5oB.addBearer.call(addressZtcH0FX, uintY4t7TGp, {from: accounts[3]});

		assert.equal(bool5bCihq, false)
		assert.equal(boolDQIlpib, false)
		await expect(vnxManagerJAqR5oB.addBearer.call(addressZtcH0FX, uintY4t7TGp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerYiR28z = await vnxManager.new({from: accounts[2]});
		const stringIvxKvIV = "TomG2AqLK4eeHXaeV8dS0olqBG79zGwLPW4orQEFTy5NNgiyYkrOTawQ"
		const addressFGIhrzt = accounts[1]
		const addressvrvQhAy = accounts[0]
		const addressq337TWI = await vnxManagerYiR28z.owner.call({from: accounts[3]});
//		await vnxManagerYiR28z.renounceOwnership.call({from: accounts[3]});
//		const uint256SlCj30 = await vnxManagerYiR28z.addRootRole.call(stringIvxKvIV, {from: accounts[1]});
//		await vnxManagerYiR28z.onlyOwner.call({from: accounts[3]});
//		const addresstHzagDe = await vnxManagerYiR28z.transferOwnership.call(addressFGIhrzt, {from: accounts[2]});
//		const addressRFYTVeU = await vnxManagerYiR28z.transferOwnership.call(addressvrvQhAy, {from: accounts[0]});

		assert.equal(addressq337TWI, 0x98DCD99FA44A9EE137326b06A01Ade78829c6A51)
		await expect(vnxManagerYiR28z.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagery01bBY9 = await vnxManager.new({from: accounts[4]});
		const uintsBNvlH = BigInt("2044")
		const addressYePairY = accounts[1]
		const addressdCgDVM3 = accounts[0]
		const addressun1hbj = accounts[2]
		const uintPYh1foh = BigInt("1755")
		const addressCGiYw0o = "0x0000000000000000000000000000000000000001"
		const addressbTbdYOj = await vnxManagery01bBY9.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolWyo0lRD = await vnxManagery01bBY9.hasRole.call(addressYePairY, uintsBNvlH, {from: accounts[3]});
//		const boolsHt1IOa = await vnxManagery01bBY9.transferContractOwnership.call(addressun1hbj, addressdCgDVM3, {from: accounts[3]});
//		const booll8UQWkk = await vnxManagery01bBY9.hasRole.call(addressCGiYw0o, uintPYh1foh, {from: accounts[4]});
//		const addresstyQfCkW = await vnxManagery01bBY9.owner.call({from: accounts[4]});

		assert.equal(addressbTbdYOj, 0x4b19EF35649414440EC60bFA499faf5Eea107b76)
		assert.equal(boolWyo0lRD, false)
		await expect(vnxManagery01bBY9.transferContractOwnership.call(addressun1hbj, addressdCgDVM3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerYqXRg6a = await vnxManager.new({from: accounts[3]});
		const stringqkiOFKZ = "4j9oZNoI3FqWOtoyCMcofPI7xJPoz4vdXevNRWDhPu6EHZxyvxx"
		const uintj7XXTf = BigInt("840")
		const addressuTHZeE = accounts[2]
		const uintk9r241c = BigInt("1546")
		const addressiYVSP6t = "0x0000000000000000000000000000000000000001"
		const addressQIgCtrU = accounts[2]
		const addressJIYlPq = accounts[1]
		const uint256CMW6Myq = await vnxManagerYqXRg6a.addRootRole.call(stringqkiOFKZ, {from: accounts[5]});
		const boolQE5FJpM = await vnxManagerYqXRg6a.hasRole.call(addressuTHZeE, uintj7XXTf, {from: accounts[2]});
//		const addressjdy4X9a = await vnxManagerYqXRg6a.removeBearer.call(addressiYVSP6t, uintk9r241c, {from: accounts[5]});
//		const boolUmyLYyE = await vnxManagerYqXRg6a.transferContractOwnership.call(addressJIYlPq, addressQIgCtrU, {from: accounts[1]});

		assert.equal(boolQE5FJpM, false)
		assert.equal(uint256CMW6Myq, BigInt("0"))
		await expect(vnxManagerYqXRg6a.removeBearer.call(addressiYVSP6t, uintk9r241c, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerOqCji2S = await vnxManager.new({from: accounts[2]});
		const stringBq7hrfR = "0YzouAsdC3pDrRVl3zn6lix7vK1AvN9rOuo"
		const addressH6wGsg4 = accounts[0]
		const uint256ILxGfCf = await vnxManagerOqCji2S.addRootRole.call(stringBq7hrfR, {from: accounts[0]});
		const addressd3Bfct3 = await vnxManagerOqCji2S.transferOwnership.call(addressH6wGsg4, {from: accounts[2]});
		const addressX90TX2 = await vnxManagerOqCji2S.owner.call({from: accounts[4]});
		const uint256GJO4PJH = await vnxManagerOqCji2S.totalRoles.call({from: accounts[2]});
//		await vnxManagerOqCji2S.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressX90TX2, 0x98DCD99FA44A9EE137326b06A01Ade78829c6A51)
		assert.equal(uint256GJO4PJH, BigInt("1"))
		assert.equal(uint256ILxGfCf, BigInt("0"))
		await expect(vnxManagerOqCji2S.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagery01bBY9 = await vnxManager.new({from: accounts[4]});
		const addressBfr25oY = accounts[3]
		const addressyhdAYv3 = accounts[1]
		const uintaqxIIXG = BigInt("2044")
		const addressx5eqGNs = accounts[2]
//		const boolrpJQ4F9 = await vnxManagery01bBY9.transferContractOwnership.call(addressyhdAYv3, addressBfr25oY, {from: accounts[4]});
//		const boolWyo0lRD = await vnxManagery01bBY9.hasRole.call(addressx5eqGNs, uintaqxIIXG, {from: accounts[3]});

		await expect(vnxManagery01bBY9.transferContractOwnership.call(addressyhdAYv3, addressBfr25oY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagery01bBY9 = await vnxManager.new({from: accounts[4]});
		const uintendVFNS = BigInt("259")
		const addressvbDfgX6 = accounts[2]
		const addressBiUlmP5 = accounts[1]
		const uinthT5GbZN = BigInt("2035")
		const addressyEEZeTe = accounts[2]
//		await vnxManagery01bBY9.renounceOwnership.call({from: accounts[4]});
//		const boolQ31L8Xi = await vnxManagery01bBY9.hasRole.call(addressvbDfgX6, uintendVFNS, {from: accounts[2]});
//		const addressDlIuQUc = await vnxManagery01bBY9.transferOwnership.call(addressBiUlmP5, {from: accounts[0]});
//		const boolWyo0lRD = await vnxManagery01bBY9.hasRole.call(addressyEEZeTe, uinthT5GbZN, {from: accounts[3]});

		await expect(vnxManagery01bBY9.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})