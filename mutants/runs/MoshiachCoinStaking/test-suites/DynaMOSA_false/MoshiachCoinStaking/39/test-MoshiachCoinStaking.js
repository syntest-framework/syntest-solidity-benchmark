const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingiJU2BHX = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintOa7zH6l = BigInt("1212")
		const uintDRTTIiB = BigInt("438")
		const uinthLUmqBG = await MoshiachCoinStakingiJU2BHX.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintPp5EQsA = await MoshiachCoinStakingiJU2BHX.deposit.call(uintOa7zH6l, {from: accounts[4]});
		const uintrs7epvu = await MoshiachCoinStakingiJU2BHX.withdraw.call(uintDRTTIiB, {from: accounts[0]});

		assert.equal(uinthLUmqBG, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingiJU2BHX.deposit.call(uintOa7zH6l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingqwwaIps = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressnw26KAu = accounts[0]
		const uintFRxEpMj = BigInt("82")
		const addressr9qownU = accounts[0]
		const addressI3xe1lk = accounts[2]
		const addressQMi8ZQc = await MoshiachCoinStakingqwwaIps.transferOwnership.call(addressnw26KAu, {from: accounts[0]});
		const uintNH86d5 = await MoshiachCoinStakingqwwaIps.withdraw.call(uintFRxEpMj, {from: accounts[5]});
		const uintmHiuWyi = await MoshiachCoinStakingqwwaIps.getPendingDivs.call(addressr9qownU, {from: accounts[3]});
		const uintD39zSIl = await MoshiachCoinStakingqwwaIps.getNumberOfHolders.call({from: accounts[3]});
		const addressfTfrdNr = await MoshiachCoinStakingqwwaIps.transferOwnership.call(addressI3xe1lk, {from: accounts[3]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingWkNHpbk = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintbiDoUSC = BigInt("1184")
		await MoshiachCoinStakingWkNHpbk.onlyOwner.call({from: accounts[0]});
		const uintKIDvzQG = await MoshiachCoinStakingWkNHpbk.getNumberOfHolders.call({from: accounts[3]});
		const uintfV7YSES = await MoshiachCoinStakingWkNHpbk.deposit.call(uintbiDoUSC, {from: accounts[3]});

		await expect(MoshiachCoinStakingWkNHpbk.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingX0tKml1 = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressi8d5wxV = accounts[5]
		const uintTZatnuN = BigInt("266")
		const uintYkMsu19 = BigInt("1365")
		const uintdQtqzvE = await MoshiachCoinStakingX0tKml1.getPendingDivs.call(addressi8d5wxV, {from: accounts[2]});
		const uintL5woR7Z = await MoshiachCoinStakingX0tKml1.deposit.call(uintTZatnuN, {from: accounts[5]});
		await MoshiachCoinStakingX0tKml1.claimDivs.call({from: accounts[5]});
		const uintR8LODNY = await MoshiachCoinStakingX0tKml1.deposit.call(uintYkMsu19, {from: accounts[0]});

		assert.equal(uintdQtqzvE, BigInt("0"))
		await expect(MoshiachCoinStakingX0tKml1.deposit.call(uintTZatnuN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingfleGfSo = await MoshiachCoinStaking.new({from: accounts[5]});
		const uinthcC9pKs = BigInt("781")
		const uintgjCsX87 = BigInt("1636")
		const uinthZxJkL = BigInt("182")
		const addressEBGXoVc = accounts[0]
		const uintbz9syNl = await MoshiachCoinStakingfleGfSo.withdraw.call(uinthcC9pKs, {from: "0x0000000000000000000000000000000000000001"});
		const uintszPwv9J = await MoshiachCoinStakingfleGfSo.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintZlx7CUw = await MoshiachCoinStakingfleGfSo.withdraw.call(uintgjCsX87, {from: accounts[4]});
		const uintULH0YfB = await MoshiachCoinStakingfleGfSo.withdraw.call(uinthZxJkL, {from: accounts[0]});
		const uintRVeG6gC = await MoshiachCoinStakingfleGfSo.getPendingDivs.call(addressEBGXoVc, {from: accounts[3]});

		await expect(MoshiachCoinStakingfleGfSo.withdraw.call(uinthcC9pKs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingCaRKc5A = await MoshiachCoinStaking.new({from: accounts[0]});
		const addressmRNmYQt = accounts[4]
		const addresscX7sUqE = accounts[3]
		const addressZIbCUe = accounts[2]
		const uintOi6Gu5K = await MoshiachCoinStakingCaRKc5A.getPendingDivs.call(addressmRNmYQt, {from: accounts[3]});
		const uinttVHXYW2 = await MoshiachCoinStakingCaRKc5A.getNumberOfHolders.call({from: accounts[2]});
		const uintHI1p8Xj = await MoshiachCoinStakingCaRKc5A.getPendingDivs.call(addresscX7sUqE, {from: accounts[1]});
		const uintNl28zEW = await MoshiachCoinStakingCaRKc5A.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const addresspIVBzSA = await MoshiachCoinStakingCaRKc5A.transferOwnership.call(addressZIbCUe, {from: accounts[1]});

		assert.equal(uintHI1p8Xj, BigInt("0"))
		assert.equal(uintNl28zEW, BigInt("60000000000000000000000000"))
		assert.equal(uintOi6Gu5K, BigInt("0"))
		assert.equal(uinttVHXYW2, BigInt("0"))
		await expect(MoshiachCoinStakingCaRKc5A.transferOwnership.call(addressZIbCUe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingX0tKml1 = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressOks70KU = accounts[5]
		const addressu1PsoYh = accounts[2]
		const uintKCi9FAK = BigInt("266")
		const uintXfbeab5 = BigInt("1365")
		const addressqF1nE1F = "0x0000000000000000000000000000000000000001"
		await MoshiachCoinStakingX0tKml1.claimDivs.call({from: accounts[0]});
		const uintdQtqzvE = await MoshiachCoinStakingX0tKml1.getPendingDivs.call(addressOks70KU, {from: accounts[2]});
		const addressVad54D = await MoshiachCoinStakingX0tKml1.transferOwnership.call(addressu1PsoYh, {from: accounts[4]});
		const uintL5woR7Z = await MoshiachCoinStakingX0tKml1.deposit.call(uintKCi9FAK, {from: accounts[5]});
		await MoshiachCoinStakingX0tKml1.claimDivs.call({from: accounts[5]});
		const uintR8LODNY = await MoshiachCoinStakingX0tKml1.deposit.call(uintXfbeab5, {from: accounts[0]});
		const addressG81vQRc = await MoshiachCoinStakingX0tKml1.transferOwnership.call(addressqF1nE1F, {from: accounts[3]});

		await expect(MoshiachCoinStakingX0tKml1.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingGBvaQ7 = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintcwftqLP = BigInt("495")
		const addressUugJjIx = accounts[1]
		const addressWxjfCa = accounts[0]
		const addressO14HCRM = await MoshiachCoinStakingGBvaQ7.transferAnyERC20Tokens.call(addressWxjfCa, addressUugJjIx, uintcwftqLP, {from: accounts[2]});
		await MoshiachCoinStakingGBvaQ7.claimDivs.call({from: accounts[3]});

		await expect(MoshiachCoinStakingGBvaQ7.transferAnyERC20Tokens.call(addressWxjfCa, addressUugJjIx, uintcwftqLP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingfleGfSo = await MoshiachCoinStaking.new({from: accounts[5]});
		const uintPXVCwi = BigInt("0")
		const uintaI7zDdW = await MoshiachCoinStakingfleGfSo.deposit.call(uintPXVCwi, {from: accounts[2]});
		const uinttaSkIIb = await MoshiachCoinStakingfleGfSo.getNumberOfHolders.call({from: accounts[1]});

		await expect(MoshiachCoinStakingfleGfSo.deposit.call(uintPXVCwi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})