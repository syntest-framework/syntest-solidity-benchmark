const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenCCplnn = await ThriftToken.new({from: accounts[0]});
		const addressvKCsqdA = accounts[2]
		const addressX8kTVKM = accounts[4]
		const uintNAZcBZG = BigInt("1644")
		const addressyx9HFkU = accounts[2]
		const addressgRN5a8A = accounts[3]
		const addressNpNqR3E = accounts[1]
		const uintOQ4Dd50 = BigInt("106")
		const addresseiWEQ0q = accounts[4]
		const uint256P6d0lR8 = await ThriftTokenCCplnn.allowance.call(addressX8kTVKM, addressvKCsqdA, {from: accounts[0]});
		const boolgvWvPaS = await ThriftTokenCCplnn.transfer.call(addressyx9HFkU, uintNAZcBZG, {from: accounts[1]});
		const uint256h6e43Gn = await ThriftTokenCCplnn.balanceOf.call(addressgRN5a8A, {from: accounts[2]});
		const addressVbEc0Yr = await ThriftTokenCCplnn.transferOwnership.call(addressNpNqR3E, {from: "0x0000000000000000000000000000000000000001"});
		const boolDCYv6pR = await ThriftTokenCCplnn.approve.call(addresseiWEQ0q, uintOQ4Dd50, {from: accounts[0]});

		assert.equal(uint256P6d0lR8, BigInt("0"))
		await expect(ThriftTokenCCplnn.transfer.call(addressyx9HFkU, uintNAZcBZG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenRa5Eex = await ThriftToken.new({from: accounts[3]});
		const addressFjruzl = "0x0000000000000000000000000000000000000001"
		const uintzs07w6u = BigInt("627")
		const addressboaQg63 = accounts[1]
		const uintzrflCJD = BigInt("865")
		const addressGMtBdbZ = accounts[2]
		const addressRnXuKfY = accounts[3]
		const addressfRsQSTG = accounts[3]
		const addressSzmxv9K = accounts[0]
		const uint256KdinZh4 = await ThriftTokenRa5Eex.balanceOf.call(addressFjruzl, {from: accounts[0]});
		const boolde7Fjo7 = await ThriftTokenRa5Eex.approve.call(addressboaQg63, uintzs07w6u, {from: accounts[0]});
		const boolRCIVutA = await ThriftTokenRa5Eex.transferFrom.call(addressRnXuKfY, addressGMtBdbZ, uintzrflCJD, {from: accounts[3]});
		const uint256OqzZOkG = await ThriftTokenRa5Eex.allowance.call(addressSzmxv9K, addressfRsQSTG, {from: accounts[0]});

		assert.equal(boolde7Fjo7, true)
		assert.equal(uint256KdinZh4, BigInt("0"))
		await expect(ThriftTokenRa5Eex.transferFrom.call(addressRnXuKfY, addressGMtBdbZ, uintzrflCJD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenw69XMu = await ThriftToken.new({from: accounts[3]});
		const uintMujYzh7 = BigInt("349")
		const addressWQM1DHh = accounts[4]
		const addressYiyFKWt = accounts[3]
		const uintVZpKn4Q = BigInt("135")
		const addresstHJkvxN = accounts[2]
		const uintwtMljKt = BigInt("916")
		const addressUgW2Qg3 = accounts[4]
		const boolje5jdkX = await ThriftTokenw69XMu.decreaseApproval.call(addressWQM1DHh, uintMujYzh7, {from: accounts[3]});
		const uint256eWV4KTE = await ThriftTokenw69XMu.balanceOf.call(addressYiyFKWt, {from: accounts[1]});
		const boolzZp9E8L = await ThriftTokenw69XMu.transfer.call(addresstHJkvxN, uintVZpKn4Q, {from: accounts[5]});
		const boolNeJiTKF = await ThriftTokenw69XMu.transfer.call(addressUgW2Qg3, uintwtMljKt, {from: accounts[4]});

		assert.equal(boolje5jdkX, true)
		assert.equal(uint256eWV4KTE, BigInt("0"))
		await expect(ThriftTokenw69XMu.transfer.call(addresstHJkvxN, uintVZpKn4Q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenNu4SMPM = await ThriftToken.new({from: accounts[3]});
		const uintKMoy9dQ = BigInt("1416")
		const addressg0HeEGA = accounts[4]
		const uintb8eLqYB = BigInt("896")
		const addressteVsj1F = accounts[3]
		const uintkNz0iAV = BigInt("955")
		const addressl4d3uE = accounts[2]
		const addressJmxFgf5 = accounts[0]
		const uintDN7Z3lF = BigInt("1290")
		const addressp0GEaU6 = accounts[2]
		const boolCTfAjPM = await ThriftTokenNu4SMPM.decreaseApproval.call(addressg0HeEGA, uintKMoy9dQ, {from: accounts[0]});
		const boolp6fc3BA = await ThriftTokenNu4SMPM.approve.call(addressteVsj1F, uintb8eLqYB, {from: "0x0000000000000000000000000000000000000001"});
		const boolVty7gN1 = await ThriftTokenNu4SMPM.increaseApproval.call(addressl4d3uE, uintkNz0iAV, {from: accounts[4]});
		const addressKVz8Q5 = await ThriftTokenNu4SMPM.transferOwnership.call(addressJmxFgf5, {from: accounts[1]});
		const boolsK95zbj = await ThriftTokenNu4SMPM.transfer.call(addressp0GEaU6, uintDN7Z3lF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCTfAjPM, true)
		assert.equal(boolVty7gN1, true)
		assert.equal(boolp6fc3BA, true)
		await expect(ThriftTokenNu4SMPM.transferOwnership.call(addressJmxFgf5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenPmyHMpP = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttpv7UFM = BigInt("617")
		const addressQ38RLAZ = accounts[0]
		const uintM0I0Lvg = BigInt("57")
		const addressV6ncoD = accounts[5]
		const addressxlMccWz = accounts[1]
		const uintlotHQFi = BigInt("34")
		const addresswKMVfMx = "0x0000000000000000000000000000000000000001"
		const boolzYASgc6 = await ThriftTokenPmyHMpP.transfer.call(addressQ38RLAZ, uinttpv7UFM, {from: accounts[2]});
		const boolng6FUmQ = await ThriftTokenPmyHMpP.transferFrom.call(addressxlMccWz, addressV6ncoD, uintM0I0Lvg, {from: accounts[3]});
		const booli5RJngV = await ThriftTokenPmyHMpP.decreaseApproval.call(addresswKMVfMx, uintlotHQFi, {from: accounts[2]});
	});
})