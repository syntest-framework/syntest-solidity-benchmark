const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsDqKcO61 = await DMONDETHRewards.new({from: accounts[4]});
		const uintO49vudo = BigInt("2032")
		const addressObq7ja = accounts[1]
		const uint256pKjmMlV = await DMONDETHRewardsDqKcO61.stake.call(uintO49vudo, {from: accounts[2]});
		const uint256oI9jvc1 = await DMONDETHRewardsDqKcO61.earned.call(addressObq7ja, {from: accounts[0]});
		await DMONDETHRewardsDqKcO61.checkStart.call({from: accounts[1]});
		const addresskApurpB = await DMONDETHRewardsDqKcO61.owner.call({from: accounts[4]});
		await DMONDETHRewardsDqKcO61.onlyRewardDistribution.call({from: accounts[5]});

		await expect(DMONDETHRewardsDqKcO61.stake.call(uintO49vudo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsDCkngZ = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfPBhpl4 = BigInt("898")
		const uint256bADhCEt = await DMONDETHRewardsDCkngZ.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256XwDUqos = await DMONDETHRewardsDCkngZ.withdraw.call(uintfPBhpl4, {from: accounts[1]});
		const uint256CTB5NST = await DMONDETHRewardsDCkngZ.totalSupply.call({from: accounts[5]});
		const uint256bMS4cz3 = await DMONDETHRewardsDCkngZ.totalSupply.call({from: accounts[5]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsvpV8qBk = await DMONDETHRewards.new({from: accounts[1]});
		const addressVtKKd1b = accounts[2]
		const addressAdBKs9W = await DMONDETHRewardsvpV8qBk.setRewardDistribution.call(addressVtKKd1b, {from: accounts[4]});
		await DMONDETHRewardsvpV8qBk.onlyRewardDistribution.call({from: accounts[1]});
		const uint256I2W3g1l = await DMONDETHRewardsvpV8qBk.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(DMONDETHRewardsvpV8qBk.setRewardDistribution.call(addressVtKKd1b, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsd9C6dju = await DMONDETHRewards.new({from: accounts[0]});
		await DMONDETHRewardsd9C6dju.getReward.call({from: accounts[3]});
		await DMONDETHRewardsd9C6dju.checkStart.call({from: accounts[1]});
		await DMONDETHRewardsd9C6dju.renounceOwnership.call({from: accounts[1]});
		await DMONDETHRewardsd9C6dju.checkStart.call({from: accounts[4]});

		await expect(DMONDETHRewardsd9C6dju.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsmS5sZ5w = await DMONDETHRewards.new({from: accounts[4]});
		const addressCJp8nfJ = accounts[1]
		const uint256kNp9JAk = await DMONDETHRewardsmS5sZ5w.remainingReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256LguyDnK = await DMONDETHRewardsmS5sZ5w.balanceOf.call(addressCJp8nfJ, {from: accounts[1]});
		await DMONDETHRewardsmS5sZ5w.getReward.call({from: accounts[2]});

		await expect(DMONDETHRewardsmS5sZ5w.remainingReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjkNgGID = await DMONDETHRewards.new({from: accounts[4]});
		const uintT7lV1iP = BigInt("467")
		const addressjKfL23r = accounts[0]
		const uintj6adSDx = BigInt("1919")
		const uint256VsPOg8 = await DMONDETHRewardsjkNgGID.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressb47Kr3e = await DMONDETHRewardsjkNgGID.owner.call({from: accounts[2]});
		const uint256rdwMZg = await DMONDETHRewardsjkNgGID.stake.call(uintT7lV1iP, {from: accounts[0]});
		const addressz9weqNr = await DMONDETHRewardsjkNgGID.setStakeAddress.call(addressjKfL23r, {from: accounts[3]});
		const uint256vXjs4cb = await DMONDETHRewardsjkNgGID.withdraw.call(uintj6adSDx, {from: accounts[3]});

		assert.equal(addressb47Kr3e, 0x3A152a131D69538Ec75Aa1A4f3618eba3c5db86B)
		assert.equal(uint256VsPOg8, BigInt("0"))
		await expect(DMONDETHRewardsjkNgGID.stake.call(uintT7lV1iP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjkNgGID = await DMONDETHRewards.new({from: accounts[4]});
		const uinttb6JdqQ = BigInt("313")
		const addresssHY7PF = accounts[0]
		const uintasQpl4a = BigInt("1919")
		const uint256I627Mmc = await DMONDETHRewardsjkNgGID.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256bYOmdS2 = await DMONDETHRewardsjkNgGID.withdraw.call(uinttb6JdqQ, {from: accounts[4]});
		const uint256VsPOg8 = await DMONDETHRewardsjkNgGID.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressz9weqNr = await DMONDETHRewardsjkNgGID.setStakeAddress.call(addresssHY7PF, {from: accounts[3]});
		const uint256vXjs4cb = await DMONDETHRewardsjkNgGID.withdraw.call(uintasQpl4a, {from: accounts[3]});

		assert.equal(uint256I627Mmc, BigInt("0"))
		await expect(DMONDETHRewardsjkNgGID.withdraw.call(uinttb6JdqQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsmS5sZ5w = await DMONDETHRewards.new({from: accounts[4]});
		const uintBgVclOx = BigInt("1754")
		const uint256bxd99eZ = await DMONDETHRewardsmS5sZ5w.notifyRewardAmount.call(uintBgVclOx, {from: accounts[1]});
		const uint256kNp9JAk = await DMONDETHRewardsmS5sZ5w.remainingReward.call({from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsmS5sZ5w.getReward.call({from: accounts[4]});
		const uint256Rbrtl5N = await DMONDETHRewardsmS5sZ5w.lastTimeRewardApplicable.call({from: accounts[2]});
		await DMONDETHRewardsmS5sZ5w.getReward.call({from: accounts[2]});

		await expect(DMONDETHRewardsmS5sZ5w.notifyRewardAmount.call(uintBgVclOx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjkNgGID = await DMONDETHRewards.new({from: accounts[4]});
		const uintFRaEM32 = BigInt("497")
		const uintxsJ29MW = BigInt("1919")
		const addresskhOz5U = accounts[1]
		const uint256VsPOg8 = await DMONDETHRewardsjkNgGID.lastTimeRewardApplicable.call({from: accounts[0]});
		await DMONDETHRewardsjkNgGID.getReward.call({from: accounts[0]});
		await DMONDETHRewardsjkNgGID.getReward.call({from: accounts[4]});
		await DMONDETHRewardsjkNgGID.exit.call({from: accounts[1]});
		const uint256UQlZcK5 = await DMONDETHRewardsjkNgGID.remainingReward.call({from: accounts[1]});
		const uint256rdwMZg = await DMONDETHRewardsjkNgGID.stake.call(uintFRaEM32, {from: accounts[0]});
		const uint256vXjs4cb = await DMONDETHRewardsjkNgGID.withdraw.call(uintxsJ29MW, {from: accounts[3]});
		const addressmC6ppb = await DMONDETHRewardsjkNgGID.transferOwnership.call(addresskhOz5U, {from: accounts[4]});

		assert.equal(uint256VsPOg8, BigInt("0"))
		await expect(DMONDETHRewardsjkNgGID.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjkNgGID = await DMONDETHRewards.new({from: accounts[4]});
		const address6f8meE = accounts[2]
		const addressSBcDhgt = accounts[4]
		await DMONDETHRewardsjkNgGID.renounceOwnership.call({from: accounts[4]});
		const uint256hDfJuFO = await DMONDETHRewardsjkNgGID.earned.call(address6f8meE, {from: accounts[2]});
		const uint256YlWcUPq = await DMONDETHRewardsjkNgGID.earned.call(addressSBcDhgt, {from: accounts[0]});

		await expect(DMONDETHRewardsjkNgGID.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsBILnlar = await DMONDETHRewards.new({from: accounts[4]});
		const addressRr8Gm6v = accounts[0]
		const addressJsKuvun = accounts[1]
		const addressQlF0wL = await DMONDETHRewardsBILnlar.setRewardDistribution.call(addressRr8Gm6v, {from: accounts[4]});
		await DMONDETHRewardsBILnlar.getReward.call({from: accounts[3]});
		await DMONDETHRewardsBILnlar.getReward.call({from: accounts[2]});
		const addressQljJTku = await DMONDETHRewardsBILnlar.updateReward.call(addressJsKuvun, {from: accounts[2]});

		await expect(DMONDETHRewardsBILnlar.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjkNgGID = await DMONDETHRewards.new({from: accounts[4]});
		const addressP9qZnmB = accounts[2]
		const uintZ2QhmEH = BigInt("465")
		const addressGKigFA = await DMONDETHRewardsjkNgGID.transferOwnership.call(addressP9qZnmB, {from: accounts[4]});
		const uint256rdwMZg = await DMONDETHRewardsjkNgGID.stake.call(uintZ2QhmEH, {from: accounts[0]});

		await expect(DMONDETHRewardsjkNgGID.stake.call(uintZ2QhmEH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjkNgGID = await DMONDETHRewards.new({from: accounts[4]});
		const addressp3iP9I8 = accounts[1]
		const addressbjin7dz = accounts[5]
		const uintZvvmjlw = BigInt("467")
		const uintc8xPSpw = BigInt("1919")
		const addresssctA5aa = accounts[1]
		await DMONDETHRewardsjkNgGID.getReward.call({from: accounts[0]});
		const addressXrsGwms = await DMONDETHRewardsjkNgGID.setStakeAddress.call(addressp3iP9I8, {from: accounts[4]});
		const uint256SaDC8Q6 = await DMONDETHRewardsjkNgGID.balanceOf.call(addressbjin7dz, {from: accounts[2]});
		await DMONDETHRewardsjkNgGID.getReward.call({from: accounts[4]});
		await DMONDETHRewardsjkNgGID.exit.call({from: accounts[4]});
		const uint256XiyjPUf = await DMONDETHRewardsjkNgGID.rewardPerToken.call({from: accounts[2]});
		const uint256rdwMZg = await DMONDETHRewardsjkNgGID.stake.call(uintZvvmjlw, {from: accounts[0]});
		const uint256vXjs4cb = await DMONDETHRewardsjkNgGID.withdraw.call(uintc8xPSpw, {from: accounts[3]});
		const addressmC6ppb = await DMONDETHRewardsjkNgGID.transferOwnership.call(addresssctA5aa, {from: accounts[4]});

		await expect(DMONDETHRewardsjkNgGID.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjkNgGID = await DMONDETHRewards.new({from: accounts[4]});
		const uintcBLrTs4 = BigInt("681")
		const addressdZlr9nX = accounts[5]
		const uintcdln9ln = BigInt("938")
		const addressAJLExbJ = accounts[3]
		const uintZSyQr7d = BigInt("467")
		const uintvmXUmck = BigInt("1919")
		const addressjG5mq1H = accounts[1]
		const uint256VsPOg8 = await DMONDETHRewardsjkNgGID.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256swfsQm6 = await DMONDETHRewardsjkNgGID.notifyRewardAmount.call(uintcBLrTs4, {from: accounts[4]});
		await DMONDETHRewardsjkNgGID.getReward.call({from: accounts[0]});
		const uint256SaDC8Q6 = await DMONDETHRewardsjkNgGID.balanceOf.call(addressdZlr9nX, {from: accounts[2]});
		await DMONDETHRewardsjkNgGID.getReward.call({from: accounts[4]});
		const uint256L5np0yC = await DMONDETHRewardsjkNgGID.stake.call(uintcdln9ln, {from: accounts[5]});
		const addresstS7JL3X = await DMONDETHRewardsjkNgGID.setRewardDistribution.call(addressAJLExbJ, {from: accounts[0]});
		const uint256rdwMZg = await DMONDETHRewardsjkNgGID.stake.call(uintZSyQr7d, {from: accounts[0]});
		const uint256vXjs4cb = await DMONDETHRewardsjkNgGID.withdraw.call(uintvmXUmck, {from: accounts[3]});
		const addressmC6ppb = await DMONDETHRewardsjkNgGID.transferOwnership.call(addressjG5mq1H, {from: accounts[4]});

		assert.equal(uint256VsPOg8, BigInt("0"))
		await expect(DMONDETHRewardsjkNgGID.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})