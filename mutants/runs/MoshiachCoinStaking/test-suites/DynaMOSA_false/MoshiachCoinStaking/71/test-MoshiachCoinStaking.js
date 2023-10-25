const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingnjjhebj = await MoshiachCoinStaking.new({from: accounts[5]});
		const uintSFSOqIG = BigInt("365")
		const uintnz3wpm = BigInt("545")
		const addressusxwH3Q = accounts[1]
		const uintridfkXM = await MoshiachCoinStakingnjjhebj.withdraw.call(uintSFSOqIG, {from: accounts[4]});
		const uintScLzOyX = await MoshiachCoinStakingnjjhebj.withdraw.call(uintnz3wpm, {from: accounts[2]});
		const uintMs8Jyl2 = await MoshiachCoinStakingnjjhebj.getPendingDivs.call(addressusxwH3Q, {from: accounts[0]});
		await MoshiachCoinStakingnjjhebj.claimDivs.call({from: accounts[0]});
		const uintiRqt99d = await MoshiachCoinStakingnjjhebj.getStakingAndDaoAmount.call({from: accounts[1]});

		await expect(MoshiachCoinStakingnjjhebj.withdraw.call(uintSFSOqIG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinggSYMiWm = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uint9CxpZ9 = BigInt("1230")
		const uintCCHevBy = BigInt("1455")
		const uintSuEV1V = BigInt("141")
		const uintTMwpoqp = BigInt("762")
		const uintzi4KHJ5 = await MoshiachCoinStakinggSYMiWm.getNumberOfHolders.call({from: accounts[2]});
		const uintab3SaUF = await MoshiachCoinStakinggSYMiWm.withdraw.call(uint9CxpZ9, {from: accounts[3]});
		const uintimnRqy = await MoshiachCoinStakinggSYMiWm.deposit.call(uintCCHevBy, {from: accounts[2]});
		await MoshiachCoinStakinggSYMiWm.onlyOwner.call({from: accounts[3]});
		const uintfR4ZMdJ = await MoshiachCoinStakinggSYMiWm.withdraw.call(uintSuEV1V, {from: accounts[2]});
		const uintKaGh2L4 = await MoshiachCoinStakinggSYMiWm.deposit.call(uintTMwpoqp, {from: accounts[2]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinguXOi6wl = await MoshiachCoinStaking.new({from: accounts[5]});
		const addressli8g2Ko = accounts[4]
		const uintxdLoHWo = BigInt("532")
		const addresshgIHX65 = accounts[4]
		const addressfYGifm = accounts[1]
		const addressRceD16A = await MoshiachCoinStakinguXOi6wl.transferOwnership.call(addressli8g2Ko, {from: accounts[0]});
		await MoshiachCoinStakinguXOi6wl.claimDivs.call({from: accounts[4]});
		const addressvUbdNUC = await MoshiachCoinStakinguXOi6wl.transferAnyERC20Tokens.call(addressfYGifm, addresshgIHX65, uintxdLoHWo, {from: accounts[3]});

		await expect(MoshiachCoinStakinguXOi6wl.transferOwnership.call(addressli8g2Ko, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingZREDvgj = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintFhuYTwf = BigInt("1511")
		const addressLk3j2GN = accounts[5]
		const uinttQtQ6fd = await MoshiachCoinStakingZREDvgj.getNumberOfHolders.call({from: accounts[4]});
		const uintEpU8Nlg = await MoshiachCoinStakingZREDvgj.deposit.call(uintFhuYTwf, {from: accounts[3]});
		const uintyRavBL3 = await MoshiachCoinStakingZREDvgj.getStakingAndDaoAmount.call({from: accounts[1]});
		const addressXgvF845 = await MoshiachCoinStakingZREDvgj.transferOwnership.call(addressLk3j2GN, {from: accounts[0]});

		assert.equal(uinttQtQ6fd, BigInt("0"))
		await expect(MoshiachCoinStakingZREDvgj.deposit.call(uintFhuYTwf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingGzr8IKY = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintyvxnTCc = BigInt("58")
		const addressc0pNF2s = accounts[5]
		const addresspMCqGga = accounts[3]
		const uintNboVHzh = await MoshiachCoinStakingGzr8IKY.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintquMadNg = await MoshiachCoinStakingGzr8IKY.getNumberOfHolders.call({from: accounts[3]});
		const uintkjfoqVF = await MoshiachCoinStakingGzr8IKY.getStakingAndDaoAmount.call({from: accounts[1]});
		const addressG7Re9PV = await MoshiachCoinStakingGzr8IKY.transferAnyERC20Tokens.call(addresspMCqGga, addressc0pNF2s, uintyvxnTCc, {from: accounts[2]});

		assert.equal(uintNboVHzh, BigInt("60000000000000000000000000"))
		assert.equal(uintkjfoqVF, BigInt("60000000000000000000000000"))
		assert.equal(uintquMadNg, BigInt("0"))
		await expect(MoshiachCoinStakingGzr8IKY.transferAnyERC20Tokens.call(addresspMCqGga, addressc0pNF2s, uintyvxnTCc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingDOvxsuc = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintK0kiVXi = BigInt("913")
		const addresshiurf2p = accounts[2]
		const address3xM0qG = accounts[5]
		const uintRPbsGwr = BigInt("123")
		const uintL5QX0Td = BigInt("64")
		const addresscUM7W99 = await MoshiachCoinStakingDOvxsuc.transferAnyERC20Tokens.call(address3xM0qG, addresshiurf2p, uintK0kiVXi, {from: accounts[2]});
		const uintlVIxYg5 = await MoshiachCoinStakingDOvxsuc.withdraw.call(uintRPbsGwr, {from: accounts[1]});
		const uintSHUpu7f = await MoshiachCoinStakingDOvxsuc.getNumberOfHolders.call({from: accounts[3]});
		const uintAz4znNs = await MoshiachCoinStakingDOvxsuc.deposit.call(uintL5QX0Td, {from: accounts[1]});

		await expect(MoshiachCoinStakingDOvxsuc.transferAnyERC20Tokens.call(address3xM0qG, addresshiurf2p, uintK0kiVXi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingQsUh0IQ = await MoshiachCoinStaking.new({from: accounts[0]});
		const addressC2QT6nZ = accounts[4]
		const uinteBrLrhY = await MoshiachCoinStakingQsUh0IQ.getPendingDivs.call(addressC2QT6nZ, {from: accounts[5]});
		const uintKPro5dF = await MoshiachCoinStakingQsUh0IQ.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uintiRzsIqD = await MoshiachCoinStakingQsUh0IQ.getNumberOfHolders.call({from: accounts[1]});
		const uintn341VMj = await MoshiachCoinStakingQsUh0IQ.getStakingAndDaoAmount.call({from: accounts[1]});
		await MoshiachCoinStakingQsUh0IQ.onlyOwner.call({from: accounts[0]});

		assert.equal(uintKPro5dF, BigInt("60000000000000000000000000"))
		assert.equal(uinteBrLrhY, BigInt("0"))
		assert.equal(uintiRzsIqD, BigInt("0"))
		assert.equal(uintn341VMj, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingQsUh0IQ.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingdJS6GNg = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintFmVXYed = BigInt("1608")
		const uintQnTONNZ = BigInt("1070")
		const addressK7zegYd = accounts[4]
		const uintBP0Ix81 = await MoshiachCoinStakingdJS6GNg.getStakingAndDaoAmount.call({from: accounts[2]});
		await MoshiachCoinStakingdJS6GNg.claimDivs.call({from: accounts[2]});
		const uintapmc1wW = await MoshiachCoinStakingdJS6GNg.deposit.call(uintFmVXYed, {from: accounts[4]});
		const uinti53rBF8 = await MoshiachCoinStakingdJS6GNg.withdraw.call(uintQnTONNZ, {from: accounts[3]});
		const addressbDjMIoL = await MoshiachCoinStakingdJS6GNg.transferOwnership.call(addressK7zegYd, {from: accounts[4]});
		await MoshiachCoinStakingdJS6GNg.claimDivs.call({from: accounts[4]});

		assert.equal(uintBP0Ix81, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingdJS6GNg.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingbU6R9Ra = await MoshiachCoinStaking.new({from: accounts[0]});
		const addressd3lG4pY = accounts[4]
		await MoshiachCoinStakingbU6R9Ra.claimDivs.call({from: accounts[3]});
		const uintnU3N1OC = await MoshiachCoinStakingbU6R9Ra.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintSuKjGp8 = await MoshiachCoinStakingbU6R9Ra.getStakingAndDaoAmount.call({from: accounts[2]});
		const addressvrfuI3 = await MoshiachCoinStakingbU6R9Ra.transferOwnership.call(addressd3lG4pY, {from: accounts[0]});

		await expect(MoshiachCoinStakingbU6R9Ra.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingDOvxsuc = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintRU6ld29 = BigInt("0")
		const uintAz4znNs = await MoshiachCoinStakingDOvxsuc.deposit.call(uintRU6ld29, {from: accounts[1]});

		await expect(MoshiachCoinStakingDOvxsuc.deposit.call(uintRU6ld29, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingbU6R9Ra = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintcW3Sdb = BigInt("0")
		const uintl9HeMF = await MoshiachCoinStakingbU6R9Ra.withdraw.call(uintcW3Sdb, {from: accounts[1]});
		const uintQbEZqz7 = await MoshiachCoinStakingbU6R9Ra.getStakingAndDaoAmount.call({from: accounts[0]});

		await expect(MoshiachCoinStakingbU6R9Ra.withdraw.call(uintcW3Sdb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})