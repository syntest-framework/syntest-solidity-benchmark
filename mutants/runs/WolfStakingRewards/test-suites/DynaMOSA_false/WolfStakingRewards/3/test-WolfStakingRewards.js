const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringPwSex9i = "xE"
		const stringwy5PBNi = "JxI8YEquHDnf2gg"
		const uintbfUPRmo = BigInt("230")
		const WolfStakingRewardsNZTnHhu = await WolfStakingRewards.new(stringPwSex9i, stringwy5PBNi, uintbfUPRmo, {from: accounts[1]});
		const uintwS5qhLO = BigInt("1129")
		const uintGQRzRD = BigInt("1506")
		const uintNkiy37R = BigInt("120")
		const uint256esoIKLt = await WolfStakingRewardsNZTnHhu.withdraw.call(uintGQRzRD, uintwS5qhLO, {from: accounts[0]});
		const uintpifyljE = await WolfStakingRewardsNZTnHhu.getReward.call(uintNkiy37R, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPvlOMuj = "qDgilqrlWSDUi6ycf6lXoHl4Y61qQl"
		const stringY5tw983 = "Tb93K"
		const uinttLoMj2v = BigInt("146")
		const WolfStakingRewardssFo4yhe = await WolfStakingRewards.new(stringPvlOMuj, stringY5tw983, uinttLoMj2v, {from: accounts[5]});
		const uintSYzVul = BigInt("1300")
		const uintUAmt4VQ = BigInt("219")
		const uintmpkPJb = BigInt("1651")
		const uint256Wm6aNSu = await WolfStakingRewardssFo4yhe.lastTimeRewardApplicable.call(uintSYzVul, {from: accounts[4]});
		const uint256Bix5sP8 = await WolfStakingRewardssFo4yhe.withdraw.call(uintmpkPJb, uintUAmt4VQ, {from: accounts[3]});
		const stringRcGK16N = await WolfStakingRewardssFo4yhe.name.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressRT8JeEe = accounts[1]
		const addressHDdwbqH = accounts[4]
		const addressrse7TQN = accounts[5]
		const WolfStakingRewardspW1plEO = await WolfStakingRewards.new(addressRT8JeEe, addressHDdwbqH, addressrse7TQN, {from: "0x0000000000000000000000000000000000000001"});
		const uintdWuQTQ = BigInt("1889")
		const uintlcqaV8L = BigInt("1699")
		await WolfStakingRewardspW1plEO.nonReentrant.call({from: accounts[1]});
		const uint256sCLj1qN = await WolfStakingRewardspW1plEO.withdraw.call(uintlcqaV8L, uintdWuQTQ, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressDQ1fI1h = accounts[2]
		const addressvouMRJZ = accounts[2]
		const addressES4PCrZ = accounts[1]
		const WolfStakingRewardswTfgTcP = await WolfStakingRewards.new(addressDQ1fI1h, addressvouMRJZ, addressES4PCrZ, {from: accounts[3]});
		const uintTDhiU4v = BigInt("2020")
		const uintSee2o92 = BigInt("368")
		const uintIQRZ1TK = BigInt("103")
		const stringYcSpVT0 = await WolfStakingRewardswTfgTcP.symbol.call({from: accounts[2]});
		await WolfStakingRewardswTfgTcP.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256VYA0X8E = await WolfStakingRewardswTfgTcP.lastTimeRewardApplicable.call(uintTDhiU4v, {from: accounts[1]});
		const uint256LqvHmuQ = await WolfStakingRewardswTfgTcP.withdraw.call(uintIQRZ1TK, uintSee2o92, {from: accounts[3]});
		await WolfStakingRewardswTfgTcP.nonReentrant.call({from: accounts[1]});

		await expect(WolfStakingRewardswTfgTcP.symbol.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringaQ1TFDg = "sg3rKz6lVk33sXBnMCsvudGOUJN983HDpQ4lDGdVyq17xQ8kRj7r76Cth8KF12XsF2w69F6qEScRE9pWoB"
		const stringp42f1Gw = "8nWxGaTOFaLLbiM5ZfdTbgvAy1BtVvLdjj"
		const uintsxjiJrN = BigInt("59")
		const WolfStakingRewardsomqjPZD = await WolfStakingRewards.new(stringaQ1TFDg, stringp42f1Gw, uintsxjiJrN, {from: accounts[4]});
		const uintQt9YRW9 = BigInt("1142")
		const uintQbjPdeU = BigInt("943")
		const addressfqZgGIM = accounts[1]
		await WolfStakingRewardsomqjPZD.onlyOwner.call({from: accounts[0]});
		const uint256LTD3fam = await WolfStakingRewardsomqjPZD.totalSupplyPerPool.call(uintQt9YRW9, {from: accounts[2]});
		const addressmFprlKN = await WolfStakingRewardsomqjPZD.updateReward.call(addressfqZgGIM, uintQbjPdeU, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVzLauC = "bpfb4YvcfvrkDJBmeraOzcWKui7WJTw93Tx"
		const stringu9hPumB = "93VRFVSKKuO0"
		const uintq5KxR4g = BigInt("15")
		const WolfStakingRewardsY1MXE4p = await WolfStakingRewards.new(stringVzLauC, stringu9hPumB, uintq5KxR4g, {from: accounts[5]});
		const uintEqBeUcR = BigInt("706")
		const uintnZA1L7K = BigInt("1059")
		const uintwCbnFMZ = BigInt("895")
		const stringOAYR42L = await WolfStakingRewardsY1MXE4p.name.call({from: accounts[2]});
		const uint256tHacSWe = await WolfStakingRewardsY1MXE4p.withdraw.call(uintnZA1L7K, uintEqBeUcR, {from: accounts[2]});
		const uint256arrayllBaLmX = await WolfStakingRewardsY1MXE4p.updateNotifyRewardAmount.call(uintwCbnFMZ, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressCzoOzS = accounts[4]
		const addressJjcwn6q = accounts[2]
		const addressWrMD7Sz = accounts[0]
		const WolfStakingRewardsUrpasTZ = await WolfStakingRewards.new(addressCzoOzS, addressJjcwn6q, addressWrMD7Sz, {from: accounts[0]});
		const uintTNCChco = BigInt("648")
		const uintfutvqcb = BigInt("1601")
		const uint256c7PIhXj = await WolfStakingRewardsUrpasTZ.exit.call(uintTNCChco, {from: accounts[2]});
		const stringtGGIfmi = await WolfStakingRewardsUrpasTZ.symbol.call({from: accounts[2]});
		const uint256t5aUiHw = await WolfStakingRewardsUrpasTZ.rewardPerToken.call(uintfutvqcb, {from: accounts[4]});

		await expect(WolfStakingRewardsUrpasTZ.exit.call(uintTNCChco, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressbfgr1ei = accounts[5]
		const addresstJAjlhh = accounts[4]
		const addressZLsVW8f = accounts[2]
		const WolfStakingRewardsbNcg2oG = await WolfStakingRewards.new(addressbfgr1ei, addresstJAjlhh, addressZLsVW8f, {from: accounts[1]});
		const uintALJbku9 = BigInt("1616")
		const addressmquc5b2 = accounts[0]
		const uintgtGuGnr = BigInt("74")
		const uint2UWE16 = BigInt("577")
		const uint256XhPgdP2 = await WolfStakingRewardsbNcg2oG.earned.call(addressmquc5b2, uintALJbku9, {from: accounts[1]});
		const uint256XFxQ248 = await WolfStakingRewardsbNcg2oG.getRewardForDuration.call(uintgtGuGnr, {from: accounts[3]});
		const uint256V98CrQ = await WolfStakingRewardsbNcg2oG.totalSupplyPerPool.call(uint2UWE16, {from: accounts[1]});
		await WolfStakingRewardsbNcg2oG.nonReentrant.call({from: accounts[3]});

		assert.equal(uint256XhPgdP2, BigInt("0"))
		await expect(WolfStakingRewardsbNcg2oG.getRewardForDuration.call(uintgtGuGnr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringw210eFy = "tuNWI5eku5g1LjFslKPea8pAPXMHGxH474prYKP2mEiC1Cwevcf8w0chyLomD46LdO10WiXg5WSon2otcR296O2goVM"
		const stringRwNLyqR = "sHNpWCeUPEt1wFE5mExeSQPqaJbzfNSsIuXBh2TpAJL9CLNK99Wf6QZMfhjzH2xTjg0RhF"
		const uintV8vLIgC = BigInt("38")
		const WolfStakingRewardsaucrU9T = await WolfStakingRewards.new(stringw210eFy, stringRwNLyqR, uintV8vLIgC, {from: accounts[2]});
		const uintYaNv83n = BigInt("460")
		const uintrtKFefF = BigInt("357")
		const addresseGoHQvc = accounts[4]
		const uint0ZNUo4 = BigInt("1750")
		const uintq6jvmU = BigInt("1043")
		const uinth48s1VC = BigInt("27")
		const uintJr44bAT = BigInt("1444")
		const uint256DgB1t27 = await WolfStakingRewardsaucrU9T.lastTimeRewardApplicable.call(uintYaNv83n, {from: accounts[4]});
		const uint256D9zmIcq = await WolfStakingRewardsaucrU9T.earned.call(addresseGoHQvc, uintrtKFefF, {from: accounts[0]});
		const uint256T5AWxYP = await WolfStakingRewardsaucrU9T.totalSupplyPerPool.call(uint0ZNUo4, {from: accounts[2]});
		const uint256rZz98Bp = await WolfStakingRewardsaucrU9T.rewardPerToken.call(uintq6jvmU, {from: accounts[0]});
		const uint256vXVMDHY = await WolfStakingRewardsaucrU9T.totalSupplyPerPool.call(uinth48s1VC, {from: accounts[3]});
		const uint256Ar6XxkH = await WolfStakingRewardsaucrU9T.getRewardForDuration.call(uintJr44bAT, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresseGHbeC3 = accounts[5]
		const addressCe1lk7 = accounts[4]
		const addresssyrbUZq = accounts[2]
		const WolfStakingRewardsbNcg2oG = await WolfStakingRewards.new(addresseGHbeC3, addressCe1lk7, addresssyrbUZq, {from: accounts[1]});
		const uintZa02TYj = BigInt("1616")
		const addressatHaqpP = accounts[0]
		const uintPUh9cOx = BigInt("967")
		const uintG9eu4O = BigInt("197")
		const uintpmkOlmO = BigInt("70")
		const uintmcOfZT4 = BigInt("1817")
		const uintH9BQaiD = BigInt("577")
		const uint256XhPgdP2 = await WolfStakingRewardsbNcg2oG.earned.call(addressatHaqpP, uintZa02TYj, {from: accounts[1]});
		const uint256qfVfxbF = await WolfStakingRewardsbNcg2oG.withdrawRemainingBalance.call(uintG9eu4O, uintPUh9cOx, {from: accounts[1]});
		const uint256XFxQ248 = await WolfStakingRewardsbNcg2oG.getRewardForDuration.call(uintpmkOlmO, {from: accounts[3]});
		const uint256Y3LeJIV = await WolfStakingRewardsbNcg2oG.lastTimeRewardApplicable.call(uintmcOfZT4, {from: accounts[4]});
		const uint256V98CrQ = await WolfStakingRewardsbNcg2oG.totalSupplyPerPool.call(uintH9BQaiD, {from: accounts[1]});
		await WolfStakingRewardsbNcg2oG.nonReentrant.call({from: accounts[3]});

		assert.equal(uint256XhPgdP2, BigInt("0"))
		await expect(WolfStakingRewardsbNcg2oG.withdrawRemainingBalance.call(uintG9eu4O, uintPUh9cOx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringh8arzSE = "8FBgUQgsvgddwwX"
		const stringFt4C6qf = "IS5OqHWTaE1seV136UECoQtrwoX5D4eYyL8U37XTChTAQ2Yz5m7iMiqTAbg7mytYenwfXigFfqiJkSaeW880YhV7r"
		const uintmqBHeH = BigInt("119")
		const WolfStakingRewardslIcj0C = await WolfStakingRewards.new(stringh8arzSE, stringFt4C6qf, uintmqBHeH, {from: accounts[0]});
		const uintINfmcWz = BigInt("1446")
		const addressazADZE = accounts[1]
		const uintyf53UeY = BigInt("1502")
		const addressMVv92lS = accounts[1]
		const uint256jOTsRV = await WolfStakingRewardslIcj0C.balanceOfPerPool.call(addressazADZE, uintINfmcWz, {from: accounts[2]});
		await WolfStakingRewardslIcj0C.onlyOwner.call({from: accounts[2]});
		const uint256TxzZIIG = await WolfStakingRewardslIcj0C.earned.call(addressMVv92lS, uintyf53UeY, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqzkSiKw = "Q3wLxJGRggQgIpfVJ7qc"
		const string85JUQN = "z7ybXC2ybwuUhEImPfAD8A2x8"
		const uintLfUlOUa = BigInt("175")
		const WolfStakingRewardsxEUruX1 = await WolfStakingRewards.new(stringqzkSiKw, string85JUQN, uintLfUlOUa, {from: accounts[3]});
		const uintmjFfS3C = BigInt("1721")
		const uinteKp8iu8 = BigInt("1237")
		const uintg7eEbuW = BigInt("798")
		const uintJkcO1eO = BigInt("603")
		const uintiy5ZzhS = BigInt("2028")
		const uint256aIdXl0S = await WolfStakingRewardsxEUruX1.withdrawRemainingBalance.call(uinteKp8iu8, uintmjFfS3C, {from: accounts[0]});
		await WolfStakingRewardsxEUruX1.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256KBfCHuL = await WolfStakingRewardsxEUruX1.withdrawRemainingBalance.call(uintJkcO1eO, uintg7eEbuW, {from: accounts[0]});
		const uint256GQ6HRX6 = await WolfStakingRewardsxEUruX1.totalSupplyPerPool.call(uintiy5ZzhS, {from: accounts[3]});
		const stringN4QZrmz = await WolfStakingRewardsxEUruX1.symbol.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressSXyQePV = accounts[5]
		const addressOxSs1ZK = accounts[4]
		const addressFYIoNeK = accounts[2]
		const WolfStakingRewardsbNcg2oG = await WolfStakingRewards.new(addressSXyQePV, addressOxSs1ZK, addressFYIoNeK, {from: accounts[1]});
		const uintuNWFu0V = BigInt("1888")
		const uintjyLNtRy = BigInt("864")
		const uintuwDxbag = BigInt("74")
		const uintFsFZKLj = BigInt("1263")
		const uintGJtlngZ = BigInt("1094")
		const uintelT7XUj = BigInt("577")
		const uint256HFYkZjZ = await WolfStakingRewardsbNcg2oG.withdrawRemainingBalance.call(uintjyLNtRy, uintuNWFu0V, {from: accounts[0]});
		const uint256XFxQ248 = await WolfStakingRewardsbNcg2oG.getRewardForDuration.call(uintuwDxbag, {from: accounts[3]});
		const uint256Q4apNAS = await WolfStakingRewardsbNcg2oG.stake.call(uintGJtlngZ, uintFsFZKLj, {from: accounts[0]});
		const uint256V98CrQ = await WolfStakingRewardsbNcg2oG.totalSupplyPerPool.call(uintelT7XUj, {from: accounts[1]});
		await WolfStakingRewardsbNcg2oG.nonReentrant.call({from: accounts[3]});

		await expect(WolfStakingRewardsbNcg2oG.withdrawRemainingBalance.call(uintjyLNtRy, uintuNWFu0V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringscwBxjC = "RNoIsmJAYlgQ8ODgzKZkolnx1tDn2A6bblNEeKEp4p7RwT1hWBWKALqBoMgrebetr3my1zGXEkkKt5vOXlgJni1aIH1w"
		const stringYNSFxic = "4WrUGVNuvDGvKu96gv2G8Afa03mpi8zGQEBo78CrPKJmmJg7HXO3tcASpyuao5cU"
		const uintaQ6tcoc = BigInt("107")
		const WolfStakingRewardsJNEiyPt = await WolfStakingRewards.new(stringscwBxjC, stringYNSFxic, uintaQ6tcoc, {from: accounts[4]});
		const uintlCTslML = BigInt("1549")
		const uintka0KRh = BigInt("1518")
		await WolfStakingRewardsJNEiyPt.nonReentrant.call({from: accounts[0]});
		const uint256arrayZwhPZ0P = await WolfStakingRewardsJNEiyPt.updateNotifyRewardAmount.call(uintlCTslML, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arraydOYhosL = await WolfStakingRewardsJNEiyPt.updateNotifyRewardAmount.call(uintka0KRh, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressYzYUl66 = accounts[5]
		const addressefIAvh4 = accounts[4]
		const addressovNKOCW = accounts[2]
		const WolfStakingRewardsbNcg2oG = await WolfStakingRewards.new(addressYzYUl66, addressefIAvh4, addressovNKOCW, {from: accounts[1]});
		const uintclxXK2Z = BigInt("1619")
		const addressw0F9CZ1 = accounts[4]
		const uintUegBfwM = BigInt("577")
		const uint256XhPgdP2 = await WolfStakingRewardsbNcg2oG.earned.call(addressw0F9CZ1, uintclxXK2Z, {from: accounts[1]});
		const uint256V98CrQ = await WolfStakingRewardsbNcg2oG.totalSupplyPerPool.call(uintUegBfwM, {from: accounts[1]});

		assert.equal(uint256V98CrQ, BigInt("0"))
		assert.equal(uint256XhPgdP2, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const addressK2ji9XQ = accounts[5]
		const addressP49TXSQ = accounts[4]
		const addressv9D4qvb = accounts[2]
		const WolfStakingRewardsbNcg2oG = await WolfStakingRewards.new(addressK2ji9XQ, addressP49TXSQ, addressv9D4qvb, {from: accounts[1]});
		const uintd9dyAlf = BigInt("382")
		const uintyuD4pGr = BigInt("1616")
		const addressq5WmEFV = accounts[5]
		const uintV9Eahuu = BigInt("74")
		const uintJydIOJ = BigInt("586")
		const uintQps3czu = BigInt("1337")
		const uintjVv5EJW = BigInt("1743")
		const uint256arrayabDlWbF = await WolfStakingRewardsbNcg2oG.updateNotifyRewardAmount.call(uintd9dyAlf, {from: accounts[4]});
		const uint256XhPgdP2 = await WolfStakingRewardsbNcg2oG.earned.call(addressq5WmEFV, uintyuD4pGr, {from: accounts[1]});
		const uint256XFxQ248 = await WolfStakingRewardsbNcg2oG.getRewardForDuration.call(uintV9Eahuu, {from: accounts[3]});
		const uint256V98CrQ = await WolfStakingRewardsbNcg2oG.totalSupplyPerPool.call(uintJydIOJ, {from: accounts[1]});
		const uint256WjHZdX8 = await WolfStakingRewardsbNcg2oG.stake.call(uintjVv5EJW, uintQps3czu, {from: accounts[1]});
		await WolfStakingRewardsbNcg2oG.nonReentrant.call({from: accounts[3]});

		await expect(WolfStakingRewardsbNcg2oG.updateNotifyRewardAmount.call(uintd9dyAlf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringCiC48Pa = "jAFVTH2if1fjIDsmPHBIXeiRs7ogeVKgmnwEVwgdMAEvWkRE8MW3jLVdlj6mkENPGbqksZ9vKD8yxTDSOaiJQl"
		const stringhu7OfB9 = "aONvjBpfgrCt54scB4vxx4AqGsP9y3"
		const uintogJHgg = BigInt("188")
		const WolfStakingRewardsfHaokNa = await WolfStakingRewards.new(stringCiC48Pa, stringhu7OfB9, uintogJHgg, {from: accounts[1]});
		const uintmoWv5A = BigInt("1415")
		const uinteTlWZyS = BigInt("383")
		const uint877kOU = BigInt("1675")
		const uintBjYG7H = await WolfStakingRewardsfHaokNa.getReward.call(uintmoWv5A, {from: accounts[3]});
		await WolfStakingRewardsfHaokNa.nonReentrant.call({from: accounts[3]});
		const uint256arraycT1CSk6 = await WolfStakingRewardsfHaokNa.updateNotifyRewardAmount.call(uinteTlWZyS, {from: accounts[2]});
		const uint256xGmtJJT = await WolfStakingRewardsfHaokNa.getRewardForDuration.call(uint877kOU, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressANL13Qw = accounts[5]
		const addressgVJnfQX = accounts[4]
		const addressxLKji5K = accounts[2]
		const WolfStakingRewardsbNcg2oG = await WolfStakingRewards.new(addressANL13Qw, addressgVJnfQX, addressxLKji5K, {from: accounts[1]});
		const uintn0XtKkE = BigInt("1616")
		const addresshhsr5Jd = accounts[4]
		const uintzH9nVdu = BigInt("1303")
		const uintKz4Qzyi = BigInt("74")
		const uint42lCuO = BigInt("1734")
		const uintA8e5VoZ = BigInt("577")
		const uinttbNhCPS = BigInt("1337")
		const uinttAMWfaz = BigInt("1743")
		const uint256XhPgdP2 = await WolfStakingRewardsbNcg2oG.earned.call(addresshhsr5Jd, uintn0XtKkE, {from: accounts[1]});
		const uintvFOnGG = await WolfStakingRewardsbNcg2oG.getReward.call(uintzH9nVdu, {from: accounts[1]});
		const uint256XFxQ248 = await WolfStakingRewardsbNcg2oG.getRewardForDuration.call(uintKz4Qzyi, {from: accounts[3]});
		const uint256kIvPcby = await WolfStakingRewardsbNcg2oG.lastTimeRewardApplicable.call(uint42lCuO, {from: accounts[1]});
		const uint256V98CrQ = await WolfStakingRewardsbNcg2oG.totalSupplyPerPool.call(uintA8e5VoZ, {from: accounts[1]});
		const uint256WjHZdX8 = await WolfStakingRewardsbNcg2oG.stake.call(uinttAMWfaz, uinttbNhCPS, {from: accounts[1]});
		await WolfStakingRewardsbNcg2oG.nonReentrant.call({from: accounts[3]});

		assert.equal(uint256XhPgdP2, BigInt("0"))
		await expect(WolfStakingRewardsbNcg2oG.getRewardForDuration.call(uintKz4Qzyi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringfCTXTPg = "HY44Vbjypyaw1X28oCQ3RlppJRKDCbRaMppLKU998ZslXMKuih67TyYT2mBKpogM3OG"
		const stringpLrttXk = "WNAf7LM5y6vHKxr3qMsIhVO5iwFzDcrjf"
		const uintkl3qhDi = BigInt("95")
		const WolfStakingRewardsbQr6WyR = await WolfStakingRewards.new(stringfCTXTPg, stringpLrttXk, uintkl3qhDi, {from: accounts[1]});
		const uinthdzjvT = BigInt("544")
		const addresszJXE3Oi = accounts[4]
		const uintIRaAdul = BigInt("602")
		const addressgv2HoN6 = accounts[3]
		const uintuS4x6VM = BigInt("1870")
		const uint256vE0dosS = await WolfStakingRewardsbQr6WyR.earned.call(addresszJXE3Oi, uinthdzjvT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256j2VbLCe = await WolfStakingRewardsbQr6WyR.earned.call(addressgv2HoN6, uintIRaAdul, {from: accounts[1]});
		const uint256xb1XAX2 = await WolfStakingRewardsbQr6WyR.lastTimeRewardApplicable.call(uintuS4x6VM, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressSK6xVjK = accounts[5]
		const addressfRkLe2m = accounts[4]
		const addresscAxrv6V = accounts[2]
		const WolfStakingRewardsbNcg2oG = await WolfStakingRewards.new(addressSK6xVjK, addressfRkLe2m, addresscAxrv6V, {from: accounts[1]});
		const uintz6YN3m4 = BigInt("1926")
		const uintBE9FQ6e = BigInt("601")
		const uintG7ZucOc = BigInt("1616")
		const addressyiETKZd = accounts[0]
		const uintev7TaC = BigInt("1697")
		const uintxuoYolT = BigInt("89")
		const uintatadR9 = BigInt("74")
		const uintli427pu = BigInt("577")
		const uintlzYH29O = BigInt("1337")
		const uintwYDwXJC = BigInt("1732")
		const uint256MV5NLzF = await WolfStakingRewardsbNcg2oG.stake.call(uintBE9FQ6e, uintz6YN3m4, {from: accounts[4]});
		const uint256XhPgdP2 = await WolfStakingRewardsbNcg2oG.earned.call(addressyiETKZd, uintG7ZucOc, {from: accounts[1]});
		const uint256DxyBI9 = await WolfStakingRewardsbNcg2oG.withdrawRemainingBalance.call(uintxuoYolT, uintev7TaC, {from: accounts[5]});
		const uint256XFxQ248 = await WolfStakingRewardsbNcg2oG.getRewardForDuration.call(uintatadR9, {from: accounts[3]});
		const uint256V98CrQ = await WolfStakingRewardsbNcg2oG.totalSupplyPerPool.call(uintli427pu, {from: accounts[1]});
		const uint256WjHZdX8 = await WolfStakingRewardsbNcg2oG.stake.call(uintwYDwXJC, uintlzYH29O, {from: accounts[1]});
		await WolfStakingRewardsbNcg2oG.nonReentrant.call({from: accounts[3]});

		await expect(WolfStakingRewardsbNcg2oG.stake.call(uintBE9FQ6e, uintz6YN3m4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressaMd41Jh = accounts[5]
		const addressJju2D4n = accounts[4]
		const addressml9VnnE = accounts[2]
		const WolfStakingRewardsbNcg2oG = await WolfStakingRewards.new(addressaMd41Jh, addressJju2D4n, addressml9VnnE, {from: accounts[1]});
		const uintY7tGyct = BigInt("1013")
		const uintLOPqRnM = BigInt("1113")
		const uintkuN6Hjz = BigInt("1616")
		const addressBIXQHEJ = accounts[4]
		const uintdfpjh5r = BigInt("1303")
		const uinthKnhUfK = BigInt("1995")
		const uintpYH0LG1 = BigInt("1734")
		const uintvzoulzw = BigInt("44")
		const addressKXnpr0g = accounts[3]
		const uintzAale5Q = BigInt("577")
		const uintofGdWaQ = BigInt("1337")
		const uintLDgvVvh = BigInt("1743")
		const uintINSWOMf = BigInt("786")
		const addressJrhXQZx = accounts[3]
		const uintKEBotJ = BigInt("1527")
		const uintVUpkJog = BigInt("1293")
		const uint256twVKk3 = await WolfStakingRewardsbNcg2oG.withdraw.call(uintLOPqRnM, uintY7tGyct, {from: accounts[4]});
		const uint256XhPgdP2 = await WolfStakingRewardsbNcg2oG.earned.call(addressBIXQHEJ, uintkuN6Hjz, {from: accounts[1]});
		const uintvFOnGG = await WolfStakingRewardsbNcg2oG.getReward.call(uintdfpjh5r, {from: accounts[1]});
		const uint256XFxQ248 = await WolfStakingRewardsbNcg2oG.getRewardForDuration.call(uinthKnhUfK, {from: accounts[3]});
		const uint256kIvPcby = await WolfStakingRewardsbNcg2oG.lastTimeRewardApplicable.call(uintpYH0LG1, {from: accounts[1]});
		const addressSGAwTZB = await WolfStakingRewardsbNcg2oG.updateReward.call(addressKXnpr0g, uintvzoulzw, {from: accounts[0]});
		const uint256V98CrQ = await WolfStakingRewardsbNcg2oG.totalSupplyPerPool.call(uintzAale5Q, {from: accounts[1]});
		const uint256WjHZdX8 = await WolfStakingRewardsbNcg2oG.stake.call(uintLDgvVvh, uintofGdWaQ, {from: accounts[1]});
		const uint256ojHqwbN = await WolfStakingRewardsbNcg2oG.balanceOfPerPool.call(addressJrhXQZx, uintINSWOMf, {from: accounts[3]});
		const uintEJysCDd = await WolfStakingRewardsbNcg2oG.getReward.call(uintKEBotJ, {from: accounts[0]});
		await WolfStakingRewardsbNcg2oG.nonReentrant.call({from: accounts[3]});
		const uint256lZ1uG1M = await WolfStakingRewardsbNcg2oG.lastTimeRewardApplicable.call(uintVUpkJog, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardsbNcg2oG.withdraw.call(uintLOPqRnM, uintY7tGyct, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringK5PcoH2 = "KmOb"
		const stringvaWWnCg = "Srj4JvG9AFuAXzVHjcg4ikVP5IibgqUkJdoLED4zOimUjQS8BXUuJ8gcrYPRo4KC6nxQgK2s5sL"
		const uintCKPhNds = BigInt("20")
		const WolfStakingRewardsncNeaPz = await WolfStakingRewards.new(stringK5PcoH2, stringvaWWnCg, uintCKPhNds, {from: "0x0000000000000000000000000000000000000001"});
		const uintIetXovN = BigInt("1591")
		const addressfytSgO = accounts[1]
		const uintpsEA3TY = BigInt("1838")
		const addressYAGfrEX = accounts[4]
		const uintSKQSWBh = BigInt("613")
		const addressFaOgCUw = accounts[1]
		const uintZcICOZc = BigInt("156")
		const addresseOHdt9U = accounts[3]
		const uint256qtckui9 = await WolfStakingRewardsncNeaPz.balanceOfPerPool.call(addressfytSgO, uintIetXovN, {from: accounts[3]});
		const stringz8qwYlH = await WolfStakingRewardsncNeaPz.symbol.call({from: accounts[1]});
		const uint256hMLhN9o = await WolfStakingRewardsncNeaPz.earned.call(addressYAGfrEX, uintpsEA3TY, {from: accounts[2]});
		const addressd5gtOqm = await WolfStakingRewardsncNeaPz.updateReward.call(addressFaOgCUw, uintSKQSWBh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Cc0lJMf = await WolfStakingRewardsncNeaPz.balanceOfPerPool.call(addresseOHdt9U, uintZcICOZc, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const address7v1KNG = accounts[4]
		const addressyH2jMJ = accounts[2]
		const addresso4F9qS7 = accounts[3]
		const WolfStakingRewardszx6HS3q = await WolfStakingRewards.new(address7v1KNG, addressyH2jMJ, addresso4F9qS7, {from: accounts[5]});
		const uintP7sxg1S = BigInt("1244")
		const addressmH6zm0B = accounts[1]
		const uintY9ylZzJ = BigInt("857")
		const uintAdUtpW8 = BigInt("244")
		const uintFykN7W0 = BigInt("922")
		const uintVB7FVZW = BigInt("1746")
		const uintBHocLuB = BigInt("124")
		const uint256K63w02 = await WolfStakingRewardszx6HS3q.balanceOfPerPool.call(addressmH6zm0B, uintP7sxg1S, {from: accounts[3]});
		await WolfStakingRewardszx6HS3q.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256Nuq7A5Y = await WolfStakingRewardszx6HS3q.totalSupplyPerPool.call(uintY9ylZzJ, {from: accounts[1]});
		const uintYi48WJR = await WolfStakingRewardszx6HS3q.getReward.call(uintAdUtpW8, {from: accounts[0]});
		const uint256Xs4XSgY = await WolfStakingRewardszx6HS3q.stake.call(uintVB7FVZW, uintFykN7W0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256f9cYWGi = await WolfStakingRewardszx6HS3q.getRewardForDuration.call(uintBHocLuB, {from: accounts[0]});

		assert.equal(uint256K63w02, BigInt("0"))
		await expect(WolfStakingRewardszx6HS3q.onlyRewardsDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringmG3tabT = "1Iyh4p31ctkBpSbF2s4RGx6DrUzmVvo"
		const stringVZAChMt = "wRC4f9UtzN3iJUrnQ42Xhelht2eZ8SRdtWymmKoW5Al9AyN91c9zSWcldvYFC"
		const uintZhKFmn = BigInt("57")
		const WolfStakingRewardsIxsNNZ1 = await WolfStakingRewards.new(stringmG3tabT, stringVZAChMt, uintZhKFmn, {from: "0x0000000000000000000000000000000000000001"});
		const uintOT2PBW = BigInt("737")
		const uintUXPnKEN = BigInt("509")
		await WolfStakingRewardsIxsNNZ1.onlyOwner.call({from: accounts[3]});
		const uint256saYsaH = await WolfStakingRewardsIxsNNZ1.withdraw.call(uintUXPnKEN, uintOT2PBW, {from: accounts[0]});
		const stringJWxedhi = await WolfStakingRewardsIxsNNZ1.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbLVM0MM = "ahJ8By2DmFV3O4aiDpjPh7Er6VfMcEpRcA1U"
		const stringm05a9wR = "nTpa74SXo7jM"
		const uintFdMe1y1 = BigInt("105")
		const WolfStakingRewardswInydCl = await WolfStakingRewards.new(stringbLVM0MM, stringm05a9wR, uintFdMe1y1, {from: "0x0000000000000000000000000000000000000001"});
		const uint2l9TnJ = BigInt("1631")
		const uintvK7O8K7 = BigInt("162")
		const uintTQQP5j = BigInt("1890")
		const uintSuC8Wj = BigInt("2032")
		const uintvpQ00QA = BigInt("664")
		const uintNXDVW14 = BigInt("2026")
		const uint256RLcspM1 = await WolfStakingRewardswInydCl.withdraw.call(uintvK7O8K7, uint2l9TnJ, {from: accounts[3]});
		const uint256VOlAjb7 = await WolfStakingRewardswInydCl.rewardPerToken.call(uintTQQP5j, {from: accounts[2]});
		const uint256NwMf9q = await WolfStakingRewardswInydCl.stake.call(uintvpQ00QA, uintSuC8Wj, {from: accounts[4]});
		const uint256tUg6xK1 = await WolfStakingRewardswInydCl.exit.call(uintNXDVW14, {from: accounts[3]});
		await WolfStakingRewardswInydCl.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringa8R9B6H = "2Ew5xsa9my"
		const stringEshMV0S = "m1pPvHrOMydq2WnUcDZTPp"
		const uintRBY4V4 = BigInt("113")
		const WolfStakingRewardsHbR42A = await WolfStakingRewards.new(stringa8R9B6H, stringEshMV0S, uintRBY4V4, {from: accounts[3]});
		const uintZmrjh2d = BigInt("1689")
		const uinth9MdrkO = BigInt("362")
		const uint34iUj9 = BigInt("2042")
		const addresspzkLYeG = accounts[1]
		const uintW4145mO = BigInt("1057")
		const uintXspA0AP = BigInt("1582")
		const addressBwRFgY2 = accounts[0]
		const uint256IZFm0PD = await WolfStakingRewardsHbR42A.withdrawRemainingBalance.call(uinth9MdrkO, uintZmrjh2d, {from: accounts[1]});
		await WolfStakingRewardsHbR42A.onlyRewardsDistribution.call({from: accounts[3]});
		const addressYiI30bX = await WolfStakingRewardsHbR42A.updateReward.call(addresspzkLYeG, uint34iUj9, {from: accounts[4]});
		const uint256arraykhq6ST = await WolfStakingRewardsHbR42A.updateNotifyRewardAmount.call(uintW4145mO, {from: accounts[0]});
		const addressrSrFdMr = await WolfStakingRewardsHbR42A.updateReward.call(addressBwRFgY2, uintXspA0AP, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringaKaCxe = "6btrm4yCyYPzT1MLmv69Cg4oSP0AbAlmdwAmTbgIiha6unmdDjFFTBPONl4WvEgHWYD5fROB"
		const stringIfjQ936 = "fV7CLLpw2Er7JYiVsCVamDPoVTgT"
		const uintKYQljyI = BigInt("163")
		const WolfStakingRewardsv3DUFZq = await WolfStakingRewards.new(stringaKaCxe, stringIfjQ936, uintKYQljyI, {from: accounts[5]});
		const uintU7XuC2k = BigInt("1487")
		const addressg7zWqQ2 = accounts[4]
		const uintw2KK9E = BigInt("71")
		const addressL3Jlx1n = accounts[1]
		const addresseAfXLE = await WolfStakingRewardsv3DUFZq.updateReward.call(addressg7zWqQ2, uintU7XuC2k, {from: accounts[4]});
		const uint256VHGOomv = await WolfStakingRewardsv3DUFZq.earned.call(addressL3Jlx1n, uintw2KK9E, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringASuLAbx = "BWae0vpKUIDgFKbkf2aDXDqtnGMoAvTJKIEe031PfqLZXMH8cRo0YVv59OC7OYbAhj1RwAjMe9pNMin3Xgjm0nwE"
		const stringwgqFghI = "2A4jcSheiBgGkUToNXmqtxyXICtnriLEBtyhymPV"
		const uintQCNkce4 = BigInt("249")
		const WolfStakingRewardsgJzDnw = await WolfStakingRewards.new(stringASuLAbx, stringwgqFghI, uintQCNkce4, {from: accounts[2]});
		const uintFs0fkEC = BigInt("758")
		const uintbmpSjhw = BigInt("1189")
		const uintwiDQodr = BigInt("1383")
		const uintQcXjpH = BigInt("1414")
		const uint256C36JCw9 = await WolfStakingRewardsgJzDnw.stake.call(uintbmpSjhw, uintFs0fkEC, {from: accounts[0]});
		const uint8YTeu24g = await WolfStakingRewardsgJzDnw.decimals.call({from: accounts[5]});
		const uint256sX9XETP = await WolfStakingRewardsgJzDnw.exit.call(uintwiDQodr, {from: accounts[0]});
		const uinteRZ3eQ = await WolfStakingRewardsgJzDnw.getReward.call(uintQcXjpH, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsKbWay8 = "Pz2ZMWWaKlukCpEOYjhi2gXEBiJvWtXMbbchi8vzB5lpvfbl6knMVXE2jX2qILUhfSk83D91UcF4LimRdwT2Dg6r"
		const stringuwkrJOU = "1nhdAKItA3F2e0GRjGVKHoggGq2C7BLAh19d5zxPLpm9l08N16QsXIoLl4btWEbknwEE"
		const uintrjKOO4 = BigInt("200")
		const WolfStakingRewardsHZbJtWn = await WolfStakingRewards.new(stringsKbWay8, stringuwkrJOU, uintrjKOO4, {from: accounts[5]});
		const uintrqMQCBM = BigInt("1500")
		const uintQhxW6R = BigInt("886")
		const addressXIGKMho = accounts[1]
		await WolfStakingRewardsHZbJtWn.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256wDr5Zm7 = await WolfStakingRewardsHZbJtWn.rewardPerToken.call(uintrqMQCBM, {from: accounts[0]});
		const uint8ibJ3THd = await WolfStakingRewardsHZbJtWn.decimals.call({from: accounts[4]});
		const uint256hQDiLF1 = await WolfStakingRewardsHZbJtWn.balanceOfPerPool.call(addressXIGKMho, uintQhxW6R, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringlc8VwM = "P3lq3s1U5Lznw7N"
		const stringQ2RqC0q = "LLhWphydpKNJXP7aKfQoX6ZNVYNYbiXpwkBkoxiuSTfpol780lGJ6j7Mz3NHIqJgqP4Y8xh5HA8Ir4jB6jhoxTQj9oT4HFOYCe"
		const uintL9hT68t = BigInt("206")
		const WolfStakingRewardsIadNgi8 = await WolfStakingRewards.new(stringlc8VwM, stringQ2RqC0q, uintL9hT68t, {from: accounts[5]});
		const uintGgwMEPj = BigInt("1767")
		const uint8VhQrO = BigInt("1583")
		const uintiIVoX6C = BigInt("242")
		const uint256kCZv3R7 = await WolfStakingRewardsIadNgi8.lastTimeRewardApplicable.call(uintGgwMEPj, {from: accounts[1]});
		const uint256ISVJ75t = await WolfStakingRewardsIadNgi8.lastTimeRewardApplicable.call(uint8VhQrO, {from: accounts[3]});
		const uint256arrayEo9KtOw = await WolfStakingRewardsIadNgi8.updateNotifyRewardAmount.call(uintiIVoX6C, {from: accounts[3]});
		const uint8ClVew4w = await WolfStakingRewardsIadNgi8.decimals.call({from: accounts[0]});
		const stringr1XdWaR = await WolfStakingRewardsIadNgi8.name.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQMIo1zZ = "U"
		const stringP59d5Zj = "AwQLtCaOcSSraXybk8GDFV1r"
		const uintF4AqBUI = BigInt("159")
		const WolfStakingRewardsuiSknxI = await WolfStakingRewards.new(stringQMIo1zZ, stringP59d5Zj, uintF4AqBUI, {from: accounts[1]});
		const uintyi21w7T = BigInt("1393")
		const address0Wd5RM = accounts[0]
		const uintIbjFT03 = BigInt("463")
		const uintSFk4zBd = BigInt("997")
		const uinthFxAsJw = BigInt("1972")
		const uintSWj00bC = BigInt("28")
		const uintjgEsoCJ = BigInt("54")
		const addressi7dl2q = accounts[0]
		const uint256qk995nC = await WolfStakingRewardsuiSknxI.balanceOfPerPool.call(address0Wd5RM, uintyi21w7T, {from: accounts[0]});
		const uint256wE1igcX = await WolfStakingRewardsuiSknxI.lastTimeRewardApplicable.call(uintIbjFT03, {from: accounts[1]});
		const uint256YKrGW9 = await WolfStakingRewardsuiSknxI.withdraw.call(uinthFxAsJw, uintSFk4zBd, {from: accounts[1]});
		const uint256lQk8hY = await WolfStakingRewardsuiSknxI.lastTimeRewardApplicable.call(uintSWj00bC, {from: accounts[4]});
		const uint256ZgQBW8 = await WolfStakingRewardsuiSknxI.balanceOfPerPool.call(addressi7dl2q, uintjgEsoCJ, {from: accounts[5]});
		const uint8hf3plik = await WolfStakingRewardsuiSknxI.decimals.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnRxevN1 = "5M9ho4kbP4HTE6bTWcyuwCPP3bp9BMIoqtoTY8sPCqRK0erBtmm41jhESXsjdsrXKmN5VUpCrS4EAiM8aL5gHJN3I4hGUf"
		const stringc8CpnrO = "SghMUrdmxbJiT"
		const uinttDkw6QL = BigInt("190")
		const WolfStakingRewardsRfgBXNO = await WolfStakingRewards.new(stringnRxevN1, stringc8CpnrO, uinttDkw6QL, {from: accounts[3]});
		const uintfmiPMGE = BigInt("716")
		const uintmlYe00a = BigInt("1111")
		const uintt67aYYR = BigInt("254")
		const uintqfQaUs3 = BigInt("1658")
		const uint256s8PUELi = await WolfStakingRewardsRfgBXNO.getRewardForDuration.call(uintfmiPMGE, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsRfgBXNO.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256oSvXgF7 = await WolfStakingRewardsRfgBXNO.lastTimeRewardApplicable.call(uintmlYe00a, {from: accounts[1]});
		const uint256sJOQcFg = await WolfStakingRewardsRfgBXNO.stake.call(uintqfQaUs3, uintt67aYYR, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhGteTgm = "5BgjGpUvh8mpYPAe3jlzfGtQLp0OUXK2GIQWBBcWhtdG6G7omMjga"
		const stringU3Ms5H2 = "M3lRJn6f4VPcU4roEaei5jJLXtOoMqynK8pMuOTgKgbNEctyauPPAeQxtvIRfgySmpJhuQ2pcYJUF0AiYQu"
		const uintdJfOiXy = BigInt("161")
		const WolfStakingRewardsHHsiEw8 = await WolfStakingRewards.new(stringhGteTgm, stringU3Ms5H2, uintdJfOiXy, {from: accounts[0]});
		const uintRaA7eu = BigInt("914")
		const addressu8gAvuK = accounts[1]
		const uintaAtxxwa = BigInt("1823")
		const uintblI0W4g = BigInt("495")
		const addresstCNGskY = accounts[1]
		const uintNhovVUd = BigInt("1782")
		const uint256axArRco = await WolfStakingRewardsHHsiEw8.balanceOfPerPool.call(addressu8gAvuK, uintRaA7eu, {from: accounts[0]});
		const uint256JW6TB8n = await WolfStakingRewardsHHsiEw8.totalSupplyPerPool.call(uintaAtxxwa, {from: accounts[1]});
		const uint256wsyVVL9 = await WolfStakingRewardsHHsiEw8.earned.call(addresstCNGskY, uintblI0W4g, {from: accounts[1]});
		const uint256AKyzevm = await WolfStakingRewardsHHsiEw8.exit.call(uintNhovVUd, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwD15P4x = "7jZMjPGw4U5e6xVgXNyFa3XJgvNH9Axnrqg33AfFMojUQmBPe"
		const stringec8wCgB = "Ae0ScXANNpbJsCnQszoId4vFj7mGJcVu168cSTpGmu68KQjIl7C2MSj0X98H7fExhyMNxNBabSA8UVKpgKWPctfOOc77"
		const uintF26LKKX = BigInt("148")
		const WolfStakingRewardsVpdV53J = await WolfStakingRewards.new(stringwD15P4x, stringec8wCgB, uintF26LKKX, {from: accounts[4]});
		const uintPT2FZh = BigInt("1843")
		const uintfLMR3KD = BigInt("1796")
		const addressxcfWR2L = accounts[5]
		const uintBDO6AbW = BigInt("324")
		const uintqLSYDB6 = BigInt("1074")
		const uintYLLlVyI = BigInt("746")
		const uint256arrayX5GFfEW = await WolfStakingRewardsVpdV53J.updateNotifyRewardAmount.call(uintPT2FZh, {from: accounts[2]});
		const uint256GiUeqkJ = await WolfStakingRewardsVpdV53J.earned.call(addressxcfWR2L, uintfLMR3KD, {from: accounts[3]});
		const uint256pMLIJoM = await WolfStakingRewardsVpdV53J.totalSupplyPerPool.call(uintBDO6AbW, {from: accounts[0]});
		const uint256BvS8y5D = await WolfStakingRewardsVpdV53J.stake.call(uintYLLlVyI, uintqLSYDB6, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLmJmlhy = "YmGzoU"
		const stringeyM5Qep = "USENTsgkKVDFauwT86LctLK8PIiJN2hDdyREtorSLK0MDCuX3wigLCFsuhtBnSzQopTUgxTSfN0EMirQwQXnu"
		const uintILbqHlv = BigInt("118")
		const WolfStakingRewardsalWQUmZ = await WolfStakingRewards.new(stringLmJmlhy, stringeyM5Qep, uintILbqHlv, {from: "0x0000000000000000000000000000000000000001"});
		const uintoDe9uj7 = BigInt("402")
		const uintPnwvaGg = BigInt("1346")
		const addressbjSQy67 = accounts[0]
		const uintREmytLh = BigInt("1014")
		const addresseT7GvpS = accounts[0]
		const uintY0PzxlT = BigInt("1899")
		const uint5xTSba = BigInt("29")
		const uint256CRqPPB0 = await WolfStakingRewardsalWQUmZ.exit.call(uintoDe9uj7, {from: accounts[0]});
		await WolfStakingRewardsalWQUmZ.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256t1sdwaS = await WolfStakingRewardsalWQUmZ.earned.call(addressbjSQy67, uintPnwvaGg, {from: accounts[1]});
		const uint256ynI5PYx = await WolfStakingRewardsalWQUmZ.balanceOfPerPool.call(addresseT7GvpS, uintREmytLh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256HfS7JHr = await WolfStakingRewardsalWQUmZ.withdrawRemainingBalance.call(uint5xTSba, uintY0PzxlT, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMI4bCQ4 = "cYzqtOhoymrxN3p5oAeRL8tGOyhYOYUZcWAjyRGrLJ9G2teskaa6MXboiqgo1V1AeoHfiKgj"
		const stringbSFL7aA = "lgnhUBKLxcxvuEccB6cKqpPHpBkBwlT0oy6un8RJdG"
		const uintDIaoOWy = BigInt("190")
		const WolfStakingRewardswCPi7DT = await WolfStakingRewards.new(stringMI4bCQ4, stringbSFL7aA, uintDIaoOWy, {from: accounts[5]});
		const uintSi3cpM0 = BigInt("1313")
		const uintb2SVYee = BigInt("32")
		await WolfStakingRewardswCPi7DT.onlyOwner.call({from: accounts[5]});
		const uintUUqosuq = await WolfStakingRewardswCPi7DT.getReward.call(uintSi3cpM0, {from: accounts[1]});
		await WolfStakingRewardswCPi7DT.onlyOwner.call({from: accounts[2]});
		const uint256ZnB0klf = await WolfStakingRewardswCPi7DT.getRewardForDuration.call(uintb2SVYee, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmUAe18P = "7XXlvXKnfwqitEyoQTW8BJYCyqAB6MCgP44SDmALdeYNduagCn5VA9cE3oadf"
		const stringL2032a7 = "kDfKOGi4mkJ1t4LotkeyqomeNdYXQ6GYe8vK7"
		const uintqOyPMOc = BigInt("61")
		const WolfStakingRewardsqvg8P6 = await WolfStakingRewards.new(stringmUAe18P, stringL2032a7, uintqOyPMOc, {from: accounts[3]});
		const uintGsvRvV0 = BigInt("1987")
		const uintqma9sXB = BigInt("343")
		const uintQcXpaab = BigInt("323")
		const uintx9tZEzQ = BigInt("737")
		const uintZwYB25f = BigInt("1789")
		const addressgnhqTq = accounts[3]
		const uint256EJvmCsq = await WolfStakingRewardsqvg8P6.totalSupplyPerPool.call(uintGsvRvV0, {from: accounts[1]});
		const uint256YOkRD5 = await WolfStakingRewardsqvg8P6.withdrawRemainingBalance.call(uintQcXpaab, uintqma9sXB, {from: accounts[4]});
		await WolfStakingRewardsqvg8P6.nonReentrant.call({from: accounts[2]});
		await WolfStakingRewardsqvg8P6.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256vpXozbA = await WolfStakingRewardsqvg8P6.exit.call(uintx9tZEzQ, {from: accounts[4]});
		const uint256KdXpj1 = await WolfStakingRewardsqvg8P6.balanceOfPerPool.call(addressgnhqTq, uintZwYB25f, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHA7JWRi = "kga81W69qiSNe1rSG17egbl3gI7QylRpouHKeUKx1xInToso7tKD0FAmyvQB1u"
		const stringTQv6kWN = "WRO7btTsUGBfrAPaQQvyd1AWMmrpBrLJaY5Vo8eHqR6diYjKek8h6WxzlpidnqWX8M5LSfwVl8dbq8bIjBKKHXPaCCAyKnwMH"
		const uintsAgVVbD = BigInt("223")
		const WolfStakingRewardsu6YP4i2 = await WolfStakingRewards.new(stringHA7JWRi, stringTQv6kWN, uintsAgVVbD, {from: accounts[5]});
		const uintkC4TpND = BigInt("1438")
		const uintpDxfNpM = BigInt("1438")
		const uintw710eoA = BigInt("1670")
		const uintfUQORD7 = BigInt("743")
		await WolfStakingRewardsu6YP4i2.onlyOwner.call({from: accounts[4]});
		const uint256Nd66dUk = await WolfStakingRewardsu6YP4i2.withdrawRemainingBalance.call(uintpDxfNpM, uintkC4TpND, {from: accounts[4]});
		const uint256d2KAv4 = await WolfStakingRewardsu6YP4i2.getRewardForDuration.call(uintw710eoA, {from: accounts[3]});
		const uint256arraygwDoAP = await WolfStakingRewardsu6YP4i2.updateNotifyRewardAmount.call(uintfUQORD7, {from: accounts[2]});
		const uint8xy7U9sK = await WolfStakingRewardsu6YP4i2.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringAP0HiIk = "YnJDqAnQ9hpCxSsgzpYJnrUGT3sp4qZ2f7JBWFV8Nhr2w6Hu9Bz8IxPawuZbYwGCGWSPD5YqyP9xv1e"
		const stringxowg7hA = "rNlY7hloWxgZ1cma3FdBerHcozDw3EeHXOB2EQvxWIvEGMwPgt"
		const uintFg0ue0B = BigInt("241")
		const WolfStakingRewardsXEJPjHb = await WolfStakingRewards.new(stringAP0HiIk, stringxowg7hA, uintFg0ue0B, {from: "0x0000000000000000000000000000000000000001"});
		const uintQC5JQfF = BigInt("1745")
		const uintVBk0zrK = BigInt("840")
		const uintpiJsnbI = BigInt("532")
		const uintgu6oB5 = BigInt("1885")
		const addressE2SsfK = accounts[4]
		const uintPUBKvnC = BigInt("1889")
		const uint256sYD1A3N = await WolfStakingRewardsXEJPjHb.rewardPerToken.call(uintQC5JQfF, {from: accounts[4]});
		const uint256RSxESNi = await WolfStakingRewardsXEJPjHb.withdrawRemainingBalance.call(uintpiJsnbI, uintVBk0zrK, {from: accounts[4]});
		const uint256pn1kPW = await WolfStakingRewardsXEJPjHb.balanceOfPerPool.call(addressE2SsfK, uintgu6oB5, {from: accounts[3]});
		const uint256BbeEhOK = await WolfStakingRewardsXEJPjHb.getRewardForDuration.call(uintPUBKvnC, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLIJzEj6 = "cfjWNzfJhVF42x2NourzfGq5rgldMuMWuoUcQWuS8TvFgo2P3KGR0UnLgYjJMndBEfsTK549oAWogE207b4o3mx"
		const stringGSKGRpw = "NQxOYCsE8bgW18VTE"
		const uintdMjdRLk = BigInt("37")
		const WolfStakingRewardscQfWTT = await WolfStakingRewards.new(stringLIJzEj6, stringGSKGRpw, uintdMjdRLk, {from: accounts[0]});
		const uintKLGL6Wb = BigInt("1188")
		const uintkRouFcL = BigInt("456")
		const uintcWxoQv = BigInt("1083")
		const uint8ouDIXGy = await WolfStakingRewardscQfWTT.decimals.call({from: accounts[0]});
		const uint88Ghw92 = await WolfStakingRewardscQfWTT.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringqU8Xbjv = await WolfStakingRewardscQfWTT.name.call({from: accounts[1]});
		const uint256cYyJ0mR = await WolfStakingRewardscQfWTT.withdraw.call(uintkRouFcL, uintKLGL6Wb, {from: "0x0000000000000000000000000000000000000001"});
		const uint256f53KRA8 = await WolfStakingRewardscQfWTT.lastTimeRewardApplicable.call(uintcWxoQv, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfBI3ve9 = "ovZILJsYIqonGLYEnaLMXFIDqw7LKnRxsEBBBV3Zj1kle"
		const stringnQTGg8 = "bQ694YWy7fnIKWkSD8TTdNcwvTpBVeGNsO64guUe"
		const uintOZpmpmw = BigInt("244")
		const WolfStakingRewardswHGlMPT = await WolfStakingRewards.new(stringfBI3ve9, stringnQTGg8, uintOZpmpmw, {from: accounts[0]});
		const uinto3iGkZL = BigInt("366")
		const uint256yWW0Us = await WolfStakingRewardswHGlMPT.getRewardForDuration.call(uinto3iGkZL, {from: accounts[5]});
		const stringoSRFhV7 = await WolfStakingRewardswHGlMPT.name.call({from: accounts[3]});
		const stringiLvPoo = await WolfStakingRewardswHGlMPT.name.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfs0mcrX = "8NcyIOO4NWTbDiGyfPfeJYJyRSf2EjBkWAhTAhDhNwGVK5BVIiSdY3wOMjuGON3ndlG3aM3wg9FsbxdSGR8tyyAE9L4"
		const stringbXbzfLU = "fd53Xh0Ne8Jdho8KthK2UWuVQoEloM5XGAd5"
		const uintvepP0lH = BigInt("138")
		const WolfStakingRewards1Et0NQ = await WolfStakingRewards.new(stringfs0mcrX, stringbXbzfLU, uintvepP0lH, {from: accounts[0]});
		const uintPjJxq8 = BigInt("1700")
		const uintiR524B9 = BigInt("1622")
		const uintKaBZ9vs = BigInt("1421")
		const uint256arraykDOO140 = await WolfStakingRewards1Et0NQ.updateNotifyRewardAmount.call(uintPjJxq8, {from: accounts[0]});
		const uint8YQj3yZe = await WolfStakingRewards1Et0NQ.decimals.call({from: accounts[3]});
		const uint256YhFEPcw = await WolfStakingRewards1Et0NQ.stake.call(uintKaBZ9vs, uintiR524B9, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIw3AfQ3 = "AMiLOxGs4oYxDFNYY3afUUSQx"
		const stringoi5MY3A = "LS2UWjCkvSnIfuJIVlfnLy528rAKVMq"
		const uintICmW57a = BigInt("254")
		const WolfStakingRewardsOIMkh7 = await WolfStakingRewards.new(stringIw3AfQ3, stringoi5MY3A, uintICmW57a, {from: accounts[3]});
		const uintfCdZuAS = BigInt("122")
		const uintq2yUITQ = BigInt("234")
		const uintFkPIJ3 = BigInt("1579")
		const uintzJCgown = BigInt("1997")
		const uintDJD3oBj = BigInt("656")
		const uintc3LvFBZ = BigInt("1026")
		const uintVdr2JS = await WolfStakingRewardsOIMkh7.getReward.call(uintfCdZuAS, {from: accounts[0]});
		await WolfStakingRewardsOIMkh7.nonReentrant.call({from: accounts[2]});
		const uint2569ILtGx = await WolfStakingRewardsOIMkh7.withdrawRemainingBalance.call(uintFkPIJ3, uintq2yUITQ, {from: accounts[0]});
		const uintJWbCqYa = await WolfStakingRewardsOIMkh7.getReward.call(uintzJCgown, {from: accounts[4]});
		const uint256bmqSY6 = await WolfStakingRewardsOIMkh7.stake.call(uintc3LvFBZ, uintDJD3oBj, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringNgWjila = "K6OqdH1ozFVAf3wEuhsrVH7x4Ynm2SRYMfLvbY9wvcQN3crfw86Pz89j1VAI63HmisB9Fi2TEWCwZY"
		const stringELk9bPC = "vKOk5Ifgn88KlhTnTsApDxGqCtkR18xSr2u47MECGWWp1UGlQvp3oI3oDuOCOHv7Dn7O6anT1K80NV1"
		const uintnkKz0Qz = BigInt("76")
		const WolfStakingRewardsCBmJolx = await WolfStakingRewards.new(stringNgWjila, stringELk9bPC, uintnkKz0Qz, {from: "0x0000000000000000000000000000000000000001"});
		const uintvcAmFBL = BigInt("720")
		const uintfmsjE2H = BigInt("1561")
		const uintWjXkuX6 = BigInt("1064")
		const uintfDtlg9v = BigInt("425")
		const uintYhe14ky = BigInt("975")
		const uint256arraymF6nTUA = await WolfStakingRewardsCBmJolx.updateNotifyRewardAmount.call(uintvcAmFBL, {from: accounts[1]});
		const uint256vvxQIwz = await WolfStakingRewardsCBmJolx.lastTimeRewardApplicable.call(uintfmsjE2H, {from: accounts[1]});
		const uintNZS3IIN = await WolfStakingRewardsCBmJolx.getReward.call(uintWjXkuX6, {from: accounts[0]});
		const stringva1UnvC = await WolfStakingRewardsCBmJolx.name.call({from: accounts[1]});
		const uint256lwbYwe9 = await WolfStakingRewardsCBmJolx.withdraw.call(uintYhe14ky, uintfDtlg9v, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmC6RHvQ = "gDnlw7F4NrZKIuhP"
		const string7AluvI = "Ae83IdhYpjHEtT20CUYBbM9sDk5OzKGWFc8Nsq9oyJClzXaVe3z4JEGWBzoBw8iQoCsjwu1ekhMBnPaWcLXegwzHWElxqvH07C"
		const uintVeRmwhy = BigInt("164")
		const WolfStakingRewardssvcJZEd = await WolfStakingRewards.new(stringmC6RHvQ, string7AluvI, uintVeRmwhy, {from: accounts[2]});
		const uintF3rAshx = BigInt("1130")
		const addressjXFuk22 = accounts[0]
		const uintbUMCEj = BigInt("740")
		const uintHxMmZqS = BigInt("1298")
		const addressqB8yafc = await WolfStakingRewardssvcJZEd.updateReward.call(addressjXFuk22, uintF3rAshx, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nOn6mGz = await WolfStakingRewardssvcJZEd.getRewardForDuration.call(uintbUMCEj, {from: accounts[0]});
		const uint256RiOtvJ = await WolfStakingRewardssvcJZEd.getRewardForDuration.call(uintHxMmZqS, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringG8PSvuU = "BfAFn"
		const stringJnqpg8c = "5D4zlgnSVqTDbTX4nYyN3ng1rk1UImUHYqrgIMqg4LgsKXagz2pDoKia6dB54Kxv10ttFvNyD9bTaACWbHDiiLapd5n"
		const uintRznXSMs = BigInt("178")
		const WolfStakingRewardsfURjdr0 = await WolfStakingRewards.new(stringG8PSvuU, stringJnqpg8c, uintRznXSMs, {from: accounts[0]});
		const uintn9q12Rh = BigInt("922")
		const uintnanqJw = BigInt("1632")
		const uintcUofvvM = BigInt("1178")
		const uintFFF4ibi = BigInt("1856")
		const uint256BYVwNaD = await WolfStakingRewardsfURjdr0.withdraw.call(uintnanqJw, uintn9q12Rh, {from: accounts[3]});
		const uintUMXcMbv = await WolfStakingRewardsfURjdr0.getReward.call(uintcUofvvM, {from: accounts[2]});
		const uint256arrayif8BON7 = await WolfStakingRewardsfURjdr0.updateNotifyRewardAmount.call(uintFFF4ibi, {from: accounts[3]});
		await WolfStakingRewardsfURjdr0.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKjYRqFJ = "6jzxWYJVB5gbZj1ox2Fa4ISRBJ5f0HWmv7lD7WRKBmCyQaVTfx4VXyF1"
		const stringPp2xZpO = "wvCH3Glq5hilz979m4fbQIsAwgCnCN"
		const uintNweqzMY = BigInt("61")
		const WolfStakingRewards7Ol6si = await WolfStakingRewards.new(stringKjYRqFJ, stringPp2xZpO, uintNweqzMY, {from: accounts[3]});
		const uintzS4SiF2 = BigInt("370")
		const uinttHeSnbn = BigInt("135")
		const uintwf4rwjd = BigInt("729")
		const addressjOZooco = accounts[4]
		const uintoc9nD7a = BigInt("97")
		const uint8K9fPPx = await WolfStakingRewards7Ol6si.decimals.call({from: accounts[1]});
		const uint256c5tAlGW = await WolfStakingRewards7Ol6si.withdrawRemainingBalance.call(uinttHeSnbn, uintzS4SiF2, {from: accounts[3]});
		const addressAbAEPoB = await WolfStakingRewards7Ol6si.updateReward.call(addressjOZooco, uintwf4rwjd, {from: accounts[3]});
		const uint256uDHVzW = await WolfStakingRewards7Ol6si.rewardPerToken.call(uintoc9nD7a, {from: accounts[3]});
		const stringuGNMUUI = await WolfStakingRewards7Ol6si.name.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJiq1avo = "RkIj5prOoRraIsyQQY1Gd"
		const stringUgWr4TQ = "sBoSGA2iY79E6bzG9ESL7r9KTLyCkiPvTTJuhCuodPtHI5voS0ZrtbFQu"
		const uintOuMY8En = BigInt("153")
		const WolfStakingRewardsNX3QcEK = await WolfStakingRewards.new(stringJiq1avo, stringUgWr4TQ, uintOuMY8En, {from: accounts[5]});
		const uintd3sIkwI = BigInt("206")
		const uintNFDJpoZ = BigInt("1378")
		const uintY5qYEcM = BigInt("1348")
		const addressiFyznAJ = accounts[0]
		const uintOaMOLFu = BigInt("1139")
		const uint8e93hEwd = await WolfStakingRewardsNX3QcEK.decimals.call({from: accounts[3]});
		const uint2568qCOxq = await WolfStakingRewardsNX3QcEK.withdrawRemainingBalance.call(uintNFDJpoZ, uintd3sIkwI, {from: accounts[2]});
		const stringwi9vXLA = await WolfStakingRewardsNX3QcEK.symbol.call({from: accounts[5]});
		const uint256cd9aYh = await WolfStakingRewardsNX3QcEK.balanceOfPerPool.call(addressiFyznAJ, uintY5qYEcM, {from: accounts[1]});
		const uint256I87hBg = await WolfStakingRewardsNX3QcEK.exit.call(uintOaMOLFu, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdHyQdgX = "pGOlHtmI8N1pfkAHtV4wEKgoF3BP"
		const stringaMCSng = "m8bW3KBOd3EYqGY8O30v4yEZ2AJrEFa6cjGjAFDJJjIjVI2eTBfA64l6MOh4a30IuSBPQxnOCGdjfnK"
		const uintoINykS = BigInt("180")
		const WolfStakingRewardsqPE3qfu = await WolfStakingRewards.new(stringdHyQdgX, stringaMCSng, uintoINykS, {from: accounts[3]});
		const uintGOyvgUo = BigInt("1014")
		const uint57umGQ = BigInt("1501")
		const uintI2Nq71k = BigInt("1913")
		const uintbt38g38 = BigInt("1356")
		const uinthly0cMQ = BigInt("984")
		const uinto0CLMy2 = BigInt("231")
		const uintlBKXP5p = BigInt("1868")
		const addressJvOhgKo = accounts[2]
		const uintolVTFjS = BigInt("1440")
		const uint256R6EUPY6 = await WolfStakingRewardsqPE3qfu.withdrawRemainingBalance.call(uint57umGQ, uintGOyvgUo, {from: accounts[1]});
		const uint256QWeCfv = await WolfStakingRewardsqPE3qfu.withdraw.call(uintbt38g38, uintI2Nq71k, {from: accounts[3]});
		const uint256niMnaNK = await WolfStakingRewardsqPE3qfu.stake.call(uinto0CLMy2, uinthly0cMQ, {from: accounts[4]});
		const uint256tFEXHv = await WolfStakingRewardsqPE3qfu.earned.call(addressJvOhgKo, uintlBKXP5p, {from: accounts[0]});
		const uint256znfFYFF = await WolfStakingRewardsqPE3qfu.getRewardForDuration.call(uintolVTFjS, {from: accounts[0]});
		await WolfStakingRewardsqPE3qfu.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLn196Rs = "u9ENAbJqBsD36WVX5ZgSF7gbkGTPRQzH2V321zerd3wOnpYKtbf1sXrQwX"
		const stringvUSaXYz = "Y8t4NCWXDKmhEd96qLFUCh1NiGhJHEskn6iUJ8t97fHCmEPYq82vucF1WdSUFK"
		const uintO1T4wA6 = BigInt("250")
		const WolfStakingRewardsh8JHfWH = await WolfStakingRewards.new(stringLn196Rs, stringvUSaXYz, uintO1T4wA6, {from: accounts[0]});
		const uintr2mXoxj = BigInt("485")
		const uintoOXUAPF = BigInt("557")
		const addressPNqlPTY = accounts[0]
		const stringk4X2li7 = await WolfStakingRewardsh8JHfWH.name.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsh8JHfWH.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256X3ckcv = await WolfStakingRewardsh8JHfWH.lastTimeRewardApplicable.call(uintr2mXoxj, {from: accounts[1]});
		const addressiKLHWkM = await WolfStakingRewardsh8JHfWH.updateReward.call(addressPNqlPTY, uintoOXUAPF, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXi4zq4P = "6CxudY8JyWpSTDI3PArCS2zGXDnkiL2xItreI9vtWJbrJKJ57"
		const stringeXGkjTe = "jl2dIYIjxncfGcaY6qq3MlNLgamNtGLp2laEVUJupFMnJKg1IpKDFfNWEGVAuLUeSqbOxspkbwjPIz4czzUyiIVs"
		const uintw4RMMu7 = BigInt("221")
		const WolfStakingRewardspJ6HZsB = await WolfStakingRewards.new(stringXi4zq4P, stringeXGkjTe, uintw4RMMu7, {from: accounts[4]});
		const uintghLlf3 = BigInt("1672")
		const uinteVW4EO7 = BigInt("1500")
		const uintpZ5yv4D = BigInt("1641")
		const uintCpfIi6R = BigInt("1123")
		const uintYBjEHR0 = BigInt("1766")
		const uinth02tyZL = BigInt("216")
		const uintXqMt734 = BigInt("528")
		const uint256AIAHJKt = await WolfStakingRewardspJ6HZsB.rewardPerToken.call(uintghLlf3, {from: accounts[2]});
		const uint256zwzJezK = await WolfStakingRewardspJ6HZsB.withdrawRemainingBalance.call(uintpZ5yv4D, uinteVW4EO7, {from: accounts[4]});
		const uint256sIqxYEZ = await WolfStakingRewardspJ6HZsB.lastTimeRewardApplicable.call(uintCpfIi6R, {from: accounts[1]});
		const uint256sjRZEOp = await WolfStakingRewardspJ6HZsB.stake.call(uinth02tyZL, uintYBjEHR0, {from: accounts[1]});
		const uint256wwARua0 = await WolfStakingRewardspJ6HZsB.rewardPerToken.call(uintXqMt734, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsYsxahs = "GclfyEVblx6ISYvwLN1X6xnD3Nf1wzxw0ufAu8ikenh7PJ6bfXOKhuLuFR0CUkTJKv85r8UvXKPjVqGSdY8B9t4cO"
		const string1RVRte = "1ycnbTae5UMxn5BQhPvIQVnll"
		const uintilAiJjc = BigInt("119")
		const WolfStakingRewardsl9WzWFW = await WolfStakingRewards.new(stringsYsxahs, string1RVRte, uintilAiJjc, {from: accounts[0]});
		const uintZvBjcV = BigInt("984")
		const addressLyXQBQ = accounts[0]
		const uintCZ1761O = BigInt("1178")
		const addressysygYUF = accounts[1]
		const uintHKTegBS = BigInt("817")
		const uint256J2oAbH1 = await WolfStakingRewardsl9WzWFW.balanceOfPerPool.call(addressLyXQBQ, uintZvBjcV, {from: accounts[1]});
		const uint256JpF4Y9w = await WolfStakingRewardsl9WzWFW.balanceOfPerPool.call(addressysygYUF, uintCZ1761O, {from: accounts[3]});
		const uint256uyTn6Wy = await WolfStakingRewardsl9WzWFW.totalSupplyPerPool.call(uintHKTegBS, {from: accounts[1]});
	});
})