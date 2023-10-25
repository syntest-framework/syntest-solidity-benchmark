const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerN7KoFXv = await vnxManager.new({from: accounts[0]});
		const uintFgSCOaz = BigInt("171")
		const stringYSdF8ZN = "MOem63FKQNnCkbjoawLc4GdKUajxImQYtRjXhIyqz8xbmQ1RnrzBY"
		await vnxManagerN7KoFXv.renounceOwnership.call({from: accounts[4]});
		const uint256mMCFPkY = await vnxManagerN7KoFXv.addRole.call(stringYSdF8ZN, uintFgSCOaz, {from: accounts[1]});
		const uint256e5UnPsU = await vnxManagerN7KoFXv.totalRoles.call({from: accounts[3]});
		await vnxManagerN7KoFXv.renounceOwnership.call({from: accounts[3]});

		await expect(vnxManagerN7KoFXv.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerZe7oNvN = await vnxManager.new({from: accounts[4]});
		const uintCS52qJ = BigInt("1392")
		const addressvtfZfL = accounts[3]
		const addressDF6TTqg = accounts[0]
		const uinthsif1S2 = BigInt("1983")
		const addressYfXGb4 = accounts[0]
		const boolIVt4HNC = await vnxManagerZe7oNvN.isAdmin.call({from: accounts[2]});
		const boolFT2A2db = await vnxManagerZe7oNvN.hasRole.call(addressvtfZfL, uintCS52qJ, {from: accounts[3]});
		const addressvPUM0t = await vnxManagerZe7oNvN.transferOwnership.call(addressDF6TTqg, {from: accounts[3]});
		const boolN4JJbZW = await vnxManagerZe7oNvN.isAdmin.call({from: accounts[2]});
		const addressIeDA3F5 = await vnxManagerZe7oNvN.addBearer.call(addressYfXGb4, uinthsif1S2, {from: accounts[4]});

		assert.equal(boolFT2A2db, false)
		assert.equal(boolIVt4HNC, false)
		await expect(vnxManagerZe7oNvN.transferOwnership.call(addressDF6TTqg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerkqN4JIi = await vnxManager.new({from: accounts[1]});
		const uintRCPNqeM = BigInt("194")
		const addressIZeqRE3 = accounts[3]
		const addressHI38ZL = "0x0000000000000000000000000000000000000001"
		const addressmgZ3H68 = accounts[3]
		const uintnWcRl9D = BigInt("401")
		const addresskNJCyQ = accounts[4]
		await vnxManagerkqN4JIi.renounceOwnership.call({from: accounts[1]});
		const addressxvBtZOO = await vnxManagerkqN4JIi.addBearer.call(addressIZeqRE3, uintRCPNqeM, {from: accounts[3]});
		const boolDi0x7xw = await vnxManagerkqN4JIi.transferContractOwnership.call(addressmgZ3H68, addressHI38ZL, {from: accounts[3]});
		const boolBag73sA = await vnxManagerkqN4JIi.isOwner.call({from: accounts[0]});
		const addressVmN7Jzl = await vnxManagerkqN4JIi.addBearer.call(addresskNJCyQ, uintnWcRl9D, {from: accounts[1]});

		await expect(vnxManagerkqN4JIi.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerpzBZHwm = await vnxManager.new({from: accounts[4]});
		const uintDaLg21j = BigInt("1705")
		const addressPsw81YG = accounts[4]
		const addressl8zbnm = accounts[3]
		const addressQ4OQoLD = accounts[0]
		const addressoT5VFEY = accounts[4]
		const addresspnOa4DW = accounts[1]
		const boolsVnjzu1 = await vnxManagerpzBZHwm.hasRole.call(addressPsw81YG, uintDaLg21j, {from: accounts[0]});
		const boolfnPCBPE = await vnxManagerpzBZHwm.transferContractOwnership.call(addressQ4OQoLD, addressl8zbnm, {from: accounts[1]});
		const boolRsGAqmD = await vnxManagerpzBZHwm.transferContractOwnership.call(addresspnOa4DW, addressoT5VFEY, {from: accounts[3]});

		assert.equal(boolsVnjzu1, false)
		await expect(vnxManagerpzBZHwm.transferContractOwnership.call(addressQ4OQoLD, addressl8zbnm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageroN9JzJS = await vnxManager.new({from: accounts[2]});
		const addressY1IWwgd = accounts[5]
		const stringN9GAJV = "CCO3uEPKvil7TmHFTvLH1ji9RTcviY"
		const uintfLqnnrT = BigInt("1594")
		const stringk7KEc0E = "5UjsYvTruopGpA8d7kxpVXPNhEJ8XmnvrAIy70Wk6"
		const addresshfH6KG1 = await vnxManageroN9JzJS.transferOwnership.call(addressY1IWwgd, {from: accounts[2]});
		const uint256RxpcwF6 = await vnxManageroN9JzJS.addRootRole.call(stringN9GAJV, {from: accounts[1]});
		const uint256SU9qzXy = await vnxManageroN9JzJS.addRole.call(stringk7KEc0E, uintfLqnnrT, {from: accounts[1]});
		await vnxManageroN9JzJS.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256RxpcwF6, BigInt("0"))
		await expect(vnxManageroN9JzJS.addRole.call(stringk7KEc0E, uintfLqnnrT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerN7KoFXv = await vnxManager.new({from: accounts[0]});
		const addressLet5l0x = accounts[0]
		const uintPcP21I1 = BigInt("171")
		const stringYSdF8ZN = "MOem63FKQNnCkbjoawLc4GdKUajxImQYtRjXhIyqz8xbmQ1RnrzBY"
		await vnxManagerN7KoFXv.onlyOwner.call({from: accounts[4]});
		await vnxManagerN7KoFXv.renounceOwnership.call({from: accounts[4]});
		const addresscR2bU5T = await vnxManagerN7KoFXv.transferOwnership.call(addressLet5l0x, {from: accounts[4]});
		const uint256mMCFPkY = await vnxManagerN7KoFXv.addRole.call(stringYSdF8ZN, uintPcP21I1, {from: accounts[1]});
		const uint256e5UnPsU = await vnxManagerN7KoFXv.totalRoles.call({from: accounts[3]});
		await vnxManagerN7KoFXv.renounceOwnership.call({from: accounts[3]});

		await expect(vnxManagerN7KoFXv.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerkqN4JIi = await vnxManager.new({from: accounts[1]});
		const uint2UpO1u = BigInt("194")
		const addressOqE0jyu = accounts[3]
		const addresskh4Eodm = "0x0000000000000000000000000000000000000001"
		const addresstOZzD7L = accounts[3]
		const uintSZirzlf = BigInt("401")
		const addressCjxSK1R = accounts[4]
		await vnxManagerkqN4JIi.renounceOwnership.call({from: accounts[1]});
		const uint256fZkt9DV = await vnxManagerkqN4JIi.totalRoles.call({from: accounts[0]});
		const addressxvBtZOO = await vnxManagerkqN4JIi.addBearer.call(addressOqE0jyu, uint2UpO1u, {from: accounts[3]});
		const boolDi0x7xw = await vnxManagerkqN4JIi.transferContractOwnership.call(addresstOZzD7L, addresskh4Eodm, {from: accounts[3]});
		const boolBag73sA = await vnxManagerkqN4JIi.isOwner.call({from: accounts[0]});
		const addressVmN7Jzl = await vnxManagerkqN4JIi.addBearer.call(addressCjxSK1R, uintSZirzlf, {from: accounts[1]});

		await expect(vnxManagerkqN4JIi.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerLCl7GB5 = await vnxManager.new({from: accounts[2]});
		const stringdGq838 = "HwIwBmQqnOI1urM9Bvhh1FL0HvTld40xwIB4JMK97czZjHgxngPMz5JSK5M93zb83cTH0ICqYSPZUIdIdNu6"
		const addresso5gnn06 = accounts[1]
		const addresswrPKF4b = accounts[0]
		const uint256bxlQgB = await vnxManagerLCl7GB5.addRootRole.call(stringdGq838, {from: accounts[0]});
		const boolYx4dS0H = await vnxManagerLCl7GB5.transferContractOwnership.call(addresswrPKF4b, addresso5gnn06, {from: accounts[2]});

		assert.equal(uint256bxlQgB, BigInt("0"))
		await expect(vnxManagerLCl7GB5.transferContractOwnership.call(addresswrPKF4b, addresso5gnn06, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerkqN4JIi = await vnxManager.new({from: accounts[1]});
		const stringXQXme4J = "gezDJEk6sWm5BjHt7skMD9PqrA2LEXStMoMAyQ9LiACL7mIdL9S2TjY9k9ae6syrdec3STrHodOFeirdI1wy2L0uUMNhB6uEV"
		const uintlYfq3RC = BigInt("194")
		const addressM2qluyo = accounts[4]
		const addresscZPfjJD = "0x0000000000000000000000000000000000000001"
		const address8hmZFI = accounts[3]
		const addresssUcvy38 = accounts[4]
		const uint3JR44z = BigInt("401")
		const addressCkdslGo = accounts[4]
		await vnxManagerkqN4JIi.renounceOwnership.call({from: accounts[1]});
		const uint256ADvqssx = await vnxManagerkqN4JIi.addRootRole.call(stringXQXme4J, {from: accounts[1]});
		const addressAHcgpPN = await vnxManagerkqN4JIi.owner.call({from: accounts[3]});
		const uint256fZkt9DV = await vnxManagerkqN4JIi.totalRoles.call({from: accounts[0]});
		const addressxvBtZOO = await vnxManagerkqN4JIi.addBearer.call(addressM2qluyo, uintlYfq3RC, {from: accounts[3]});
		await vnxManagerkqN4JIi.onlyOwner.call({from: accounts[3]});
		const boolDi0x7xw = await vnxManagerkqN4JIi.transferContractOwnership.call(address8hmZFI, addresscZPfjJD, {from: accounts[3]});
		await vnxManagerkqN4JIi.onlyAdmin.call({from: accounts[3]});
		const addressqa3uFHT = await vnxManagerkqN4JIi.transferOwnership.call(addresssUcvy38, {from: accounts[4]});
		const boolBag73sA = await vnxManagerkqN4JIi.isOwner.call({from: accounts[0]});
		const addressVmN7Jzl = await vnxManagerkqN4JIi.addBearer.call(addressCkdslGo, uint3JR44z, {from: accounts[1]});

		await expect(vnxManagerkqN4JIi.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerLCl7GB5 = await vnxManager.new({from: accounts[2]});
		const stringdGq838 = "HwIwBmQqnOI1urM9Bvhh1FL0HvTld40xwIB4JM97czZjHgxngPMz5JSK5M93zb83cTH0ICqYSPZUIdIdNu6"
		const uintKJEOyE8 = BigInt("1483")
		const addressGCLzp2d = accounts[4]
		const addressJoWS68Y = accounts[1]
		const addressget7Thq = accounts[0]
		const uint256bxlQgB = await vnxManagerLCl7GB5.addRootRole.call(stringdGq838, {from: accounts[0]});
		const addressKXaslmd = await vnxManagerLCl7GB5.removeBearer.call(addressGCLzp2d, uintKJEOyE8, {from: accounts[0]});
		const boolYx4dS0H = await vnxManagerLCl7GB5.transferContractOwnership.call(addressget7Thq, addressJoWS68Y, {from: accounts[2]});
		const uint256rdS44Eu = await vnxManagerLCl7GB5.totalRoles.call({from: accounts[2]});

		assert.equal(uint256bxlQgB, BigInt("0"))
		await expect(vnxManagerLCl7GB5.removeBearer.call(addressGCLzp2d, uintKJEOyE8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerfiaF66e = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uinte0sPsW6 = BigInt("1145")
		const addresssHb4Jnd = accounts[0]
		const boolTI2weBG = await vnxManagerfiaF66e.isAdmin.call({from: accounts[4]});
		const addresspHnXaDH = await vnxManagerfiaF66e.removeBearer.call(addresssHb4Jnd, uinte0sPsW6, {from: accounts[3]});
		const addressQ3sfAXU = await vnxManagerfiaF66e.owner.call({from: accounts[0]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerSROJ8up = await vnxManager.new({from: accounts[4]});
		const addresseoEJ0xl = "0x0000000000000000000000000000000000000000"
		const addresshZnI5AL = accounts[4]
		const addressBrLVH5R = accounts[3]
		const uintoYDbACR = BigInt("1493")
		const addressqfJH3y = accounts[2]
		const stringv6CvYfB = "uYWrULnBqwFxHq6zpCa3vvcrBZ4xXt"
		const boolgywKbpK = await vnxManagerSROJ8up.isAdmin.call({from: accounts[1]});
		const boola5IfSsj = await vnxManagerSROJ8up.transferContractOwnership.call(addresshZnI5AL, addresseoEJ0xl, {from: accounts[4]});
		const addressWEeCV1v = await vnxManagerSROJ8up.transferOwnership.call(addressBrLVH5R, {from: accounts[2]});
		const addressT35YGYe = await vnxManagerSROJ8up.removeBearer.call(addressqfJH3y, uintoYDbACR, {from: accounts[1]});
		const uint256DGh1Ct1 = await vnxManagerSROJ8up.addRootRole.call(stringv6CvYfB, {from: accounts[4]});

		assert.equal(boolgywKbpK, false)
		await expect(vnxManagerSROJ8up.transferContractOwnership.call(addresshZnI5AL, addresseoEJ0xl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})