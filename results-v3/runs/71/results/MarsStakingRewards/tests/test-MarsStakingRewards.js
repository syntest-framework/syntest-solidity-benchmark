const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addresswfqU2zl = accounts[3]
		const addressd8lPBgM = accounts[0]
		const addressSXzyXzI = accounts[0]
		const MarsStakingRewardsx0k4upk = await MarsStakingRewards.new(addresswfqU2zl, addressd8lPBgM, addressSXzyXzI, {from: accounts[5]});
		const uintBWL0LgS = BigInt("431")
		const uint256gWlh8gX = await MarsStakingRewardsx0k4upk.lastTimeRewardApplicable.call({from: accounts[1]});
		await MarsStakingRewardsx0k4upk.onlyOwner.call({from: accounts[4]});
		const boolD9WWI42 = await MarsStakingRewardsx0k4upk.isOwner.call({from: accounts[2]});
		const booliWkEvg = await MarsStakingRewardsx0k4upk.isOwner.call({from: accounts[1]});
		const uint256Rsd5hjy = await MarsStakingRewardsx0k4upk.stake.call(uintBWL0LgS, {from: accounts[1]});

		assert.equal(uint256gWlh8gX, BigInt("0"))
		await expect(MarsStakingRewardsx0k4upk.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresstxVwPh1 = accounts[0]
		const addressK2VxICz = accounts[3]
		const addressXBOobDG = accounts[4]
		const MarsStakingRewardsykFEouU = await MarsStakingRewards.new(addresstxVwPh1, addressK2VxICz, addressXBOobDG, {from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardsykFEouU.renounceOwnership.call({from: accounts[2]});
		const boolVVGZ9PG = await MarsStakingRewardsykFEouU.isOwner.call({from: accounts[0]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressI5xsfyM = accounts[1]
		const addressnLd052R = accounts[3]
		const addressk6QecYF = accounts[3]
		const MarsStakingRewardsMBxlQx = await MarsStakingRewards.new(addressI5xsfyM, addressnLd052R, addressk6QecYF, {from: accounts[0]});
		const uintgCYSzQ = BigInt("1899")
		const uintjvsu3Gl = BigInt("1760")
		await MarsStakingRewardsMBxlQx.renounceOwnership.call({from: accounts[5]});
		const uint256rzvq5z = await MarsStakingRewardsMBxlQx.notifyRewardAmount.call(uintjvsu3Gl, uintgCYSzQ, {from: accounts[0]});
		const uint256c0I8vcg = await MarsStakingRewardsMBxlQx.totalSupply.call({from: accounts[1]});

		await expect(MarsStakingRewardsMBxlQx.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressZAMA0xB = accounts[4]
		const addressTKdNj63 = accounts[5]
		const addressX5WOcWR = accounts[1]
		const MarsStakingRewardsSZYG8HT = await MarsStakingRewards.new(addressZAMA0xB, addressTKdNj63, addressX5WOcWR, {from: accounts[4]});
		const addressqzHsDB7 = accounts[2]
		const addressdAbTbNc = await MarsStakingRewardsSZYG8HT.setRewardsDistribution.call(addressqzHsDB7, {from: accounts[4]});
		const uint256fBbFhLK = await MarsStakingRewardsSZYG8HT.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uint256fBbFhLK, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressEDpG0KE = accounts[1]
		const addressrpCyS1z = accounts[1]
		const addressyVw5J2N = accounts[4]
		const MarsStakingRewardshU0hTy = await MarsStakingRewards.new(addressEDpG0KE, addressrpCyS1z, addressyVw5J2N, {from: accounts[3]});
		await MarsStakingRewardshU0hTy.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const boolNgmmWbF = await MarsStakingRewardshU0hTy.isOwner.call({from: accounts[4]});
		await MarsStakingRewardshU0hTy.renounceOwnership.call({from: accounts[5]});

		await expect(MarsStakingRewardshU0hTy.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressVJ3D1Xe = accounts[1]
		const addresskiDVCCM = accounts[3]
		const addresssnkrtzV = accounts[3]
		const MarsStakingRewardsnvhjsXx = await MarsStakingRewards.new(addressVJ3D1Xe, addresskiDVCCM, addresssnkrtzV, {from: accounts[0]});
		const addresskYCdNWA = accounts[4]
		await MarsStakingRewardsnvhjsXx.exit.call({from: accounts[4]});
		const uint256i96v3lw = await MarsStakingRewardsnvhjsXx.lastTimeRewardApplicable.call({from: accounts[4]});
		const addresssuCLj87 = await MarsStakingRewardsnvhjsXx.updateReward.call(addresskYCdNWA, {from: accounts[2]});

		await expect(MarsStakingRewardsnvhjsXx.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressSMzq9QN = accounts[1]
		const addressyNhfTug = accounts[3]
		const addressFUILi9b = accounts[3]
		const MarsStakingRewardsnvhjsXx = await MarsStakingRewards.new(addressSMzq9QN, addressyNhfTug, addressFUILi9b, {from: accounts[0]});
		const addressz35l9tY = accounts[5]
		const addressRGnKWhN = accounts[4]
		const uint256AT6vENU = await MarsStakingRewardsnvhjsXx.balanceOf.call(addressz35l9tY, {from: accounts[2]});
		await MarsStakingRewardsnvhjsXx.exit.call({from: accounts[4]});
		const uint256i96v3lw = await MarsStakingRewardsnvhjsXx.lastTimeRewardApplicable.call({from: accounts[4]});
		const addresssuCLj87 = await MarsStakingRewardsnvhjsXx.updateReward.call(addressRGnKWhN, {from: accounts[2]});

		assert.equal(uint256AT6vENU, BigInt("0"))
		await expect(MarsStakingRewardsnvhjsXx.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressbFWzLS = accounts[0]
		const addressNkdtBRQ = accounts[4]
		const addresscdAbTX1 = accounts[4]
		const MarsStakingRewardsIVOMW8r = await MarsStakingRewards.new(addressbFWzLS, addressNkdtBRQ, addresscdAbTX1, {from: accounts[0]});
		const uintpGaqNao = BigInt("137")
		const uintScr8vn8 = BigInt("799")
		const uint256K2C9qNY = await MarsStakingRewardsIVOMW8r.notifyRewardAmount.call(uintScr8vn8, uintpGaqNao, {from: accounts[0]});
		await MarsStakingRewardsIVOMW8r.onlyOwner.call({from: accounts[4]});
		await MarsStakingRewardsIVOMW8r.exit.call({from: accounts[4]});

		await expect(MarsStakingRewardsIVOMW8r.notifyRewardAmount.call(uintScr8vn8, uintpGaqNao, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresscLX6kjg = accounts[0]
		const addressGJ91V3V = accounts[4]
		const addresshXHPFVZ = accounts[4]
		const MarsStakingRewardsIVOMW8r = await MarsStakingRewards.new(addresscLX6kjg, addressGJ91V3V, addresshXHPFVZ, {from: accounts[0]});
		const uint256LL76DUF = await MarsStakingRewardsIVOMW8r.getRewardForDuration.call({from: accounts[3]});
		await MarsStakingRewardsIVOMW8r.onlyOwner.call({from: accounts[4]});
		await MarsStakingRewardsIVOMW8r.exit.call({from: accounts[4]});

		assert.equal(uint256LL76DUF, BigInt("0"))
		await expect(MarsStakingRewardsIVOMW8r.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressS85gqH7 = accounts[0]
		const addressNxqgD7h = accounts[4]
		const addresst8vQ5DY = accounts[4]
		const MarsStakingRewardsIVOMW8r = await MarsStakingRewards.new(addressS85gqH7, addressNxqgD7h, addresst8vQ5DY, {from: accounts[0]});
		const uint256NfixUZU = await MarsStakingRewardsIVOMW8r.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256KPfGS5N = await MarsStakingRewardsIVOMW8r.getRewardForDuration.call({from: accounts[4]});
		const uint256D7WZ5zC = await MarsStakingRewardsIVOMW8r.getRewardForDuration.call({from: accounts[3]});
		await MarsStakingRewardsIVOMW8r.onlyRewardsDistribution.call({from: accounts[3]});
		const boolkoLrRv8 = await MarsStakingRewardsIVOMW8r.isOwner.call({from: accounts[4]});

		assert.equal(uint256D7WZ5zC, BigInt("0"))
		assert.equal(uint256KPfGS5N, BigInt("0"))
		assert.equal(uint256NfixUZU, BigInt("0"))
		await expect(MarsStakingRewardsIVOMW8r.onlyRewardsDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressaU5ozM = accounts[0]
		const addressu21JXNR = accounts[4]
		const addressXQzLpty = accounts[4]
		const MarsStakingRewardsIVOMW8r = await MarsStakingRewards.new(addressaU5ozM, addressu21JXNR, addressXQzLpty, {from: accounts[0]});
		const addresskCdWUSo = accounts[1]
		const uint256D7WZ5zC = await MarsStakingRewardsIVOMW8r.getRewardForDuration.call({from: accounts[3]});
		const boolkoLrRv8 = await MarsStakingRewardsIVOMW8r.isOwner.call({from: accounts[4]});
		const addressI6ohFIp = await MarsStakingRewardsIVOMW8r.transferOwnership.call(addresskCdWUSo, {from: accounts[0]});
		await MarsStakingRewardsIVOMW8r.renounceOwnership.call({from: accounts[5]});
		const uint256WLyoMa0 = await MarsStakingRewardsIVOMW8r.getRewardForDuration.call({from: accounts[0]});

		assert.equal(boolkoLrRv8, false)
		assert.equal(uint256D7WZ5zC, BigInt("0"))
		await expect(MarsStakingRewardsIVOMW8r.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressydUPw5 = accounts[0]
		const addresslfoaMqd = accounts[4]
		const addressu9xyUmW = accounts[4]
		const MarsStakingRewardsIVOMW8r = await MarsStakingRewards.new(addressydUPw5, addresslfoaMqd, addressu9xyUmW, {from: accounts[0]});
		const addressnoeOSNC = accounts[2]
		const uintk1lCodQ = BigInt("636")
		const addressKnayOwq = accounts[0]
		const uint256ryXMK3u = await MarsStakingRewardsIVOMW8r.earned.call(addressnoeOSNC, {from: accounts[4]});
		const addressN9HO1QO = await MarsStakingRewardsIVOMW8r.inCaseTokensGetStuck.call(addressKnayOwq, uintk1lCodQ, {from: accounts[1]});
		await MarsStakingRewardsIVOMW8r.onlyOwner.call({from: accounts[4]});

		assert.equal(uint256ryXMK3u, BigInt("0"))
		await expect(MarsStakingRewardsIVOMW8r.inCaseTokensGetStuck.call(addressKnayOwq, uintk1lCodQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressEaR6yzg = accounts[0]
		const addressHwrToAJ = accounts[4]
		const addresslNkCnd = accounts[4]
		const MarsStakingRewardsIVOMW8r = await MarsStakingRewards.new(addressEaR6yzg, addressHwrToAJ, addresslNkCnd, {from: accounts[0]});
		const addressz6RtOm = await MarsStakingRewardsIVOMW8r.owner.call({from: accounts[4]});
		const uint256LL76DUF = await MarsStakingRewardsIVOMW8r.getRewardForDuration.call({from: accounts[3]});
		const uint256zQNusty = await MarsStakingRewardsIVOMW8r.totalSupply.call({from: accounts[3]});
		await MarsStakingRewardsIVOMW8r.onlyOwner.call({from: accounts[4]});

		assert.equal(addressz6RtOm, 0xf85e561fdfA7017c9823942242256eEEC22037EB)
		assert.equal(uint256LL76DUF, BigInt("0"))
		assert.equal(uint256zQNusty, BigInt("0"))
		await expect(MarsStakingRewardsIVOMW8r.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressRGP3pDt = accounts[0]
		const addressa08e0zp = accounts[4]
		const addressGyUsARp = accounts[4]
		const MarsStakingRewardsIVOMW8r = await MarsStakingRewards.new(addressRGP3pDt, addressa08e0zp, addressGyUsARp, {from: accounts[0]});
		const uintNQXBOZ = BigInt("1275")
		const uintRssE0O = BigInt("257")
		const addressjc6LbZI = accounts[2]
		const byteJNLAHcK = "0x0e0f1317120b01141a161513191b021213000114150d161c1a050b100f120c10"
		const bytex33cQLB = "0x000d081511051c150f05120e13101d1d1614171e0b0620031a01121a030b0b03"
		const uintL8eYNsH = BigInt("69")
		const uintVKPO1l = BigInt("518")
		const uintcZeylp2 = BigInt("633")
		const uint256hwMjOtb = await MarsStakingRewardsIVOMW8r.notifyRewardAmount.call(uintRssE0O, uintNQXBOZ, {from: accounts[5]});
		const addresspK4ctIu = await MarsStakingRewardsIVOMW8r.updateReward.call(addressjc6LbZI, {from: accounts[1]});
		const uint256MPkI2k = await MarsStakingRewardsIVOMW8r.stakeWithPermit.call(uintcZeylp2, uintVKPO1l, uintL8eYNsH, bytex33cQLB, byteJNLAHcK, {from: accounts[2]});
		const uint256LL76DUF = await MarsStakingRewardsIVOMW8r.getRewardForDuration.call({from: accounts[3]});

		await expect(MarsStakingRewardsIVOMW8r.notifyRewardAmount.call(uintRssE0O, uintNQXBOZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresscOyB2ms = accounts[0]
		const addressaUutGWK = accounts[4]
		const addressitJjuku = accounts[4]
		const MarsStakingRewardsIVOMW8r = await MarsStakingRewards.new(addresscOyB2ms, addressaUutGWK, addressitJjuku, {from: accounts[0]});
		const uinteuYYumX = BigInt("1614")
		const addresssc5zaNc = accounts[4]
		const uintJkaDxVs = BigInt("128")
		const uintzaIqlnD = BigInt("1331")
		const uint256rhcdzFR = await MarsStakingRewardsIVOMW8r.getRewardForDuration.call({from: accounts[0]});
		const addressRfNryTY = await MarsStakingRewardsIVOMW8r.inCaseTokensGetStuck.call(addresssc5zaNc, uinteuYYumX, {from: accounts[0]});
		const uint256K2C9qNY = await MarsStakingRewardsIVOMW8r.notifyRewardAmount.call(uintzaIqlnD, uintJkaDxVs, {from: accounts[0]});
		const uint256hMzNoma = await MarsStakingRewardsIVOMW8r.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256rhcdzFR, BigInt("0"))
		await expect(MarsStakingRewardsIVOMW8r.inCaseTokensGetStuck.call(addresssc5zaNc, uinteuYYumX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresstBeriUQ = accounts[0]
		const addressBdDPZaX = accounts[4]
		const addressbil19Pf = accounts[4]
		const MarsStakingRewardsIVOMW8r = await MarsStakingRewards.new(addresstBeriUQ, addressBdDPZaX, addressbil19Pf, {from: accounts[0]});
		const uintV8Txem2 = BigInt("500")
		const addressWXOJOUF = "0x0000000000000000000000000000000000000001"
		const uinttju3GU4 = BigInt("122")
		const uintYFesVI3 = BigInt("1331")
		const addressmIwRANe = await MarsStakingRewardsIVOMW8r.inCaseTokensGetStuck.call(addressWXOJOUF, uintV8Txem2, {from: accounts[0]});
		const uint256rhcdzFR = await MarsStakingRewardsIVOMW8r.getRewardForDuration.call({from: accounts[0]});
		const uint256okBPGGO = await MarsStakingRewardsIVOMW8r.rewardPerToken.call({from: accounts[2]});
		const uint256K2C9qNY = await MarsStakingRewardsIVOMW8r.notifyRewardAmount.call(uintYFesVI3, uinttju3GU4, {from: accounts[0]});

		await expect(MarsStakingRewardsIVOMW8r.inCaseTokensGetStuck.call(addressWXOJOUF, uintV8Txem2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})