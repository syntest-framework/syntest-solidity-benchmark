const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagersBFy0NU = await vnxManager.new({from: accounts[4]});
		const addresstUMOdA = accounts[4]
		const addressQgouLqy = accounts[3]
		const uinth3NnO9C = BigInt("983")
		const stringXtLR1q4 = "UH6PW80mVwqj6lBB8ym2zc1RUNnNGs6yYm1qMedgr211LSbpc"
//		const boolEmr8CiA = await vnxManagersBFy0NU.transferContractOwnership.call(addressQgouLqy, addresstUMOdA, {from: accounts[4]});
//		const uint256H2kmNnv = await vnxManagersBFy0NU.addRole.call(stringXtLR1q4, uinth3NnO9C, {from: accounts[3]});

		await expect(vnxManagersBFy0NU.transferContractOwnership.call(addressQgouLqy, addresstUMOdA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerNqWccgN = await vnxManager.new({from: accounts[4]});
		const addresspPkD68u = accounts[2]
		const addressSCFjCcs = accounts[1]
		const uintlCztVfZ = BigInt("1424")
		const addressAfJNCE = accounts[4]
//		const boolVAY5gRJ = await vnxManagerNqWccgN.transferContractOwnership.call(addressSCFjCcs, addresspPkD68u, {from: accounts[5]});
//		const addressdSKO018 = await vnxManagerNqWccgN.addBearer.call(addressAfJNCE, uintlCztVfZ, {from: accounts[1]});
//		await vnxManagerNqWccgN.onlyOwner.call({from: accounts[3]});
//		const uint256daNq91N = await vnxManagerNqWccgN.totalRoles.call({from: accounts[5]});

		await expect(vnxManagerNqWccgN.transferContractOwnership.call(addressSCFjCcs, addresspPkD68u, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerW24Wjk0 = await vnxManager.new({from: accounts[2]});
		const boolzGfSTt = await vnxManagerW24Wjk0.isAdmin.call({from: accounts[4]});
//		await vnxManagerW24Wjk0.onlyOwner.call({from: accounts[2]});
		await vnxManagerW24Wjk0.onlyOwner.call({from: accounts[2]});
//		await vnxManagerW24Wjk0.onlyOwner.call({from: accounts[0]});

		assert.equal(boolzGfSTt, false)
		await expect(vnxManagerW24Wjk0.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerCcwgVVh = await vnxManager.new({from: accounts[5]});
		const uintxxkElfG = BigInt("1892")
		const addressi9JJQ34 = accounts[1]
		const boolpBKxwl = await vnxManagerCcwgVVh.hasRole.call(addressi9JJQ34, uintxxkElfG, {from: accounts[0]});
		const addressatygAey = await vnxManagerCcwgVVh.owner.call({from: accounts[3]});

		assert.equal(addressatygAey, 0xc0A52d78563c789Ce414854DCfC6219f35DAb273)
		assert.equal(boolpBKxwl, false)
	});

	it('test for vnxManager', async () => {
		const vnxManagervy9sndE = await vnxManager.new({from: accounts[1]});
		const uintUnC82li = BigInt("1578")
		const stringHNvBJhq = "4yHoAGhK9fhAVqzyBW5q3bAlvjmbhwQgbThfOhsfnExQUaSu28wvNjU"
		const uint256p6WNmC = await vnxManagervy9sndE.totalRoles.call({from: "0x0000000000000000000000000000000000000001"});
		const bool6D3n2l = await vnxManagervy9sndE.isAdmin.call({from: accounts[2]});
//		const uint256EEAKKMY = await vnxManagervy9sndE.addRole.call(stringHNvBJhq, uintUnC82li, {from: accounts[4]});

		assert.equal(bool6D3n2l, false)
		assert.equal(uint256p6WNmC, BigInt("1"))
		await expect(vnxManagervy9sndE.addRole.call(stringHNvBJhq, uintUnC82li, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerKbiIySF = await vnxManager.new({from: accounts[2]});
		const uintCQ7qOc = BigInt("1303")
		const addressxyPwBvT = accounts[3]
		const uintj8DZjzR = BigInt("674")
		const addressGvD0ae0 = "0x0000000000000000000000000000000000000001"
		const uintHfwPtma = BigInt("394")
		const addressOSJGcQz = accounts[3]
//		const addressU1qNyxe = await vnxManagerKbiIySF.addBearer.call(addressxyPwBvT, uintCQ7qOc, {from: accounts[0]});
//		const boolqIQuBJi = await vnxManagerKbiIySF.isOwner.call({from: accounts[3]});
//		const boolLtxt0x = await vnxManagerKbiIySF.hasRole.call(addressGvD0ae0, uintj8DZjzR, {from: accounts[4]});
//		const boolJLqj9Ru = await vnxManagerKbiIySF.hasRole.call(addressOSJGcQz, uintHfwPtma, {from: accounts[1]});
//		await vnxManagerKbiIySF.onlyOwner.call({from: accounts[5]});
//		const uint256HsizmAR = await vnxManagerKbiIySF.totalRoles.call({from: accounts[0]});

		await expect(vnxManagerKbiIySF.addBearer.call(addressxyPwBvT, uintCQ7qOc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerRJ55Ic = await vnxManager.new({from: accounts[3]});
		const uintyapOOzW = BigInt("156")
		const addressxGxCYwI = accounts[2]
		const stringPg9JrYH = "S9R9DESqbmIS4nOSjk8CfIAv5NZ77iTmjg98M66Qjj61JXUlQ"
		const uintHppFMY = BigInt("143")
		const stringTZ5Xmsf = "wVs7iQtDL6seP9KuuIfFxYk3T0OguYe2R6feMEHQC2ZbkqcV4"
		const uint256yIYBaQi = await vnxManagerRJ55Ic.totalRoles.call({from: accounts[2]});
//		const addresscGVqIW3 = await vnxManagerRJ55Ic.removeBearer.call(addressxGxCYwI, uintyapOOzW, {from: accounts[4]});
//		const boolzNTXlJg = await vnxManagerRJ55Ic.isOwner.call({from: accounts[4]});
//		const uint256cpNdva6 = await vnxManagerRJ55Ic.addRootRole.call(stringPg9JrYH, {from: accounts[0]});
//		const uint256T4iLigj = await vnxManagerRJ55Ic.addRole.call(stringTZ5Xmsf, uintHppFMY, {from: accounts[1]});
//		await vnxManagerRJ55Ic.onlyAdmin.call({from: accounts[4]});

		assert.equal(uint256yIYBaQi, BigInt("1"))
		await expect(vnxManagerRJ55Ic.removeBearer.call(addressxGxCYwI, uintyapOOzW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageraLDuUqx = await vnxManager.new({from: accounts[0]});
		const addresshxao7R4 = accounts[3]
		const uintqgkrTfA = BigInt("1119")
		const addressLQ5qWSF = accounts[1]
//		const addressf3OsitT = await vnxManageraLDuUqx.transferOwnership.call(addresshxao7R4, {from: accounts[2]});
//		const boolox6JCV8 = await vnxManageraLDuUqx.hasRole.call(addressLQ5qWSF, uintqgkrTfA, {from: accounts[1]});

		await expect(vnxManageraLDuUqx.transferOwnership.call(addresshxao7R4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerWdRDLMs = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const addressAiukEZ0 = accounts[1]
		const addresszMj5BVq = accounts[4]
		const addressz7NV2RT = accounts[1]
		const addresshK1F64c = "0x0000000000000000000000000000000000000001"
		const boolSM66qU = await vnxManagerWdRDLMs.transferContractOwnership.call(addresszMj5BVq, addressAiukEZ0, {from: accounts[1]});
		const addressbqkgr9l = await vnxManagerWdRDLMs.owner.call({from: accounts[4]});
		const boolRTWUBwW = await vnxManagerWdRDLMs.transferContractOwnership.call(addresshK1F64c, addressz7NV2RT, {from: accounts[0]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerEZpAygW = await vnxManager.new({from: accounts[0]});
		const uintkVKJx6t = BigInt("1056")
		const addresspi4KeG5 = accounts[1]
		const uintidIGxdA = BigInt("1022")
		const addressrzJoZJh = accounts[2]
		const uintqXChDLg = BigInt("1766")
		const addresswPebaJw = accounts[1]
		const boolasZi6p9 = await vnxManagerEZpAygW.hasRole.call(addresspi4KeG5, uintkVKJx6t, {from: accounts[4]});
//		await vnxManagerEZpAygW.renounceOwnership.call({from: accounts[0]});
//		const boolzaza64V = await vnxManagerEZpAygW.isOwner.call({from: accounts[5]});
//		const booly5YvxD4 = await vnxManagerEZpAygW.hasRole.call(addressrzJoZJh, uintidIGxdA, {from: accounts[4]});
//		const addressLJYP3Nc = await vnxManagerEZpAygW.removeBearer.call(addresswPebaJw, uintqXChDLg, {from: accounts[3]});
//		await vnxManagerEZpAygW.onlyAdmin.call({from: accounts[2]});

		assert.equal(boolasZi6p9, false)
		await expect(vnxManagerEZpAygW.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageraLDuUqx = await vnxManager.new({from: accounts[0]});
		const addressc7jgkp7 = accounts[3]
		const address0jXg0l = accounts[4]
		const addressd64j27 = await vnxManageraLDuUqx.transferOwnership.call(addressc7jgkp7, {from: accounts[0]});
//		const addressf3OsitT = await vnxManageraLDuUqx.transferOwnership.call(address0jXg0l, {from: accounts[2]});

		await expect(vnxManageraLDuUqx.transferOwnership.call(address0jXg0l, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})