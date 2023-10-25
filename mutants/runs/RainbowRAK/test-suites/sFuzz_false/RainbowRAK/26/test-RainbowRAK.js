const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKSVa3yc2 = await RainbowRAK.new({from: accounts[0]});
		const uint256jZ9F6pG = await RainbowRAKSVa3yc2.lastTimeRewardApplicable.call({from: accounts[5]});
		await RainbowRAKSVa3yc2.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256jZ9F6pG, BigInt("0"))
		await expect(RainbowRAKSVa3yc2.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKll0r9nQ = await RainbowRAK.new({from: accounts[3]});
		const addressi9R4yh = accounts[0]
		const addressarrayupA0cmH = await RainbowRAKll0r9nQ.getCommunity.call({from: accounts[2]});
		const uint256nn0PVCj = await RainbowRAKll0r9nQ.earned.call(addressi9R4yh, {from: accounts[4]});
		const addresswpoGfmV = await RainbowRAKll0r9nQ.owner.call({from: accounts[5]});

		assert.equal(addressarrayupA0cmH, )
		assert.equal(addresswpoGfmV, 0x5f91ccB043288ed2fF6B05Dbb866BDcbb8BffF45)
		assert.equal(uint256nn0PVCj, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKCEykzML = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmvIN6E = BigInt("1681")
		const addressWVjcIeJ = accounts[2]
		const uint256AG6YUnz = await RainbowRAKCEykzML.getCurrentRewardReserve.call({from: accounts[0]});
		const addressarrayfBcWNKS = await RainbowRAKCEykzML.getCommunity.call({from: accounts[1]});
		const uint256abZZIQ2 = await RainbowRAKCEykzML.stake.call(uintmvIN6E, {from: accounts[2]});
		const uint256JQXUyQi = await RainbowRAKCEykzML.getCurrentRewardReserve.call({from: accounts[1]});
		const addressf5eu72R = await RainbowRAKCEykzML.updateReward.call(addressWVjcIeJ, {from: accounts[2]});
		await RainbowRAKCEykzML.onlyOwner.call({from: accounts[3]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWFAvOIY = await RainbowRAK.new({from: accounts[3]});
		const addressUhf8AZ = accounts[0]
		const uintKLaC6L = BigInt("565")
		const uintpw5ohy = BigInt("467")
		const addressarraye9XB5a4 = await RainbowRAKWFAvOIY.getCommunity.call({from: accounts[0]});
		const uint256BM7u7KD = await RainbowRAKWFAvOIY.earned.call(addressUhf8AZ, {from: accounts[3]});
		const uint256jMD4bfC = await RainbowRAKWFAvOIY.stake.call(uintKLaC6L, {from: accounts[2]});
		const uint256t109SyA = await RainbowRAKWFAvOIY.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256iMYj8jY = await RainbowRAKWFAvOIY.getCurrentRewardReserve.call({from: accounts[3]});
		const uint256OTsKowZ = await RainbowRAKWFAvOIY.notifyRewardAmount.call(uintpw5ohy, {from: accounts[0]});

		assert.equal(addressarraye9XB5a4, )
		assert.equal(uint256BM7u7KD, BigInt("0"))
		await expect(RainbowRAKWFAvOIY.stake.call(uintKLaC6L, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKQJRR82m = await RainbowRAK.new({from: accounts[4]});
		const uintGwpJsYp = BigInt("1995")
		await RainbowRAKQJRR82m.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256DJNepS = await RainbowRAKQJRR82m.notifyRewardAmount.call(uintGwpJsYp, {from: accounts[1]});

		await expect(RainbowRAKQJRR82m.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAK9RMQrb = await RainbowRAK.new({from: accounts[2]});
		const uintvzWUKyN = BigInt("725")
		await RainbowRAK9RMQrb.renounceOwnership.call({from: accounts[1]});
		const uint256I4nCqdg = await RainbowRAK9RMQrb.stake.call(uintvzWUKyN, {from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAK9RMQrb.onlyOwner.call({from: accounts[5]});

		await expect(RainbowRAK9RMQrb.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKDF0Q9q1 = await RainbowRAK.new({from: accounts[4]});
		await RainbowRAKDF0Q9q1.claimRewards.call({from: accounts[0]});
		const boolo19Yng = await RainbowRAKDF0Q9q1.isOwner.call({from: accounts[5]});
		await RainbowRAKDF0Q9q1.onlyOwner.call({from: accounts[3]});
		await RainbowRAKDF0Q9q1.renounceOwnership.call({from: accounts[0]});
		const addressarraywDnurW0 = await RainbowRAKDF0Q9q1.getCommunity.call({from: accounts[1]});

		await expect(RainbowRAKDF0Q9q1.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAK9kAKsI = await RainbowRAK.new({from: accounts[3]});
		const addressUo5u8Xe = accounts[4]
		const uint256lHUuG8U = await RainbowRAK9kAKsI.lastTimeRewardApplicable.call({from: accounts[2]});
		await RainbowRAK9kAKsI.exit.call({from: accounts[3]});
		const addressDfWVCNV = await RainbowRAK9kAKsI.transferOwnership.call(addressUo5u8Xe, {from: accounts[4]});
		await RainbowRAK9kAKsI.claimRewards.call({from: accounts[0]});
		await RainbowRAK9kAKsI.claimRewards.call({from: accounts[1]});

		assert.equal(uint256lHUuG8U, BigInt("0"))
		await expect(RainbowRAK9kAKsI.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKQJRR82m = await RainbowRAK.new({from: accounts[4]});
		const uintVjAbCl1 = BigInt("1581")
		const uinty2jusOl = BigInt("2008")
		const uint256IehwVkV = await RainbowRAKQJRR82m.unstake.call(uintVjAbCl1, {from: accounts[4]});
		await RainbowRAKQJRR82m.exit.call({from: accounts[4]});
		await RainbowRAKQJRR82m.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256DJNepS = await RainbowRAKQJRR82m.notifyRewardAmount.call(uinty2jusOl, {from: accounts[1]});

		await expect(RainbowRAKQJRR82m.unstake.call(uintVjAbCl1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKfnjwrjI = await RainbowRAK.new({from: accounts[1]});
		const uintCo438rZ = BigInt("1981")
		const uint256Y5uLbfn = await RainbowRAKfnjwrjI.getCurrentRewardReserve.call({from: accounts[4]});
		const uint256DnmM5H = await RainbowRAKfnjwrjI.stake.call(uintCo438rZ, {from: accounts[1]});
		const boolxma9URb = await RainbowRAKfnjwrjI.isOwner.call({from: accounts[0]});
		const uint256TZhjb9i = await RainbowRAKfnjwrjI.getCurrentRewardReserve.call({from: accounts[4]});
		await RainbowRAKfnjwrjI.exit.call({from: accounts[2]});

		assert.equal(uint256Y5uLbfn, BigInt("0"))
		await expect(RainbowRAKfnjwrjI.stake.call(uintCo438rZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKRhrjgkY = await RainbowRAK.new({from: accounts[2]});
		const addressF4Vq2c = accounts[4]
		const addressdSiRiRR = await RainbowRAKRhrjgkY.transferOwnership.call(addressF4Vq2c, {from: accounts[2]});
		await RainbowRAKRhrjgkY.onlyOwner.call({from: accounts[4]});

		await expect(RainbowRAKRhrjgkY.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKLnTi3EI = await RainbowRAK.new({from: accounts[4]});
		const uintoWn0jtO = BigInt("363")
		const uintCoYUFPi = BigInt("781")
		const uinttdaVqVM = BigInt("1043")
		const uint256RBVd9Nd = await RainbowRAKLnTi3EI.notifyRewardAmount.call(uintoWn0jtO, {from: accounts[4]});
		const uint256hR2Vlv = await RainbowRAKLnTi3EI.stake.call(uintCoYUFPi, {from: accounts[2]});
		const uint256ISbev2k = await RainbowRAKLnTi3EI.stake.call(uinttdaVqVM, {from: accounts[2]});

		await expect(RainbowRAKLnTi3EI.notifyRewardAmount.call(uintoWn0jtO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})