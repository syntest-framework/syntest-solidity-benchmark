const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressqrS2APl = "0x0000000000000000000000000000000000000001"
		const addressFxUJ4kp = accounts[4]
		const addressa8ExfbM = accounts[0]
		const WolfStakingRewardsUoUnCi6 = await WolfStakingRewards.new(addressqrS2APl, addressFxUJ4kp, addressa8ExfbM, {from: "0x0000000000000000000000000000000000000001"});
		const uintNL9J5rT = BigInt("400")
		const stringTioDwSZ = await WolfStakingRewardsUoUnCi6.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsUoUnCi6.nonReentrant.call({from: accounts[1]});
		const uint256dvpQOB1 = await WolfStakingRewardsUoUnCi6.getRewardForDuration.call(uintNL9J5rT, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressDkITuyg = accounts[5]
		const addresstwsm9Xs = accounts[0]
		const addressxjcerCr = accounts[1]
		const WolfStakingRewardsHKTXeC7 = await WolfStakingRewards.new(addressDkITuyg, addresstwsm9Xs, addressxjcerCr, {from: accounts[2]});
		const uintG5yr1Us = BigInt("128")
		await WolfStakingRewardsHKTXeC7.nonReentrant.call({from: accounts[4]});
		const uint256FR5uyPJ = await WolfStakingRewardsHKTXeC7.exit.call(uintG5yr1Us, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardsHKTXeC7.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressW9dNdNI = accounts[2]
		const addressT4KY4PO = accounts[0]
		const addressOqVlRYt = accounts[1]
		const WolfStakingRewardsLyYdfK2 = await WolfStakingRewards.new(addressW9dNdNI, addressT4KY4PO, addressOqVlRYt, {from: accounts[4]});
		const uintmXZ8z3a = BigInt("534")
		const uinttGIgcL9 = BigInt("1977")
		const uintZjZfYf = BigInt("2037")
		const uintgURNWz1 = BigInt("1824")
		const uint256vUtKcBV = await WolfStakingRewardsLyYdfK2.withdrawRemainingBalance.call(uinttGIgcL9, uintmXZ8z3a, {from: accounts[5]});
		await WolfStakingRewardsLyYdfK2.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256axFCzHy = await WolfStakingRewardsLyYdfK2.withdraw.call(uintgURNWz1, uintZjZfYf, {from: accounts[4]});

		await expect(WolfStakingRewardsLyYdfK2.withdrawRemainingBalance.call(uinttGIgcL9, uintmXZ8z3a, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresshJC6psM = accounts[1]
		const addresssckWOIH = accounts[2]
		const addressTo3lFZn = accounts[4]
		const WolfStakingRewardsCmxKRfX = await WolfStakingRewards.new(addresshJC6psM, addresssckWOIH, addressTo3lFZn, {from: accounts[0]});
		const uintjhRFn2N = BigInt("542")
		const uintfdJaFnQ = BigInt("746")
		const uintBMhnOZA = BigInt("1146")
		const uintL5TN7iB = BigInt("1053")
		const uint256l9iliGR = await WolfStakingRewardsCmxKRfX.getRewardForDuration.call(uintjhRFn2N, {from: accounts[0]});
		const uint256Q9L1Q9 = await WolfStakingRewardsCmxKRfX.withdrawRemainingBalance.call(uintBMhnOZA, uintfdJaFnQ, {from: accounts[2]});
		const uint256HmgB5dj = await WolfStakingRewardsCmxKRfX.rewardPerToken.call(uintL5TN7iB, {from: accounts[0]});

		await expect(WolfStakingRewardsCmxKRfX.getRewardForDuration.call(uintjhRFn2N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringli6hVJf = "hQt4GWW65w41lU6DJ2NKBN2OLGzE0ONWXLIBpD7FZXpVNln5Ecd2K6CkWRIfvCQiUxsAXsVAg7Pga8Ik0k5uhFDvnm"
		const stringukoDtp6 = "ezdCDbvyFVQ"
		const uintIauP2A2 = BigInt("19")
		const WolfStakingRewardsiA1WsOk = await WolfStakingRewards.new(stringli6hVJf, stringukoDtp6, uintIauP2A2, {from: accounts[0]});
		const uintawEYAVo = BigInt("309")
		const uintWXoOLOW = BigInt("1332")
		const uintgmedVMc = BigInt("632")
		const addressVDkizYe = accounts[2]
		const uintrzysx5l = BigInt("588")
		const uintV3aSxFN = BigInt("1830")
		const addressSqZ5dHQ = accounts[1]
		const uint256fkVkLwQ = await WolfStakingRewardsiA1WsOk.stake.call(uintWXoOLOW, uintawEYAVo, {from: accounts[1]});
		const uint256bJZShFS = await WolfStakingRewardsiA1WsOk.earned.call(addressVDkizYe, uintgmedVMc, {from: accounts[5]});
		const uintFI6C6e9 = await WolfStakingRewardsiA1WsOk.getReward.call(uintrzysx5l, {from: accounts[4]});
		const uint256HCNSGMr = await WolfStakingRewardsiA1WsOk.balanceOfPerPool.call(addressSqZ5dHQ, uintV3aSxFN, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfkUaoWE = "xOBp9yT9AbSpHwOnLOwx6WxKNiLFOTGKUYyvfufFGnM0G15SaepJ7kNEBPhOjLCWwwVB4fYVjnAEvntqoW13INNdsbKP"
		const stringtzQtYeT = "JlER"
		const uintuaj3YEJ = BigInt("72")
		const WolfStakingRewardsbrh5OLF = await WolfStakingRewards.new(stringfkUaoWE, stringtzQtYeT, uintuaj3YEJ, {from: accounts[1]});
		const uintcBRweaE = BigInt("314")
		const uint84vbTi = BigInt("1631")
		const addressRJJIWf = accounts[5]
		const uintvGlh244 = BigInt("1713")
		const addressLUC243p = accounts[0]
		const uint256Srp2gqH = await WolfStakingRewardsbrh5OLF.exit.call(uintcBRweaE, {from: accounts[1]});
		const uint256fJjleim = await WolfStakingRewardsbrh5OLF.balanceOfPerPool.call(addressRJJIWf, uint84vbTi, {from: accounts[0]});
		const addressPcNA1ms = await WolfStakingRewardsbrh5OLF.updateReward.call(addressLUC243p, uintvGlh244, {from: accounts[4]});
		await WolfStakingRewardsbrh5OLF.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressg5J5lmm = "0x0000000000000000000000000000000000000001"
		const addressZoONTCS = "0x0000000000000000000000000000000000000001"
		const addressnLydl4R = accounts[1]
		const WolfStakingRewardsf0a7SzP = await WolfStakingRewards.new(addressg5J5lmm, addressZoONTCS, addressnLydl4R, {from: accounts[1]});
		const uintAYOMVgn = BigInt("1299")
		const uintIShL3yh = BigInt("1361")
		const uintycXlwtV = BigInt("165")
		const addressNQAk6uP = accounts[1]
		const uint256ldE5D55 = await WolfStakingRewardsf0a7SzP.totalSupplyPerPool.call(uintAYOMVgn, {from: accounts[0]});
		const uint256xAED9Qm = await WolfStakingRewardsf0a7SzP.getRewardForDuration.call(uintIShL3yh, {from: accounts[0]});
		const uint256bSbvigh = await WolfStakingRewardsf0a7SzP.earned.call(addressNQAk6uP, uintycXlwtV, {from: accounts[1]});

		assert.equal(uint256ldE5D55, BigInt("0"))
		await expect(WolfStakingRewardsf0a7SzP.getRewardForDuration.call(uintIShL3yh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressUg1VrKu = accounts[5]
		const addresso6nlpng = accounts[0]
		const addressHFMEow9 = accounts[1]
		const WolfStakingRewardsHKTXeC7 = await WolfStakingRewards.new(addressUg1VrKu, addresso6nlpng, addressHFMEow9, {from: accounts[2]});
		const uintCjRDtIY = BigInt("128")
		const uint256FR5uyPJ = await WolfStakingRewardsHKTXeC7.exit.call(uintCjRDtIY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardsHKTXeC7.exit.call(uintCjRDtIY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressqNsNXPH = accounts[5]
		const addressRYrwZ52 = accounts[0]
		const addressKEVAEfn = accounts[1]
		const WolfStakingRewardsHKTXeC7 = await WolfStakingRewards.new(addressqNsNXPH, addressRYrwZ52, addressKEVAEfn, {from: accounts[2]});
		const uintr5LOIr = BigInt("816")
		const uint4bA8cB = BigInt("420")
		const uintwtmEtht = BigInt("128")
		const uint256JuSTGeD = await WolfStakingRewardsHKTXeC7.totalSupplyPerPool.call(uintr5LOIr, {from: accounts[3]});
		const uintG2S1i7x = await WolfStakingRewardsHKTXeC7.getReward.call(uint4bA8cB, {from: accounts[4]});
		const uint256FR5uyPJ = await WolfStakingRewardsHKTXeC7.exit.call(uintwtmEtht, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256JuSTGeD, BigInt("0"))
		await expect(WolfStakingRewardsHKTXeC7.exit.call(uintwtmEtht, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressuu8fYDE = accounts[3]
		const addressDHn9pxQ = accounts[0]
		const addresswnWGEKk = accounts[4]
		const WolfStakingRewardsH2Y9x2q = await WolfStakingRewards.new(addressuu8fYDE, addressDHn9pxQ, addresswnWGEKk, {from: accounts[3]});
		const uintWXa576u = BigInt("1274")
		const uintw8s9SI = BigInt("598")
		const uintWHHqpar = BigInt("197")
		const uint256rEVeCkT = await WolfStakingRewardsH2Y9x2q.stake.call(uintw8s9SI, uintWXa576u, {from: accounts[3]});
		const uint8wzVlWWE = await WolfStakingRewardsH2Y9x2q.decimals.call({from: accounts[1]});
		const uint256GmGw9l = await WolfStakingRewardsH2Y9x2q.exit.call(uintWHHqpar, {from: accounts[0]});

		await expect(WolfStakingRewardsH2Y9x2q.stake.call(uintw8s9SI, uintWXa576u, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressqegeTg0 = accounts[5]
		const addressykyLonI = accounts[0]
		const addresseOUCEDr = accounts[1]
		const WolfStakingRewardsHKTXeC7 = await WolfStakingRewards.new(addressqegeTg0, addressykyLonI, addresseOUCEDr, {from: accounts[2]});
		const uintJoP3oTY = BigInt("420")
		const uintTGdd9Qb = BigInt("128")
		const uintG2S1i7x = await WolfStakingRewardsHKTXeC7.getReward.call(uintJoP3oTY, {from: accounts[4]});
		const uint256FR5uyPJ = await WolfStakingRewardsHKTXeC7.exit.call(uintTGdd9Qb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardsHKTXeC7.exit.call(uintTGdd9Qb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringJo0ta7Z = "4gbUBvpdrQvt2SK2pR2OcFGUiU8IOyKz44L0UuibzkjcIoBtoyLD8PH58dsG51x81AeNODmS6qyg7eoN"
		const stringHuFXkTr = "gCvEgrnO6WOXaQPq55hNeLC6Ya11W4HBZxRmC7su8bDJVoSfP0GmFsm2FfgFNTNSEaBCgR2P7VYmLmJIInOkK8Z66PfOYRG"
		const uinthlCD1K6 = BigInt("206")
		const WolfStakingRewardszbBLwZJ = await WolfStakingRewards.new(stringJo0ta7Z, stringHuFXkTr, uinthlCD1K6, {from: accounts[4]});
		const uintqjdgFqc = BigInt("1976")
		const uintjejNUpe = BigInt("384")
		const uintZmsyiyV = BigInt("1925")
		const addressTUgRmDq = accounts[0]
		const uintVHGHXlF = BigInt("926")
		const uint256tZtaT4 = await WolfStakingRewardszbBLwZJ.stake.call(uintjejNUpe, uintqjdgFqc, {from: accounts[3]});
		const uint256tZWfgPz = await WolfStakingRewardszbBLwZJ.earned.call(addressTUgRmDq, uintZmsyiyV, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardszbBLwZJ.onlyOwner.call({from: accounts[1]});
		const uintnsqzsxn = await WolfStakingRewardszbBLwZJ.getReward.call(uintVHGHXlF, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressQCmHjbD = accounts[3]
		const addressyV9qna1 = accounts[0]
		const addressOKRosEz = accounts[4]
		const WolfStakingRewardsH2Y9x2q = await WolfStakingRewards.new(addressQCmHjbD, addressyV9qna1, addressOKRosEz, {from: accounts[3]});
		const uintKZglSo1 = BigInt("1274")
		const uintb8y2BL2 = BigInt("598")
		const uintWN3hT0I = BigInt("197")
		const uint256rEVeCkT = await WolfStakingRewardsH2Y9x2q.stake.call(uintb8y2BL2, uintKZglSo1, {from: accounts[3]});
		const uint256GmGw9l = await WolfStakingRewardsH2Y9x2q.exit.call(uintWN3hT0I, {from: accounts[0]});

		await expect(WolfStakingRewardsH2Y9x2q.stake.call(uintb8y2BL2, uintKZglSo1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressrh0Gwqj = accounts[3]
		const addressl9jIERH = accounts[0]
		const addressCQKkL6L = accounts[4]
		const WolfStakingRewardsH2Y9x2q = await WolfStakingRewards.new(addressrh0Gwqj, addressl9jIERH, addressCQKkL6L, {from: accounts[3]});
		const uintRoKkN05 = BigInt("988")
		const uintXVB72zO = BigInt("1274")
		const uintn5T2cDT = BigInt("592")
		const uintAu2d4td = BigInt("197")
		const uint256arrayy9FFTa = await WolfStakingRewardsH2Y9x2q.updateNotifyRewardAmount.call(uintRoKkN05, {from: accounts[4]});
		const uint256rEVeCkT = await WolfStakingRewardsH2Y9x2q.stake.call(uintn5T2cDT, uintXVB72zO, {from: accounts[3]});
		const uint8wzVlWWE = await WolfStakingRewardsH2Y9x2q.decimals.call({from: accounts[1]});
		const uint256GmGw9l = await WolfStakingRewardsH2Y9x2q.exit.call(uintAu2d4td, {from: accounts[0]});

		await expect(WolfStakingRewardsH2Y9x2q.updateNotifyRewardAmount.call(uintRoKkN05, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressRS5B8ta = accounts[5]
		const addresszHoLsH = accounts[0]
		const addressx3f1GnQ = accounts[1]
		const WolfStakingRewardsHKTXeC7 = await WolfStakingRewards.new(addressRS5B8ta, addresszHoLsH, addressx3f1GnQ, {from: accounts[2]});
		const uintJnWz0Xk = BigInt("1675")
		const addressay4nkNw = "0x0000000000000000000000000000000000000001"
		const uintTLOBv2e = BigInt("420")
		const uinthmNOaJ = BigInt("128")
		const uint256tC5zwsl = await WolfStakingRewardsHKTXeC7.balanceOfPerPool.call(addressay4nkNw, uintJnWz0Xk, {from: accounts[4]});
		const uintG2S1i7x = await WolfStakingRewardsHKTXeC7.getReward.call(uintTLOBv2e, {from: accounts[4]});
		const uint256FR5uyPJ = await WolfStakingRewardsHKTXeC7.exit.call(uinthmNOaJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256tC5zwsl, BigInt("0"))
		await expect(WolfStakingRewardsHKTXeC7.exit.call(uinthmNOaJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringqaV25w = "6vIXcsxDjl8QcQdObQSteTC5gYOH9cSnyPioC1nUWekvBNXtBqWekILRvmSLRWe6"
		const stringGJLT2jM = "hzuSozDcWuEVFOYBIrcTngyaitqkEl8b4PKRr1QJRo"
		const uintsQVp7BH = BigInt("194")
		const WolfStakingRewardsAJVGhMy = await WolfStakingRewards.new(stringqaV25w, stringGJLT2jM, uintsQVp7BH, {from: accounts[0]});
		const uintTEcckg = BigInt("1030")
		const uintvegNKJ9 = BigInt("1833")
		const uintqXnnUOK = BigInt("351")
		await WolfStakingRewardsAJVGhMy.onlyRewardsDistribution.call({from: accounts[3]});
		await WolfStakingRewardsAJVGhMy.nonReentrant.call({from: accounts[0]});
		const uint256yVCWZjo = await WolfStakingRewardsAJVGhMy.rewardPerToken.call(uintTEcckg, {from: accounts[1]});
		const uint256arrayuOnFB3l = await WolfStakingRewardsAJVGhMy.updateNotifyRewardAmount.call(uintvegNKJ9, {from: accounts[3]});
		const uint256Y8YECOZ = await WolfStakingRewardsAJVGhMy.lastTimeRewardApplicable.call(uintqXnnUOK, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfNqzOo = "5I9eocDqiu7tP5hWsrM1pDbFAmGNSwKvEXqfnacBmqoXFVmbS8Lr6pYjkZJemoacSnPditfirHuxt1VbrIztTj"
		const stringokQml5t = "IG6jnxZi793PwfXlJJh9mn7jg23mDrfng8Nhw4fSoQB7wVu"
		const uintDCHhy2f = BigInt("15")
		const WolfStakingRewardsN7pI9Hv = await WolfStakingRewards.new(stringfNqzOo, stringokQml5t, uintDCHhy2f, {from: accounts[2]});
		const uintxeV8hZA = BigInt("1076")
		const uintwk0hOjI = BigInt("2008")
		const uintXUcCzm = BigInt("1282")
		const uintNbLk9q = BigInt("16")
		const addressPSkNERf = accounts[5]
		const uintf4H9F1Z = BigInt("662")
		const uintYlAJf0t = BigInt("1881")
		const uintqP1TXrf = BigInt("162")
		const uintVJoWkur = BigInt("1885")
		const uint256YOMSvd0 = await WolfStakingRewardsN7pI9Hv.withdraw.call(uintwk0hOjI, uintxeV8hZA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yx43EXZ = await WolfStakingRewardsN7pI9Hv.lastTimeRewardApplicable.call(uintXUcCzm, {from: accounts[3]});
		const uint256prlV3vY = await WolfStakingRewardsN7pI9Hv.earned.call(addressPSkNERf, uintNbLk9q, {from: accounts[2]});
		const uint256hEC9HoW = await WolfStakingRewardsN7pI9Hv.exit.call(uintf4H9F1Z, {from: accounts[4]});
		const uint256arrayADSilFX = await WolfStakingRewardsN7pI9Hv.updateNotifyRewardAmount.call(uintYlAJf0t, {from: accounts[3]});
		const uint256z82GRBm = await WolfStakingRewardsN7pI9Hv.withdraw.call(uintVJoWkur, uintqP1TXrf, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringw16G8nv = "ULLuRUYHjpBGnH5PXjotiSsy8Bic5MgCSj33dT35hvT1tFxyMk4k7ziQCykVpxT8evk6er"
		const stringmlIZpMM = "RWEGXSARR52yvOo"
		const uintzb2vheh = BigInt("144")
		const WolfStakingRewardsVODeOVx = await WolfStakingRewards.new(stringw16G8nv, stringmlIZpMM, uintzb2vheh, {from: accounts[0]});
		const uintGXc26y = BigInt("801")
		const uintkIn4at2 = BigInt("1181")
		const uintv4nsQk0 = BigInt("1727")
		const uintQaeGh5k = BigInt("1581")
		const uintwlAiYOU = BigInt("355")
		const uint256arraybQm6viA = await WolfStakingRewardsVODeOVx.updateNotifyRewardAmount.call(uintGXc26y, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RTwS7wP = await WolfStakingRewardsVODeOVx.stake.call(uintv4nsQk0, uintkIn4at2, {from: accounts[2]});
		const uintp1Sdljx = await WolfStakingRewardsVODeOVx.getReward.call(uintQaeGh5k, {from: accounts[0]});
		const uint256tY4Udxp = await WolfStakingRewardsVODeOVx.totalSupplyPerPool.call(uintwlAiYOU, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSrMxjv = "qZRfevDn9Xjlp9rN2WrXYY3wXk4LQnZmxoRk2EYwadwcb4xWsWPMl94HntaQ3"
		const stringC7LeZO7 = "Y9CG3Ek0jFpgc8mbgSJO4tBztSKqnchJIEmrjqDY8EzPmfF8YAbE6tpHgFqhX44UTKf8HGzi"
		const uintmZM24sC = BigInt("16")
		const WolfStakingRewardsbCZaND5 = await WolfStakingRewards.new(stringSrMxjv, stringC7LeZO7, uintmZM24sC, {from: accounts[5]});
		const uintcZITG3V = BigInt("660")
		const uintU8k0doe = BigInt("539")
		const uintIjcCf3J = BigInt("1424")
		const uintbaM05TG = BigInt("1542")
		const uint256poMYgJJ = await WolfStakingRewardsbCZaND5.stake.call(uintU8k0doe, uintcZITG3V, {from: accounts[1]});
		await WolfStakingRewardsbCZaND5.onlyRewardsDistribution.call({from: accounts[4]});
		const uint2568arMi6 = await WolfStakingRewardsbCZaND5.rewardPerToken.call(uintIjcCf3J, {from: accounts[2]});
		const stringGwZlEFZ = await WolfStakingRewardsbCZaND5.symbol.call({from: accounts[4]});
		const uintJuHbpzc = await WolfStakingRewardsbCZaND5.getReward.call(uintbaM05TG, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressePeRqsP = accounts[5]
		const addresscFQ9zXI = accounts[0]
		const addressJcXKrn = accounts[1]
		const WolfStakingRewardsHKTXeC7 = await WolfStakingRewards.new(addressePeRqsP, addresscFQ9zXI, addressJcXKrn, {from: accounts[2]});
		const uintKvAsCND = BigInt("1349")
		const uintF7Ex6yz = BigInt("792")
		const uintM2H3Etj = BigInt("375")
		const uintF0tyVyq = BigInt("1051")
		const uintSOsWxC = BigInt("1506")
		const uintAVhynf8 = BigInt("1370")
		const uintbEiZ237 = BigInt("1262")
		const uintG2S1i7x = await WolfStakingRewardsHKTXeC7.getReward.call(uintKvAsCND, {from: accounts[4]});
		const uint256Avzogpf = await WolfStakingRewardsHKTXeC7.withdraw.call(uintM2H3Etj, uintF7Ex6yz, {from: accounts[4]});
		const uint256xAiUzHt = await WolfStakingRewardsHKTXeC7.getRewardForDuration.call(uintF0tyVyq, {from: accounts[1]});
		const uint256fUJbrhG = await WolfStakingRewardsHKTXeC7.withdraw.call(uintAVhynf8, uintSOsWxC, {from: accounts[1]});
		const uint256UccFJzm = await WolfStakingRewardsHKTXeC7.lastTimeRewardApplicable.call(uintbEiZ237, {from: accounts[0]});

		await expect(WolfStakingRewardsHKTXeC7.withdraw.call(uintM2H3Etj, uintF7Ex6yz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringf8jIj6g = "kSEkG2nRuLrL4ORSx8AWQE6p476C9wnC6DhInuQ9IxIE1lgZFMuUEzMC1EMJvROszLCPaUGAUllYrTkKVJBA3p1mQFdwftgk"
		const stringngPUKTi = "kiwu5Ed77ywqJfw00oAzbfseb2brUD49X8sk4ejRIMGdka92FXDTHV9DzBH6wm9tWkIU7qxNogSumzaACgBnii8RGHqh76H6yz"
		const uintrXpGyT = BigInt("57")
		const WolfStakingRewardsCqYalVi = await WolfStakingRewards.new(stringf8jIj6g, stringngPUKTi, uintrXpGyT, {from: accounts[2]});
		const uintFnotWAX = BigInt("1547")
		const uintXm2qyMd = BigInt("31")
		const uintlTUUEg = BigInt("291")
		const uintRjjibhp = BigInt("1725")
		const uint256hYG6Lkf = await WolfStakingRewardsCqYalVi.withdraw.call(uintXm2qyMd, uintFnotWAX, {from: accounts[2]});
		const uint256KxehXju = await WolfStakingRewardsCqYalVi.getRewardForDuration.call(uintlTUUEg, {from: accounts[3]});
		const uint256p4aSEhI = await WolfStakingRewardsCqYalVi.totalSupplyPerPool.call(uintRjjibhp, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressNWwMFGp = accounts[5]
		const addressmNHkg3F = accounts[0]
		const addressDgTqZ3c = accounts[1]
		const WolfStakingRewardsHKTXeC7 = await WolfStakingRewards.new(addressNWwMFGp, addressmNHkg3F, addressDgTqZ3c, {from: accounts[2]});
		const uintN2SYGvP = BigInt("377")
		const uintoX0Jr9v = BigInt("1824")
		const uintTJ760I3 = BigInt("1785")
		const uinttGfjSI = BigInt("1382")
		const uint256kufbZ0l = await WolfStakingRewardsHKTXeC7.withdrawRemainingBalance.call(uintoX0Jr9v, uintN2SYGvP, {from: accounts[2]});
		const uint25669OqN0 = await WolfStakingRewardsHKTXeC7.withdraw.call(uinttGfjSI, uintTJ760I3, {from: accounts[0]});
		await WolfStakingRewardsHKTXeC7.nonReentrant.call({from: accounts[4]});

		await expect(WolfStakingRewardsHKTXeC7.withdrawRemainingBalance.call(uintoX0Jr9v, uintN2SYGvP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringKsFL83r = "lhswAJlzMZNmKwpMm7sJXmj4ICqKaGcipyh3xka1RvUuAwozKEFM7"
		const stringaZndzmW = "B2MLeAJ3s536MqnSLXYP2whPvOAhYH"
		const uintVIAMmQ = BigInt("119")
		const WolfStakingRewardspubKLO9 = await WolfStakingRewards.new(stringKsFL83r, stringaZndzmW, uintVIAMmQ, {from: accounts[1]});
		const uintR9OtFK9 = BigInt("1632")
		const uintsIab37y = BigInt("1432")
		const addresss1Y4AF1 = accounts[3]
		const uintzvJ5pJ = BigInt("95")
		const uintPLyRyxE = await WolfStakingRewardspubKLO9.getReward.call(uintR9OtFK9, {from: accounts[2]});
		const addressj6H46rI = await WolfStakingRewardspubKLO9.updateReward.call(addresss1Y4AF1, uintsIab37y, {from: accounts[5]});
		const uint256g0s6xU = await WolfStakingRewardspubKLO9.getRewardForDuration.call(uintzvJ5pJ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringlDiIrP = "ZbFT66WeUma"
		const stringYA74hd1 = "PxLL0JUq1juIJBdwoupYU97XtW1QvQNzN4Js191xwum4zwmRS9dsPUR25reOeP67BIp8Jg2EfL"
		const uint27JR1F = BigInt("242")
		const WolfStakingRewardsysVRHmW = await WolfStakingRewards.new(stringlDiIrP, stringYA74hd1, uint27JR1F, {from: accounts[0]});
		const uintUmJwoCU = BigInt("355")
		const uintOLbYHlm = BigInt("993")
		const uinttsJVUC7 = BigInt("1033")
		const addressCBwJlDZ = accounts[1]
		const uintZZt6x6t = BigInt("162")
		const uintPnKYlsK = BigInt("811")
		const uint256UO8lckS = await WolfStakingRewardsysVRHmW.withdraw.call(uintOLbYHlm, uintUmJwoCU, {from: accounts[5]});
		const addressjFEE80H = await WolfStakingRewardsysVRHmW.updateReward.call(addressCBwJlDZ, uinttsJVUC7, {from: accounts[4]});
		const uint256IP9CxNz = await WolfStakingRewardsysVRHmW.rewardPerToken.call(uintZZt6x6t, {from: accounts[1]});
		const uint256arrayb52FugY = await WolfStakingRewardsysVRHmW.updateNotifyRewardAmount.call(uintPnKYlsK, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const string7Rtot9 = "mkokUY1v7agPXXLzOLJxO3p0jgALAU02DrWDe0UauK7jmJrN0Daw8O7ujOiUnPXo6CSXWRBN"
		const stringQKSvKqk = "CW5jCtr74GckWLI1xVOBhHY29a5gbo"
		const uintqaj7VRB = BigInt("222")
		const WolfStakingRewardsGbqu4hk = await WolfStakingRewards.new(string7Rtot9, stringQKSvKqk, uintqaj7VRB, {from: "0x0000000000000000000000000000000000000001"});
		const uintauuy2C7 = BigInt("556")
		const uint256arrayGSCvWX2 = await WolfStakingRewardsGbqu4hk.updateNotifyRewardAmount.call(uintauuy2C7, {from: accounts[4]});
		const stringO7tGfwi = await WolfStakingRewardsGbqu4hk.symbol.call({from: accounts[4]});
		const stringVThCm6l = await WolfStakingRewardsGbqu4hk.name.call({from: accounts[4]});
		await WolfStakingRewardsGbqu4hk.onlyRewardsDistribution.call({from: accounts[4]});
		const uint8uBfw0Og = await WolfStakingRewardsGbqu4hk.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqEmCgak = "lm1X0dyERB"
		const string9NTQkQ = "FLtbDpbCTDaCtFLfEhT91bSeuntXF6Ahxt4boIMuh9BX42ST6ljQw7D7KUIAO6oqunmio6"
		const uintUNlkaXT = BigInt("78")
		const WolfStakingRewardsdvZdDWV = await WolfStakingRewards.new(stringqEmCgak, string9NTQkQ, uintUNlkaXT, {from: accounts[4]});
		const uintjlIupF6 = BigInt("57")
		const addressfeYIrp6 = accounts[0]
		await WolfStakingRewardsdvZdDWV.onlyOwner.call({from: accounts[3]});
		const uint256ZJnkDrn = await WolfStakingRewardsdvZdDWV.earned.call(addressfeYIrp6, uintjlIupF6, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbVlP6D8 = "cYqNhbIqc7h66TsO9XTwAoxBv1K5HXpZ"
		const stringDQeHeRs = "wbGQ6NAYpPAui2Q8CJimuu9aZPOg"
		const uintoeJCzHc = BigInt("47")
		const WolfStakingRewardsAJU6vj3 = await WolfStakingRewards.new(stringbVlP6D8, stringDQeHeRs, uintoeJCzHc, {from: accounts[1]});
		const uintGzI46rC = BigInt("1187")
		const uintIblOyf = BigInt("734")
		const address8B3Ud4 = accounts[1]
		const uinteDVNGRB = BigInt("81")
		const uintP2RZxn = BigInt("1147")
		const uintzR4hLFu = BigInt("1872")
		const uinteIvwqk0 = BigInt("309")
		const uintTc67i0r = BigInt("1921")
		const addressjZutXZA = "0x0000000000000000000000000000000000000001"
		const uint256KSaVwYc = await WolfStakingRewardsAJU6vj3.rewardPerToken.call(uintGzI46rC, {from: accounts[0]});
		const addresslxl9oeT = await WolfStakingRewardsAJU6vj3.updateReward.call(address8B3Ud4, uintIblOyf, {from: accounts[0]});
		const uint256Z3ag9Ua = await WolfStakingRewardsAJU6vj3.totalSupplyPerPool.call(uinteDVNGRB, {from: accounts[4]});
		const uint256arrayYfs23fU = await WolfStakingRewardsAJU6vj3.updateNotifyRewardAmount.call(uintP2RZxn, {from: accounts[5]});
		const uint256M3rBlxE = await WolfStakingRewardsAJU6vj3.stake.call(uinteIvwqk0, uintzR4hLFu, {from: accounts[0]});
		const uint256iYJwmpb = await WolfStakingRewardsAJU6vj3.balanceOfPerPool.call(addressjZutXZA, uintTc67i0r, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbfUOuu = "FGek7dslMFgogQ8w0njfnC83wvoXseuLyuMqFWuupy9VKZGuiLzhWVi"
		const stringbHeC9j = "Nj"
		const uintR0GFXL1 = BigInt("98")
		const WolfStakingRewardsMH9fWJH = await WolfStakingRewards.new(stringbfUOuu, stringbHeC9j, uintR0GFXL1, {from: "0x0000000000000000000000000000000000000001"});
		const uintKrDRoDa = BigInt("1773")
		const uintBHpu0kz = BigInt("613")
		const addressJejEnBW = accounts[0]
		await WolfStakingRewardsMH9fWJH.nonReentrant.call({from: accounts[2]});
		const stringNX8alja = await WolfStakingRewardsMH9fWJH.symbol.call({from: accounts[1]});
		const uint2564Cx26E = await WolfStakingRewardsMH9fWJH.lastTimeRewardApplicable.call(uintKrDRoDa, {from: accounts[0]});
		const addressS7VcCq4 = await WolfStakingRewardsMH9fWJH.updateReward.call(addressJejEnBW, uintBHpu0kz, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringa4UMd90 = "sV5qA4Zl1F1DxxAvbJxRwX0UiqrZ4kbpfQbAh7bma5OjLQToCbRJ0ZTUF8Wycxrbs9AmHUKM5hHKKlIrEd"
		const stringyuKNWOH = "2IhSbhR4isNbbgQIYN2aPQyMQeLxsKagUXMEpC5uoUg7p8"
		const uintzN2Hojq = BigInt("59")
		const WolfStakingRewardsnsDo7YV = await WolfStakingRewards.new(stringa4UMd90, stringyuKNWOH, uintzN2Hojq, {from: accounts[4]});
		const uintoJfbS9A = BigInt("693")
		const uintlc0RAPq = BigInt("693")
		const uintGV6hjQe = BigInt("646")
		await WolfStakingRewardsnsDo7YV.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayICei3o8 = await WolfStakingRewardsnsDo7YV.updateNotifyRewardAmount.call(uintoJfbS9A, {from: accounts[2]});
		const uint8TGPx4AO = await WolfStakingRewardsnsDo7YV.decimals.call({from: accounts[4]});
		const uintqoGT9W9 = await WolfStakingRewardsnsDo7YV.getReward.call(uintlc0RAPq, {from: accounts[4]});
		const uint8xVYIxcA = await WolfStakingRewardsnsDo7YV.decimals.call({from: accounts[5]});
		const uint256chCFUzH = await WolfStakingRewardsnsDo7YV.rewardPerToken.call(uintGV6hjQe, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMMNrFEN = "iUFnXhVLVCFp2ju57UPuhW6LVyyysqaPKqfB"
		const stringgjfS9Ku = "hUUpBf5x0K5YIoDIJYCugz39COxvhs5RHfkB6vy7gmQvovc1PQFhSZRVRysMROUc82UzLEAQtd2eyJ0R9"
		const uintH8yqO6 = BigInt("254")
		const WolfStakingRewardsUMUqiEu = await WolfStakingRewards.new(stringMMNrFEN, stringgjfS9Ku, uintH8yqO6, {from: accounts[2]});
		const uint1uEgIa = BigInt("653")
		const stringwCrroc6 = await WolfStakingRewardsUMUqiEu.name.call({from: accounts[0]});
		const string4d5SiS = await WolfStakingRewardsUMUqiEu.symbol.call({from: accounts[0]});
		const uint256arrayQVMBrBL = await WolfStakingRewardsUMUqiEu.updateNotifyRewardAmount.call(uint1uEgIa, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzxPsqbq = "SEmYqmhLlKGbVlm88pqW5JqkB8AFXlFO19rXlO5Gwza9Ro4ucsVaMuk8M0U7fr2MXCreYad4pFObilMnJ3B5YQK33vhB6xH"
		const stringUv0Si7J = "abwjIEbR3eZ83XqiUeMDHAPVdgmYcHheyIxdIkOC3z3848UhjKa7ndQlUJBxrDALt4VylAhQCMbpsAP5K"
		const uintN2r1Vnh = BigInt("146")
		const WolfStakingRewardsBCFPKm = await WolfStakingRewards.new(stringzxPsqbq, stringUv0Si7J, uintN2r1Vnh, {from: accounts[3]});
		const uinteNo4lGP = BigInt("1668")
		const address6BiSvV = accounts[3]
		const uintWF73jun = BigInt("761")
		const addresseBWeEX = accounts[0]
		const uint256nQOtecT = await WolfStakingRewardsBCFPKm.earned.call(address6BiSvV, uinteNo4lGP, {from: accounts[2]});
		const addressrsHJlq3 = await WolfStakingRewardsBCFPKm.updateReward.call(addresseBWeEX, uintWF73jun, {from: "0x0000000000000000000000000000000000000001"});
		const uint8n9FMRYy = await WolfStakingRewardsBCFPKm.decimals.call({from: accounts[1]});
		await WolfStakingRewardsBCFPKm.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfoGrPFG = "l6xMAgeYbXSDdLgY4oV86uyJDjRSlQCYxAwlGq1lGejzjtEoAPOeq0gaH3wHNSDlHviDKv9FsegvzRXxcByf6x3JB6OrG4lIxG"
		const stringZdWrGNS = "Jgb27vmDgQ5i8imha48r4zKRyGXoUWJsrNokZzJQ8cjTr5FcV4Jn"
		const uintByi29d = BigInt("68")
		const WolfStakingRewardsoarcIf0 = await WolfStakingRewards.new(stringfoGrPFG, stringZdWrGNS, uintByi29d, {from: accounts[2]});
		const uintruaBw2C = BigInt("2")
		const addressOnFRs5Q = accounts[0]
		const uintSmbrvE2 = BigInt("1456")
		const addressZy7rCGD = await WolfStakingRewardsoarcIf0.updateReward.call(addressOnFRs5Q, uintruaBw2C, {from: accounts[0]});
		const uint256cySOtl = await WolfStakingRewardsoarcIf0.exit.call(uintSmbrvE2, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringad8PTVU = "gLsYrvMs9R5g4syiTyCfGSpncwJTxLumvYYD1kvtWxN3Fjww8y5lL563c2oxIqEIkiXhVLqDF6BO56ijU9s"
		const stringl22u9LR = "83QNWsITODd7pxKl68TOc"
		const uintW5oiTz6 = BigInt("222")
		const WolfStakingRewardsAkImzo9 = await WolfStakingRewards.new(stringad8PTVU, stringl22u9LR, uintW5oiTz6, {from: accounts[2]});
		const uintHCfYZeY = BigInt("1495")
		const addressqQCo3tu = accounts[2]
		const uintgWO9oO8 = BigInt("500")
		const uintiXRW3Dm = BigInt("1481")
		const uintuuinwmI = BigInt("774")
		const stringS8O1CB = await WolfStakingRewardsAkImzo9.symbol.call({from: accounts[4]});
		const uint256iwBArn2 = await WolfStakingRewardsAkImzo9.earned.call(addressqQCo3tu, uintHCfYZeY, {from: accounts[2]});
		const uint256GpipzYJ = await WolfStakingRewardsAkImzo9.rewardPerToken.call(uintgWO9oO8, {from: accounts[1]});
		const uint256nKwMzwP = await WolfStakingRewardsAkImzo9.withdraw.call(uintuuinwmI, uintiXRW3Dm, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQ0WFVxJ = "H4vSZwHJhEaykndMBshcA7ccoQE5"
		const stringaz1zCg = "G6yXQAgVYCcSIGsGEGpyz2npOcK04D"
		const uintGzQRGy0 = BigInt("184")
		const WolfStakingRewardsYgAdmF = await WolfStakingRewards.new(stringQ0WFVxJ, stringaz1zCg, uintGzQRGy0, {from: accounts[4]});
		const uintdaVxgjs = BigInt("1126")
		const addressXgIrFan = accounts[5]
		const uintiij0BIi = BigInt("574")
		const addressQD17rKq = "0x0000000000000000000000000000000000000001"
		const uintP1ceta = BigInt("736")
		const uintmo5d1CQ = BigInt("158")
		const uintNhKzImo = BigInt("1939")
		const addressjvVzqHU = accounts[0]
		const uintdvzvP8 = BigInt("1264")
		const addressUfhpdif = await WolfStakingRewardsYgAdmF.updateReward.call(addressXgIrFan, uintdaVxgjs, {from: accounts[3]});
		const uint256zhE3Ad3 = await WolfStakingRewardsYgAdmF.balanceOfPerPool.call(addressQD17rKq, uintiij0BIi, {from: accounts[0]});
		const uint256qVPyn11 = await WolfStakingRewardsYgAdmF.stake.call(uintmo5d1CQ, uintP1ceta, {from: accounts[2]});
		const uint256TxYNKS0 = await WolfStakingRewardsYgAdmF.balanceOfPerPool.call(addressjvVzqHU, uintNhKzImo, {from: accounts[2]});
		const uint256QuaSuNL = await WolfStakingRewardsYgAdmF.lastTimeRewardApplicable.call(uintdvzvP8, {from: accounts[0]});
		const stringUGmRMz9 = await WolfStakingRewardsYgAdmF.name.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqinB35Y = "C47YpyaMv0Gtusi8iJGqNmpyGL9LNIGFg3qGPtoQLHOW1i555WgOqK4yKmHBfUKYuht6tNX2IhBpC0yqYA9JAfxjoY"
		const stringiSCAMJ4 = "LrtIrHybeE3Iddz1rYk20F7xei40KWaE2Fxx3wWsYaCGaR3x9QECQM4FLc5C"
		const uintdHnD8o = BigInt("49")
		const WolfStakingRewardsES0f8ao = await WolfStakingRewards.new(stringqinB35Y, stringiSCAMJ4, uintdHnD8o, {from: accounts[4]});
		const uintE3nSdRM = BigInt("651")
		const uinte0bu7RG = BigInt("237")
		const uintK9P60oN = BigInt("312")
		const uinthrmt5VZ = BigInt("1192")
		const addressEoO2ji = accounts[2]
		const uint256hrE7q1r = await WolfStakingRewardsES0f8ao.rewardPerToken.call(uintE3nSdRM, {from: accounts[0]});
		const uintydLLAg = await WolfStakingRewardsES0f8ao.getReward.call(uinte0bu7RG, {from: accounts[1]});
		const uint256arrayBxxaaYT = await WolfStakingRewardsES0f8ao.updateNotifyRewardAmount.call(uintK9P60oN, {from: accounts[0]});
		const uint256yPGkvmk = await WolfStakingRewardsES0f8ao.earned.call(addressEoO2ji, uinthrmt5VZ, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhUgKJ9K = "yp957D6xMPnmVRojz5929m1v6gOIoKH5ejm9ONPaL8CBTc3YSLKUIZ3c0AYsHpG8NXXBjVIaG3T42NnyWQBI3bFJFpYN"
		const stringbRZNCxh = "jzBmILYnxqHBmngdGiF9xx11UoIB9xcGrq2udY63unTbiDOhU1sKRHwNxOdCNLeQY1E4Hf86mGFQFBC9mI7RCPd"
		const uintjKVM1IC = BigInt("10")
		const WolfStakingRewardsUz5MdHU = await WolfStakingRewards.new(stringhUgKJ9K, stringbRZNCxh, uintjKVM1IC, {from: accounts[2]});
		const uinto203Gsu = BigInt("172")
		const addressAGOGTqv = accounts[3]
		const uintK1glOoy = BigInt("1198")
		const uintjZarnWl = BigInt("1307")
		const uintWBYSgbO = BigInt("1965")
		const uint256zrF4MLk = await WolfStakingRewardsUz5MdHU.earned.call(addressAGOGTqv, uinto203Gsu, {from: accounts[3]});
		const uint256u9IIOHE = await WolfStakingRewardsUz5MdHU.getRewardForDuration.call(uintK1glOoy, {from: accounts[4]});
		await WolfStakingRewardsUz5MdHU.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256y7GZulP = await WolfStakingRewardsUz5MdHU.totalSupplyPerPool.call(uintjZarnWl, {from: accounts[4]});
		const uint256TqozT4Z = await WolfStakingRewardsUz5MdHU.lastTimeRewardApplicable.call(uintWBYSgbO, {from: accounts[0]});
		await WolfStakingRewardsUz5MdHU.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpfJ10Ty = "OkM0Wl2hCg9DUkTyQNiyYFQRmX4CEWRRdHO1JXvfK8r2uKo1fAOBRfcjDHbQZ2gRcHolUIMMmzWtrQtcUft"
		const stringCR51nT = "MU9DQDQinjJN2hb2vIWrL6wRjSL6NIe"
		const uintp9Sp54Q = BigInt("211")
		const WolfStakingRewardsqaK01g = await WolfStakingRewards.new(stringpfJ10Ty, stringCR51nT, uintp9Sp54Q, {from: accounts[0]});
		const uintwSiFloG = BigInt("482")
		const addressTSkmCEv = accounts[2]
		const uint7whn9P = BigInt("644")
		const uintlT1RMjW = BigInt("684")
		const uintpqpyNrh = BigInt("1286")
		const uintnVHteKf = BigInt("962")
		const addresshG1KMfG = await WolfStakingRewardsqaK01g.updateReward.call(addressTSkmCEv, uintwSiFloG, {from: accounts[2]});
		const uint256ifDvE67 = await WolfStakingRewardsqaK01g.withdrawRemainingBalance.call(uintlT1RMjW, uint7whn9P, {from: accounts[4]});
		const uint256VpkoOuY = await WolfStakingRewardsqaK01g.stake.call(uintnVHteKf, uintpqpyNrh, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuT5rOpv = "rlk3jZYc3G2kNiY6tI8NlIQGto6bAjVXOw3VYEveWIcVNnuR1BhcpEaHoWLG4kBdYYp"
		const stringkoX3nUT = ""
		const uintdA2KzVc = BigInt("75")
		const WolfStakingRewardsJGMpSGP = await WolfStakingRewards.new(stringuT5rOpv, stringkoX3nUT, uintdA2KzVc, {from: "0x0000000000000000000000000000000000000001"});
		const uintgH2Pgm4 = BigInt("1680")
		const uintxx4jamN = BigInt("749")
		const addressCa2c8G6 = accounts[3]
		const uintlH1YdYS = BigInt("1136")
		const uint256XBABCsC = await WolfStakingRewardsJGMpSGP.getRewardForDuration.call(uintgH2Pgm4, {from: accounts[5]});
		const uint8KH2eTH = await WolfStakingRewardsJGMpSGP.decimals.call({from: accounts[2]});
		const addressY4elmpI = await WolfStakingRewardsJGMpSGP.updateReward.call(addressCa2c8G6, uintxx4jamN, {from: accounts[1]});
		const uint256Js2n1sG = await WolfStakingRewardsJGMpSGP.rewardPerToken.call(uintlH1YdYS, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoKTYPMs = "79kG"
		const stringC3pfqi = "soofOAsyvWFY5G9g3Ji1zbRjWgR8LdboDIhikHHUJv3vmGC6MSescXBqfz"
		const uintPsFornZ = BigInt("192")
		const WolfStakingRewardsVtlkGmx = await WolfStakingRewards.new(stringoKTYPMs, stringC3pfqi, uintPsFornZ, {from: accounts[4]});
		const uintIJ56NsF = BigInt("1846")
		const uint9xPfxz = BigInt("1128")
		const uintDiACn9s = BigInt("356")
		const addressOgxmMQN = accounts[4]
		const uintjLLcDIO = BigInt("1166")
		const uint256odpH4cf = await WolfStakingRewardsVtlkGmx.totalSupplyPerPool.call(uintIJ56NsF, {from: accounts[3]});
		const uint256arrayqB9Q5gN = await WolfStakingRewardsVtlkGmx.updateNotifyRewardAmount.call(uint9xPfxz, {from: accounts[4]});
		const uint256tJCfvR3 = await WolfStakingRewardsVtlkGmx.balanceOfPerPool.call(addressOgxmMQN, uintDiACn9s, {from: accounts[0]});
		const uint256TuDWXRe = await WolfStakingRewardsVtlkGmx.rewardPerToken.call(uintjLLcDIO, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhe6NTaI = "2iQwcPjWnca2GeaqDKHkBaCf5hM3d2LrdFOzf1JJLeuksUnoSQGdsxkY"
		const stringORtCCn = "Q1TWfuRKskSYFKgMsytf6Vgn6PSgEmk3LBOefDiUN8qIwQDoqyW0kUhoCK1Dq62XomCBvduMolY4kCzqyowDM4Gin"
		const uintm6xTvDa = BigInt("229")
		const WolfStakingRewardsmLU6P1R = await WolfStakingRewards.new(stringhe6NTaI, stringORtCCn, uintm6xTvDa, {from: accounts[2]});
		const uintJwNxbJO = BigInt("1867")
		const uintj6KrMQ2 = BigInt("1413")
		const uintqkkLMQS = BigInt("689")
		const uintifOYJZ = BigInt("587")
		const uint256Lgz8VLC = await WolfStakingRewardsmLU6P1R.withdraw.call(uintj6KrMQ2, uintJwNxbJO, {from: accounts[1]});
		const uint256BK3nG9I = await WolfStakingRewardsmLU6P1R.exit.call(uintqkkLMQS, {from: accounts[2]});
		const uint256ETwl7C2 = await WolfStakingRewardsmLU6P1R.totalSupplyPerPool.call(uintifOYJZ, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeptHFYz = "MbJ9PqTt5MOSwwLP"
		const stringYMAZXH = "wtgpDVjpRvAC1CUzVgsmpWnbtvsr8Cfy35Nno5MMetNRcs"
		const uinthY3HbwX = BigInt("244")
		const WolfStakingRewardsou1lkfC = await WolfStakingRewards.new(stringeptHFYz, stringYMAZXH, uinthY3HbwX, {from: accounts[0]});
		const uintE66v9uY = BigInt("1165")
		await WolfStakingRewardsou1lkfC.nonReentrant.call({from: accounts[0]});
		const uint8gmT2Phd = await WolfStakingRewardsou1lkfC.decimals.call({from: accounts[3]});
		const uint256kZblEc = await WolfStakingRewardsou1lkfC.rewardPerToken.call(uintE66v9uY, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsou1lkfC.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCuc0AY2 = "Hfz7J9qydTHvP1bC70El13PSdiSuFYtID"
		const stringjyCpHsx = "HL2"
		const uintjdKwYv2 = BigInt("21")
		const WolfStakingRewardsfYFaB9E = await WolfStakingRewards.new(stringCuc0AY2, stringjyCpHsx, uintjdKwYv2, {from: accounts[4]});
		const uintW0joToN = BigInt("927")
		const uintoWAxGfs = BigInt("1575")
		const addressI8YhuDj = accounts[1]
		const stringfIZOG97 = await WolfStakingRewardsfYFaB9E.name.call({from: accounts[3]});
		const stringB4IDIVS = await WolfStakingRewardsfYFaB9E.name.call({from: accounts[4]});
		const uint256YMIdrqS = await WolfStakingRewardsfYFaB9E.getRewardForDuration.call(uintW0joToN, {from: "0x0000000000000000000000000000000000000001"});
		const stringIJWVD4 = await WolfStakingRewardsfYFaB9E.symbol.call({from: accounts[1]});
		const addressZnPl2C8 = await WolfStakingRewardsfYFaB9E.updateReward.call(addressI8YhuDj, uintoWAxGfs, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFBcv28K = "lcMmIHBxGa9FGQ9QF7JoJeDYjKBnaR3xFqenMDQNChTakIy8rIKwOC4ETftBw"
		const stringiuMeMS9 = "qUfTUxC8SfmpYNhdooZ5fefEiouKn5C3O5tqlgnm9of7gGhXJwdYaNWuR"
		const uintD3Ce8H = BigInt("48")
		const WolfStakingRewardsENpX0ub = await WolfStakingRewards.new(stringFBcv28K, stringiuMeMS9, uintD3Ce8H, {from: accounts[3]});
		const uintY4kFk5z = BigInt("1465")
		await WolfStakingRewardsENpX0ub.onlyOwner.call({from: accounts[1]});
		const uint256nKEZ3Pz = await WolfStakingRewardsENpX0ub.rewardPerToken.call(uintY4kFk5z, {from: "0x0000000000000000000000000000000000000001"});
		const stringe14kmor = await WolfStakingRewardsENpX0ub.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeyGpsv = "hYxiGMTDUTFrfg"
		const stringCn2Rqto = "j4QL21gxltTiwwSkY5S5wpECrMa1aBPmUk"
		const uintt3bPoHA = BigInt("16")
		const WolfStakingRewardss6kpN1c = await WolfStakingRewards.new(stringeyGpsv, stringCn2Rqto, uintt3bPoHA, {from: accounts[2]});
		const uintJPvX0R = BigInt("1957")
		const uintF7CTln = BigInt("1512")
		const addressoXwbXG = accounts[1]
		const uintbZ1QMf = BigInt("207")
		const addressh4SKjvP = accounts[4]
		const uint256arrayY1GAe5C = await WolfStakingRewardss6kpN1c.updateNotifyRewardAmount.call(uintJPvX0R, {from: accounts[0]});
		const addresso5lHSj8 = await WolfStakingRewardss6kpN1c.updateReward.call(addressoXwbXG, uintF7CTln, {from: accounts[4]});
		const uint256csH5wST = await WolfStakingRewardss6kpN1c.earned.call(addressh4SKjvP, uintbZ1QMf, {from: accounts[5]});
		const stringGweItcS = await WolfStakingRewardss6kpN1c.symbol.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringe3NUyME = "amQ9LSRWk"
		const stringiCV8sth = "FcYJ2WyERF"
		const uintXi7xKOb = BigInt("62")
		const WolfStakingRewardsLgYXcws = await WolfStakingRewards.new(stringe3NUyME, stringiCV8sth, uintXi7xKOb, {from: accounts[1]});
		const uintQFSC8cc = BigInt("1893")
		const uintUiIkg3h = BigInt("1444")
		await WolfStakingRewardsLgYXcws.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256qWPXUej = await WolfStakingRewardsLgYXcws.exit.call(uintQFSC8cc, {from: accounts[0]});
		await WolfStakingRewardsLgYXcws.onlyOwner.call({from: accounts[5]});
		const uint256AXmP2w9 = await WolfStakingRewardsLgYXcws.lastTimeRewardApplicable.call(uintUiIkg3h, {from: "0x0000000000000000000000000000000000000001"});
		const uint8Hh27RCw = await WolfStakingRewardsLgYXcws.decimals.call({from: accounts[1]});
		const stringg44ITtM = await WolfStakingRewardsLgYXcws.name.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvSxMvTX = "2i7nLLbYijSjARBL3ysvkEXYbxRk6WZcbeR6ZVcl5JEN3AfbuBW"
		const stringXLkixKo = "SdUPwgi9iDt"
		const uintbzabOxg = BigInt("102")
		const WolfStakingRewardsPflme76 = await WolfStakingRewards.new(stringvSxMvTX, stringXLkixKo, uintbzabOxg, {from: accounts[4]});
		const uintQJLL9fA = BigInt("913")
		const uintbCOS0j2 = BigInt("624")
		const uintcgUu8TT = BigInt("335")
		const uintX7ChiN = BigInt("1882")
		const uint256zNp7YQP = await WolfStakingRewardsPflme76.withdrawRemainingBalance.call(uintbCOS0j2, uintQJLL9fA, {from: accounts[0]});
		const uint8WUCJzq1 = await WolfStakingRewardsPflme76.decimals.call({from: accounts[4]});
		const uint8fKC4oVH = await WolfStakingRewardsPflme76.decimals.call({from: accounts[2]});
		const uintjXrclq1 = await WolfStakingRewardsPflme76.getReward.call(uintcgUu8TT, {from: accounts[4]});
		const uint256A551XpR = await WolfStakingRewardsPflme76.lastTimeRewardApplicable.call(uintX7ChiN, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQxO63bd = "A4WIBSaHGqq"
		const stringod4zc8 = "4kL64zmjxzu3wJTIG3LMU9Ra0KIQX4BSxCoZ"
		const uintg6sFhWX = BigInt("203")
		const WolfStakingRewardsNS19qpb = await WolfStakingRewards.new(stringQxO63bd, stringod4zc8, uintg6sFhWX, {from: accounts[0]});
		const uintkKXbseY = BigInt("2005")
		const uintGIpPuxu = BigInt("1787")
		const uintJDGSHha = BigInt("56")
		const uintTVT85sj = BigInt("720")
		const uintqgwqjNw = BigInt("1936")
		const uintc1I3qap = BigInt("896")
		const uintG33h1Pa = BigInt("1412")
		const uint256yhqhKMr = await WolfStakingRewardsNS19qpb.totalSupplyPerPool.call(uintkKXbseY, {from: accounts[0]});
		const uint256Sd3cQ57 = await WolfStakingRewardsNS19qpb.stake.call(uintJDGSHha, uintGIpPuxu, {from: accounts[3]});
		const uint256arrayL6NeO0R = await WolfStakingRewardsNS19qpb.updateNotifyRewardAmount.call(uintTVT85sj, {from: accounts[3]});
		const uint2560MPImn = await WolfStakingRewardsNS19qpb.withdrawRemainingBalance.call(uintc1I3qap, uintqgwqjNw, {from: accounts[1]});
		const uint256arrayiHmtHPD = await WolfStakingRewardsNS19qpb.updateNotifyRewardAmount.call(uintG33h1Pa, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPYNZlQx = "gb5F1963ufPX82hKYiPTsmMgVjhL4fIscsRQS6DwvExfCmckdk"
		const stringpLX4rvI = "ff"
		const uintnmDq9Zs = BigInt("198")
		const WolfStakingRewardsSA0OJlN = await WolfStakingRewards.new(stringPYNZlQx, stringpLX4rvI, uintnmDq9Zs, {from: accounts[5]});
		const uintWWse6Us = BigInt("1386")
		const addressnuBch3R = accounts[4]
		const uintnPij2lB = BigInt("1119")
		const uint256mjYCSqO = await WolfStakingRewardsSA0OJlN.earned.call(addressnuBch3R, uintWWse6Us, {from: accounts[0]});
		await WolfStakingRewardsSA0OJlN.onlyRewardsDistribution.call({from: accounts[3]});
		const uint8Dz7RW7T = await WolfStakingRewardsSA0OJlN.decimals.call({from: accounts[5]});
		const uint256SaaGVRj = await WolfStakingRewardsSA0OJlN.getRewardForDuration.call(uintnPij2lB, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkSrGn0o = "AOWBQE2ll6NIK5GeKJV"
		const stringo4dX7Vx = "JIsICHBmumbN9YtQhQ4UsPOjAYUCfuoWF"
		const uintAP6qmFG = BigInt("73")
		const WolfStakingRewardsiiRDcsi = await WolfStakingRewards.new(stringkSrGn0o, stringo4dX7Vx, uintAP6qmFG, {from: accounts[2]});
		const uintCQlRamC = BigInt("1392")
		const addressQirEpNa = accounts[2]
		const uintR0NyUkL = BigInt("615")
		const addressK1HrT5F = accounts[4]
		const uintViipvAB = BigInt("1312")
		const uintVGV6hyg = BigInt("886")
		const uint256Vw3B5i4 = await WolfStakingRewardsiiRDcsi.earned.call(addressQirEpNa, uintCQlRamC, {from: accounts[4]});
		const stringPHz97HD = await WolfStakingRewardsiiRDcsi.name.call({from: accounts[4]});
		const addressofAJFx5 = await WolfStakingRewardsiiRDcsi.updateReward.call(addressK1HrT5F, uintR0NyUkL, {from: accounts[0]});
		const uint256xpOxH0n = await WolfStakingRewardsiiRDcsi.exit.call(uintViipvAB, {from: accounts[4]});
		const uint256v94Sm3v = await WolfStakingRewardsiiRDcsi.totalSupplyPerPool.call(uintVGV6hyg, {from: accounts[3]});
		const uint8F3K2wv = await WolfStakingRewardsiiRDcsi.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeTyGbi1 = "fGN8P1QGXSGwuEMjUyoeSYXChOAt3Jex7AIvTEQB4jNNSQsNEtTAnIXvosTJ1lyABbwoQYyFosVdAiJge"
		const stringOd8KEo = "ZJUfkLRNQhvTW1AangKjozBx2UQVpBfD44tGST7lEDsqzjaiWn92wiG"
		const uintgHf8td = BigInt("181")
		const WolfStakingRewardsY1Ix1He = await WolfStakingRewards.new(stringeTyGbi1, stringOd8KEo, uintgHf8td, {from: accounts[2]});
		const uintYuIGzpf = BigInt("1443")
		const addressclaIN2C = accounts[4]
		const uintngB28He = BigInt("254")
		const uintDPmVE7 = BigInt("1378")
		const uintZHMhpj4 = BigInt("437")
		const uintIy4bd8 = BigInt("1136")
		await WolfStakingRewardsY1Ix1He.nonReentrant.call({from: accounts[2]});
		const uint256own4ZME = await WolfStakingRewardsY1Ix1He.earned.call(addressclaIN2C, uintYuIGzpf, {from: accounts[1]});
		const uint256arrayIxSQycG = await WolfStakingRewardsY1Ix1He.updateNotifyRewardAmount.call(uintngB28He, {from: accounts[5]});
		const uint256FDXaCjY = await WolfStakingRewardsY1Ix1He.withdraw.call(uintZHMhpj4, uintDPmVE7, {from: accounts[3]});
		const uint256QXt5USr = await WolfStakingRewardsY1Ix1He.getRewardForDuration.call(uintIy4bd8, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringAgg8f46 = "rAYgVgCRcqrv"
		const stringdQUtc5I = "xYTiZijAX5cvfnNNpbLc1imKHJFc"
		const uintM03GKjD = BigInt("35")
		const WolfStakingRewardsYTRzWOK = await WolfStakingRewards.new(stringAgg8f46, stringdQUtc5I, uintM03GKjD, {from: accounts[2]});
		const uintenGxXdR = BigInt("1454")
		const uintImloUz0 = BigInt("1775")
		const uintHTEQLF = BigInt("193")
		const uintTk18epg = BigInt("369")
		const uint256arrayPUZdzwq = await WolfStakingRewardsYTRzWOK.updateNotifyRewardAmount.call(uintenGxXdR, {from: accounts[0]});
		const uint256B06AOp4 = await WolfStakingRewardsYTRzWOK.withdrawRemainingBalance.call(uintHTEQLF, uintImloUz0, {from: accounts[1]});
		const uintpPnmvIN = await WolfStakingRewardsYTRzWOK.getReward.call(uintTk18epg, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeCeWk3O = "xYs"
		const strings2IxxIR = "CbytGGzhtNOBVQ2atcbyKDiWLjVETRdbolyafyEokVQ5ggPIPTKzoh2VlhoyOo02MLYgRbQJSoHWcX25ZQffb6mc"
		const uintmQBadpV = BigInt("22")
		const WolfStakingRewardsUoTJQH = await WolfStakingRewards.new(stringeCeWk3O, strings2IxxIR, uintmQBadpV, {from: accounts[0]});
		const uinti5eCw9q = BigInt("55")
		const uinti3FB0hI = BigInt("1545")
		const uintWcOKt3Z = BigInt("1616")
		const uintBjcS59D = BigInt("514")
		await WolfStakingRewardsUoTJQH.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsUoTJQH.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256BqvGOz5 = await WolfStakingRewardsUoTJQH.rewardPerToken.call(uinti5eCw9q, {from: accounts[3]});
		const uint256Ul8HU9H = await WolfStakingRewardsUoTJQH.withdrawRemainingBalance.call(uintWcOKt3Z, uinti3FB0hI, {from: accounts[1]});
		const uint256hdDC0Pa = await WolfStakingRewardsUoTJQH.exit.call(uintBjcS59D, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVlqhcsk = "F"
		const stringExeI0Zy = "mLN8cQTPDkXkbOcIPOjEAMmSfxVCOzP1TcbCKAqaeyWUeNUUaq"
		const uintn8rAUas = BigInt("24")
		const WolfStakingRewardsMEiM4BW = await WolfStakingRewards.new(stringVlqhcsk, stringExeI0Zy, uintn8rAUas, {from: accounts[4]});
		const uintlI1IMJg = BigInt("163")
		const addressLxwnqNW = accounts[0]
		const uintcYxIV1D = BigInt("1825")
		const uintwcDhQMh = BigInt("522")
		const uintn1sceZu = BigInt("261")
		const uintUq5JB66 = BigInt("329")
		const addressIEzQyJ1 = accounts[1]
		const uint256d9E4Qs = await WolfStakingRewardsMEiM4BW.earned.call(addressLxwnqNW, uintlI1IMJg, {from: accounts[3]});
		const uint256tQPQGcU = await WolfStakingRewardsMEiM4BW.totalSupplyPerPool.call(uintcYxIV1D, {from: accounts[2]});
		const uint256xwbHiYN = await WolfStakingRewardsMEiM4BW.withdraw.call(uintn1sceZu, uintwcDhQMh, {from: accounts[1]});
		const addressgxk8eEF = await WolfStakingRewardsMEiM4BW.updateReward.call(addressIEzQyJ1, uintUq5JB66, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringgpDEzBy = "JMDUQtcduWSNM3doEKdazcHHp9LxRm"
		const stringwIGeSiZ = "acHDHGPquQHQWICuBxmqRbjZqFBzie759ciS5Ea3YPzn"
		const uintSBd1K2n = BigInt("254")
		const WolfStakingRewardsMzERNdX = await WolfStakingRewards.new(stringgpDEzBy, stringwIGeSiZ, uintSBd1K2n, {from: accounts[4]});
		const uintMgD9f6 = BigInt("1905")
		const uintPF8l5bl = BigInt("978")
		const uintP4haR3M = BigInt("1291")
		const uint256kcLf8p0 = await WolfStakingRewardsMzERNdX.totalSupplyPerPool.call(uintMgD9f6, {from: accounts[0]});
		const uintQkEvUOk = await WolfStakingRewardsMzERNdX.getReward.call(uintPF8l5bl, {from: accounts[0]});
		const uintIiUBwDE = await WolfStakingRewardsMzERNdX.getReward.call(uintP4haR3M, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmDcmIzs = "tvv9bb7BvtvP5ALfIdRvBlimO2e2MpRqQ1IRDm9dKw5Ts"
		const stringjDsTtuB = "GR5lOwKCxmSrrnk5ovVwissNNqL1Vte0RgkUWGrEBlTVFLTm3RtbjuLKANSDGgO"
		const uinty4dTKcp = BigInt("216")
		const WolfStakingRewardsL3nLUP5 = await WolfStakingRewards.new(stringmDcmIzs, stringjDsTtuB, uinty4dTKcp, {from: accounts[2]});
		const uintve5xg3 = BigInt("864")
		const uinteTnq7M = BigInt("1879")
		const addressku7tjRS = accounts[0]
		const uint256AJuXEKN = await WolfStakingRewardsL3nLUP5.totalSupplyPerPool.call(uintve5xg3, {from: accounts[4]});
		const uint256DRdqgqm = await WolfStakingRewardsL3nLUP5.earned.call(addressku7tjRS, uinteTnq7M, {from: accounts[5]});
		await WolfStakingRewardsL3nLUP5.onlyOwner.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringo4PVmlm = "uTuOzJwtE7rwUgD0nm7z4ltScNEPDYpZ"
		const stringJebKDPg = "ppr0etHBC4cDKQ7ijxnFmU1m2k5VAwhtx6eRabmBLFcaq3fSY9x1FNAV"
		const uintNDp1BPr = BigInt("10")
		const WolfStakingRewardsKSD3TYH = await WolfStakingRewards.new(stringo4PVmlm, stringJebKDPg, uintNDp1BPr, {from: accounts[1]});
		const uintbXBiLgn = BigInt("1092")
		await WolfStakingRewardsKSD3TYH.nonReentrant.call({from: accounts[4]});
		const uint256wJkPi7E = await WolfStakingRewardsKSD3TYH.getRewardForDuration.call(uintbXBiLgn, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdCKGQym = "bMDEK5oM2PaRgAKN5um3sTTTc3tj0hH9Hvmj39hmAO9KF"
		const stringOxjUJop = "lv3t4uBrkvVO6dJv8"
		const uintxP7E0k3 = BigInt("35")
		const WolfStakingRewardsApqqLP = await WolfStakingRewards.new(stringdCKGQym, stringOxjUJop, uintxP7E0k3, {from: accounts[4]});
		const uintJ5IL96T = BigInt("1189")
		const uintO1cN46Q = BigInt("21")
		const uint256arrayeMOQ1K7 = await WolfStakingRewardsApqqLP.updateNotifyRewardAmount.call(uintJ5IL96T, {from: accounts[4]});
		const uint256DctPtsc = await WolfStakingRewardsApqqLP.totalSupplyPerPool.call(uintO1cN46Q, {from: accounts[3]});
		await WolfStakingRewardsApqqLP.nonReentrant.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringm2AtIBj = "FbC4sl7PBsDjDdja1tEjXseutDtv3Yieut3Wj6scNdmJhpnjuRgmrp"
		const stringJ9c5b77 = "QRpgmnWdlfKJM7K4NCkhg9ghvjukC5cNCOqR76A7Pkj5WjcuNdNgdIt1tIUmDis3vQJuNn2WZgzYU5g1ZLMxnsBLoQ4fJJuq8"
		const uintpdozA2L = BigInt("37")
		const WolfStakingRewardswItN5o = await WolfStakingRewards.new(stringm2AtIBj, stringJ9c5b77, uintpdozA2L, {from: accounts[4]});
		const uintI1yzMkq = BigInt("86")
		const uintBL6C9Xm = BigInt("1048")
		const uintYgrSdHX = BigInt("592")
		const uintSv6bj50 = BigInt("1002")
		const uintEUsAYq4 = BigInt("1176")
		const uintUTA7NgY = BigInt("987")
		const uint256fHetdX = await WolfStakingRewardswItN5o.rewardPerToken.call(uintI1yzMkq, {from: accounts[2]});
		const uint256WXD3E5 = await WolfStakingRewardswItN5o.rewardPerToken.call(uintBL6C9Xm, {from: accounts[3]});
		await WolfStakingRewardswItN5o.nonReentrant.call({from: accounts[0]});
		const uint256n9yFJyo = await WolfStakingRewardswItN5o.withdrawRemainingBalance.call(uintSv6bj50, uintYgrSdHX, {from: accounts[3]});
		const uint256JFUAOVZ = await WolfStakingRewardswItN5o.withdrawRemainingBalance.call(uintUTA7NgY, uintEUsAYq4, {from: accounts[1]});
	});
})