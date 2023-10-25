const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringORuJOZi = "QeTH23YUC6d4JwueHUQuGxeHnXdbx8IfC4CXblhglwTqYLB"
		const stringHJck86m = "RjRVgAnnyWY8NVnu7bSEUssY8ytaNfCy2vfdc8MnfGmwpBUvxfuWUY"
		const uintEaKCyWJ = BigInt("159")
		const NasiLiquidityPoolFactoryq3jh33R = await NasiLiquidityPoolFactory.new(stringORuJOZi, stringHJck86m, uintEaKCyWJ, {from: accounts[2]});
		const uintdXtbMlp = BigInt("1449")
		const addressk81f5nt = "0x0000000000000000000000000000000000000001"
		const uintqtqWN4z = BigInt("1293")
		const uintx66ystp = BigInt("76")
		const uintY6ZUY93 = BigInt("214")
		const boolhRl7rgu = await NasiLiquidityPoolFactoryq3jh33R.increaseAllowance.call(addressk81f5nt, uintdXtbMlp, {from: accounts[3]});
		await NasiLiquidityPoolFactoryq3jh33R.massUpdatePools.call({from: accounts[2]});
		const uint256UsPLnCY = await NasiLiquidityPoolFactoryq3jh33R.getBonusMultiplier.call(uintx66ystp, uintqtqWN4z, {from: accounts[2]});
		const uint256iB7aHAK = await NasiLiquidityPoolFactoryq3jh33R.migrate.call(uintY6ZUY93, {from: accounts[1]});
		const stringNiHKMaO = await NasiLiquidityPoolFactoryq3jh33R.symbol.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressHD8kX6Z = accounts[0]
		const addressUnKLVh = accounts[4]
		const uintn6PZZdG = BigInt("1960")
		const uintX3E9Rn = BigInt("806")
		const NasiLiquidityPoolFactoryLeW1Jkk = await NasiLiquidityPoolFactory.new(addressHD8kX6Z, addressUnKLVh, uintn6PZZdG, uintX3E9Rn, {from: accounts[1]});
		const uinttKKhVD = BigInt("1400")
		const addressUfgj2JU = accounts[2]
		const uintza05EVL = BigInt("1191")
		const addressZmrIf2y = "0x0000000000000000000000000000000000000001"
		await NasiLiquidityPoolFactoryLeW1Jkk.onlyMinter.call({from: accounts[3]});
		const boolaOvCjD = await NasiLiquidityPoolFactoryLeW1Jkk.increaseAllowance.call(addressUfgj2JU, uinttKKhVD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UA7Ltns = await NasiLiquidityPoolFactoryLeW1Jkk.enterStaking.call(uintza05EVL, {from: accounts[0]});
		const addressZOVejo = await NasiLiquidityPoolFactoryLeW1Jkk.delegate.call(addressZmrIf2y, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringn1qmHGM = "qfIISItm2UUWcSm225Yj4y73Nkj7"
		const stringpgmjiiv = "KAQQITI55nQgPJjvMxGiyaQbhUAtYpaAtSOGjFgOb2lSrE7XUG"
		const uinthMUAcRq = BigInt("7")
		const NasiLiquidityPoolFactory794dab = await NasiLiquidityPoolFactory.new(stringn1qmHGM, stringpgmjiiv, uinthMUAcRq, {from: accounts[1]});
		const uintosBj2PQ = BigInt("229")
		const addressODmQEtK = accounts[1]
		const uintohC4HLT = BigInt("1782")
		const uintJSC6Ib9 = BigInt("122")
		const addressXTkCvck = accounts[3]
		const addressZkx9eCp = accounts[4]
		const addressnZuTJl2 = await NasiLiquidityPoolFactory794dab.burnFrom.call(addressODmQEtK, uintosBj2PQ, {from: accounts[1]});
		const uint256kJnU6qq = await NasiLiquidityPoolFactory794dab.migrate.call(uintohC4HLT, {from: accounts[0]});
		const boolpvwZcFv = await NasiLiquidityPoolFactory794dab.transferFrom.call(addressZkx9eCp, addressXTkCvck, uintJSC6Ib9, {from: accounts[2]});
		await NasiLiquidityPoolFactory794dab.renouncePauser.call({from: accounts[1]});
		await NasiLiquidityPoolFactory794dab.renounceOwnership.call({from: accounts[1]});
		await NasiLiquidityPoolFactory794dab.renounceMinter.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringLGrkeeT = "c2nH82j5AMKQOEfDNhjROHLz2XYkRQ4rKxTu6Lj"
		const stringCgmHl5w = "4rqkrfrQOdzMfGkiKng8aUt7BIcoFgYTgHfoDWDTdgkUc4UeBcFUGEabF"
		const uintIAgguF5 = BigInt("23")
		const NasiLiquidityPoolFactoryRIO3Msr = await NasiLiquidityPoolFactory.new(stringLGrkeeT, stringCgmHl5w, uintIAgguF5, {from: accounts[3]});
		const uintMz7awe3 = BigInt("1101")
		const addressAFPWJ4W = accounts[1]
		const addressoi6UR0z = accounts[4]
		const boolOjierq = false
		const addressvGAq7Fs = accounts[2]
		const uintnhNMaW2 = BigInt("698")
		const uinteZB3WZ = BigInt("909")
		const bytetWt7ak = "0x1705111d160e0b0601030c1c0104180311070f110f1a051d17180a0c0a1b1913"
		const byteod84E2W = "0x0819150b1e080d1a060313100c1b18110a0a110e1b1d13031d0e160a1f0e1719"
		const uintGZSOvN = BigInt("231")
		const uinteiGuhez = BigInt("1666")
		const uintkvdS4CC = BigInt("1957")
		const addressjqm5lOU = accounts[4]
		const boolYgx0zN6 = await NasiLiquidityPoolFactoryRIO3Msr.transferFrom.call(addressoi6UR0z, addressAFPWJ4W, uintMz7awe3, {from: accounts[0]});
		await NasiLiquidityPoolFactoryRIO3Msr.onlyMinter.call({from: accounts[1]});
		const uint256ISmd4VO = await NasiLiquidityPoolFactoryRIO3Msr.addLpToken.call(uintnhNMaW2, addressvGAq7Fs, boolOjierq, {from: accounts[0]});
		await NasiLiquidityPoolFactoryRIO3Msr.whenNotPaused.call({from: accounts[1]});
		const uint256Tvp7dMw = await NasiLiquidityPoolFactoryRIO3Msr.emergencyWithdraw.call(uinteZB3WZ, {from: "0x0000000000000000000000000000000000000001"});
		const 
V7b6ZYi = await NasiLiquidityPoolFactoryRIO3Msr.delegateBySig.call(addressjqm5lOU, uintkvdS4CC, uinteiGuhez, uintGZSOvN, byteod84E2W, bytetWt7ak, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressNKeJ2ZR = accounts[1]
		const addresstF6kyCu = "0x0000000000000000000000000000000000000001"
		const uintmYu2e0c = BigInt("1524")
		const uinthRCd0mX = BigInt("956")
		const NasiLiquidityPoolFactoryOoWrrS5 = await NasiLiquidityPoolFactory.new(addressNKeJ2ZR, addresstF6kyCu, uintmYu2e0c, uinthRCd0mX, {from: accounts[2]});
		await NasiLiquidityPoolFactoryOoWrrS5.massUpdatePools.call({from: accounts[2]});
		const uint8AJDEOz = await NasiLiquidityPoolFactoryOoWrrS5.decimals.call({from: accounts[3]});
		await NasiLiquidityPoolFactoryOoWrrS5.renouncePauser.call({from: accounts[5]});
		const stringkoKclqg = await NasiLiquidityPoolFactoryOoWrrS5.name.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressnE0hPie = "0x0000000000000000000000000000000000000001"
		const addressfwoVIia = accounts[3]
		const uintCcSP6vx = BigInt("389")
		const uintsVej8g7 = BigInt("346")
		const NasiLiquidityPoolFactoryKNCPOlH = await NasiLiquidityPoolFactory.new(addressnE0hPie, addressfwoVIia, uintCcSP6vx, uintsVej8g7, {from: "0x0000000000000000000000000000000000000001"});
		const uintXwHpFd8 = BigInt("913")
		const uint25629IQ7N = await NasiLiquidityPoolFactoryKNCPOlH.updatePool.call(uintXwHpFd8, {from: accounts[5]});
		const stringmfuT3qF = await NasiLiquidityPoolFactoryKNCPOlH.name.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryKNCPOlH.onlyOwner.call({from: accounts[1]});
		await NasiLiquidityPoolFactoryKNCPOlH.onlyOwner.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringaFAKYK = "YWZ0F6SjwudOuwnbTFm2VfmAns212EerzCfBsK0G3D"
		const stringm7BD1ZB = "jeNmRNK2P6lXMSZfoXi9t9BJHfaDmmwBUJLb3jqHiVWjvMuBFNJ2KRX5BAZQhK4TfJn8qU4aZucX3PRCLxHyJyUV6A"
		const uintrHtkDE5 = BigInt("156")
		const NasiLiquidityPoolFactoryk5wRb3f = await NasiLiquidityPoolFactory.new(stringaFAKYK, stringm7BD1ZB, uintrHtkDE5, {from: accounts[3]});
		const uintsm9HTAV = BigInt("1920")
		const addressewwEFoQ = accounts[2]
		const boolzc1JfG = false
		const uintRYs3tb = BigInt("1431")
		const uintluxfUzG = BigInt("1073")
		const stringnQqFp9m = await NasiLiquidityPoolFactoryk5wRb3f.symbol.call({from: accounts[4]});
		const boolu9NZsom = await NasiLiquidityPoolFactoryk5wRb3f.decreaseAllowance.call(addressewwEFoQ, uintsm9HTAV, {from: accounts[2]});
		const uint256qk0AAq2 = await NasiLiquidityPoolFactoryk5wRb3f.setAllocationPoint.call(uintluxfUzG, uintRYs3tb, boolzc1JfG, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressiRkBWg7 = accounts[4]
		const addressbtN98yD = accounts[1]
		const uintwbbu4x5 = BigInt("760")
		const uintbV58lH1 = BigInt("1664")
		const NasiLiquidityPoolFactoryNMr0Ihi = await NasiLiquidityPoolFactory.new(addressiRkBWg7, addressbtN98yD, uintwbbu4x5, uintbV58lH1, {from: accounts[2]});
		const uinthAro923 = BigInt("1696")
		const addressyriSLn2 = accounts[1]
		const uintlQ8TxX = BigInt("1860")
		const addressOo4Jia = accounts[2]
		const addressYUMZ1P4 = accounts[3]
		const uint256sZSVkHB = await NasiLiquidityPoolFactoryNMr0Ihi.leaveStaking.call(uinthAro923, {from: accounts[3]});
		const addressgJ0fihL = await NasiLiquidityPoolFactoryNMr0Ihi.setMigrator.call(addressyriSLn2, {from: accounts[3]});
		const booljYA5MQu = await NasiLiquidityPoolFactoryNMr0Ihi.transfer.call(addressOo4Jia, uintlQ8TxX, {from: accounts[2]});
		const addresswbXC8WM = await NasiLiquidityPoolFactoryNMr0Ihi.dev.call(addressYUMZ1P4, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringsfJTMMK = "kPVSakzMKGo9iKxAB62khrswgzvfepBYz"
		const stringD761dvG = "dDfEUUSoWj9"
		const uintZ8IQmI2 = BigInt("235")
		const NasiLiquidityPoolFactoryRiZqRik = await NasiLiquidityPoolFactory.new(stringsfJTMMK, stringD761dvG, uintZ8IQmI2, {from: accounts[3]});
		const uintkhz2YvJ = BigInt("1268")
		const uintYiUb61K = BigInt("1608")
		const uint256JDsXThZ = await NasiLiquidityPoolFactoryRiZqRik.getBonusMultiplier.call(uintYiUb61K, uintkhz2YvJ, {from: accounts[3]});
		await NasiLiquidityPoolFactoryRiZqRik.massUpdatePools.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresse8P6VaH = accounts[4]
		const addressJQRdTTu = accounts[2]
		const uint0AmuNh = BigInt("1813")
		const uintqFSALxP = BigInt("366")
		const NasiLiquidityPoolFactoryafLnIdM = await NasiLiquidityPoolFactory.new(addresse8P6VaH, addressJQRdTTu, uint0AmuNh, uintqFSALxP, {from: accounts[2]});
		const uintE5hDz2w = BigInt("636")
		const uintYbfdjF1 = BigInt("216")
		const addressh2Jv6E = accounts[0]
		const uint256wXGodhw = await NasiLiquidityPoolFactoryafLnIdM.migrate.call(uintE5hDz2w, {from: accounts[3]});
		const boolduYvdfb = await NasiLiquidityPoolFactoryafLnIdM.mint.call(addressh2Jv6E, uintYbfdjF1, {from: accounts[4]});
		await NasiLiquidityPoolFactoryafLnIdM.onlyPauser.call({from: accounts[2]});
		await NasiLiquidityPoolFactoryafLnIdM.onlyOwner.call({from: accounts[3]});
		await NasiLiquidityPoolFactoryafLnIdM.renounceOwnership.call({from: accounts[5]});
		await NasiLiquidityPoolFactoryafLnIdM.renounceOwnership.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressCL2GXd = accounts[2]
		const addressRU9WENF = accounts[1]
		const uintSziQ0HN = BigInt("1625")
		const uintPv1bIIO = BigInt("608")
		const NasiLiquidityPoolFactoryJhVxSTL = await NasiLiquidityPoolFactory.new(addressCL2GXd, addressRU9WENF, uintSziQ0HN, uintPv1bIIO, {from: accounts[0]});
		const uintMfV4m3u = BigInt("1630")
		const uintsmO2N42 = BigInt("1085")
		await NasiLiquidityPoolFactoryJhVxSTL.renounceOwnership.call({from: accounts[3]});
		const uint256MN6kKR5 = await NasiLiquidityPoolFactoryJhVxSTL.getBonusMultiplier.call(uintsmO2N42, uintMfV4m3u, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJS3w63 = "HznmS1fSzjIChSzBxzB8JIog"
		const stringjj7AJQI = "1dCXCRhchTKpt0fQDWEy4CyrNzTbowzGJlXEFiHtgdCDvxokL"
		const uintoTqEQd = BigInt("193")
		const NasiLiquidityPoolFactorynlh7yMp = await NasiLiquidityPoolFactory.new(stringJS3w63, stringjj7AJQI, uintoTqEQd, {from: accounts[1]});
		const addressKTX4Fbo = accounts[2]
		const addressN4tXhN = accounts[4]
		const uinthedlnY = BigInt("342")
		const uintoqZ7mg = BigInt("853")
		const addressCkZ9xLX = accounts[4]
		const addressefgAWM = accounts[5]
		const uintTpkkW1J = BigInt("1861")
		const addressftftJaw = accounts[2]
		await NasiLiquidityPoolFactorynlh7yMp.renouncePauser.call({from: accounts[5]});
		const uint256Q9ULJxJ = await NasiLiquidityPoolFactorynlh7yMp.getCurrentVotes.call(addressKTX4Fbo, {from: accounts[2]});
		const uint256VcN7if1 = await NasiLiquidityPoolFactorynlh7yMp.pendingNasi.call(uinthedlnY, addressN4tXhN, {from: accounts[2]});
		const boolSt2CRSF = await NasiLiquidityPoolFactorynlh7yMp.increaseAllowance.call(addressCkZ9xLX, uintoqZ7mg, {from: accounts[3]});
		const uint256LSJsCEc = await NasiLiquidityPoolFactorynlh7yMp.pendingNasi.call(uintTpkkW1J, addressefgAWM, {from: accounts[1]});
		const addressxQM5J54 = await NasiLiquidityPoolFactorynlh7yMp.addPauser.call(addressftftJaw, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressV3tpg6H = accounts[4]
		const address8k30jI = accounts[1]
		const uintGQXZTf4 = BigInt("760")
		const uintVJM2oG1 = BigInt("1664")
		const NasiLiquidityPoolFactoryNMr0Ihi = await NasiLiquidityPoolFactory.new(addressV3tpg6H, address8k30jI, uintGQXZTf4, uintVJM2oG1, {from: accounts[2]});
		const addressPNNqOAk = accounts[5]
		const addresswbXC8WM = await NasiLiquidityPoolFactoryNMr0Ihi.dev.call(addressPNNqOAk, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringVquyu9A = "c"
		const stringwmfJJv4 = "jFnKSzsFj"
		const uintfPH8pT1 = BigInt("159")
		const NasiLiquidityPoolFactoryHZtenv6 = await NasiLiquidityPoolFactory.new(stringVquyu9A, stringwmfJJv4, uintfPH8pT1, {from: "0x0000000000000000000000000000000000000001"});
		const addressArm0Alj = accounts[0]
		const addressFUyYiSZ = accounts[2]
		const addressfLk1Cx0 = accounts[4]
		const uintzeG5yi7 = BigInt("695")
		const addresscf39lnw = accounts[2]
		const addresslqxxPqu = accounts[2]
		const addressiXq9GZ9 = await NasiLiquidityPoolFactoryHZtenv6._delegate.call(addressFUyYiSZ, addressArm0Alj, {from: accounts[3]});
		const addressU6fDVz = await NasiLiquidityPoolFactoryHZtenv6.addMinter.call(addressfLk1Cx0, {from: accounts[2]});
		const stringM3ziz7Y = await NasiLiquidityPoolFactoryHZtenv6.name.call({from: accounts[1]});
		const boolgdiiHAi = await NasiLiquidityPoolFactoryHZtenv6.increaseAllowance.call(addresscf39lnw, uintzeG5yi7, {from: accounts[4]});
		const addresscgeyUnL = await NasiLiquidityPoolFactoryHZtenv6.transferOwnership.call(addresslqxxPqu, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringEe6oMCX = "ePS63N6Ahk7LP5K5C8cR4zPfHT31l7zpDnxgqUKsPaTryjNix17gvFdgJ97LG830kkFyh3mzmSs9SZjAmlNEElByUM"
		const stringAr5bAmC = "4kdWIZjRgdzBcSruePamSnuM95phgqUq7zjCltZtjRruhyUV3YH29i"
		const uintridhWyw = BigInt("106")
		const NasiLiquidityPoolFactoryxILaEVC = await NasiLiquidityPoolFactory.new(stringEe6oMCX, stringAr5bAmC, uintridhWyw, {from: accounts[4]});
		const uintwx9gaqX = BigInt("1688")
		const addressIcxykzl = accounts[4]
		const addressPdZ5B4v = accounts[3]
		const addresstp34QWl = accounts[4]
		const uintxx8hZFF = BigInt("258")
		const uintarppaJN = BigInt("1623")
		const uintm3p23i = BigInt("1489")
		const boolNooiMxL = await NasiLiquidityPoolFactoryxILaEVC.transferFrom.call(addressPdZ5B4v, addressIcxykzl, uintwx9gaqX, {from: accounts[0]});
		const addressBjnxWcq = await NasiLiquidityPoolFactoryxILaEVC.addMinter.call(addresstp34QWl, {from: accounts[3]});
		const boolluXU5Qr = await NasiLiquidityPoolFactoryxILaEVC.paused.call({from: accounts[3]});
		const uint256sm9Ymfs = await NasiLiquidityPoolFactoryxILaEVC.getBonusMultiplier.call(uintarppaJN, uintxx8hZFF, {from: accounts[0]});
		const uint256cwqLhQM = await NasiLiquidityPoolFactoryxILaEVC.updatePool.call(uintm3p23i, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringHZHokZ = "ykDz6wf8dQ2Wt"
		const stringsaqv9h8 = "44f85Rc2AXdGFzuGzB7jtHRGqbmCe8788PpP3jayDgfu3WkWfbzSw8WmkgwIfjPDcOFTviUTNh1eY6cnR"
		const uintr9zF5c9 = BigInt("218")
		const NasiLiquidityPoolFactoryzwq05m2 = await NasiLiquidityPoolFactory.new(stringHZHokZ, stringsaqv9h8, uintr9zF5c9, {from: "0x0000000000000000000000000000000000000001"});
		const stringshxVUk = await NasiLiquidityPoolFactoryzwq05m2.name.call({from: accounts[2]});
		await NasiLiquidityPoolFactoryzwq05m2.pause.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringI7FDkd = "GV"
		const stringXyCnBaQ = "AfkCS1wZeX2qxyRsM0Ac3IB5gZ3QwSgUICZdXwRuKMIkOfzifzvhriUyLx0B8QxNVVRzNUxhcvwNneeNROrZFzjXDm0eg"
		const uintyYWBPxF = BigInt("142")
		const NasiLiquidityPoolFactoryMLnVVCA = await NasiLiquidityPoolFactory.new(stringI7FDkd, stringXyCnBaQ, uintyYWBPxF, {from: accounts[5]});
		const uintQTmO1ww = BigInt("301")
		const addressFVCgIn1 = accounts[3]
		const uintbCEHdiO = BigInt("1623")
		const uintANsoNdG = BigInt("783")
		await NasiLiquidityPoolFactoryMLnVVCA.whenPaused.call({from: accounts[1]});
		const boolrmwNx5C = await NasiLiquidityPoolFactoryMLnVVCA.increaseAllowance.call(addressFVCgIn1, uintQTmO1ww, {from: accounts[2]});
		const uint256H2w6w2v = await NasiLiquidityPoolFactoryMLnVVCA.getBonusMultiplier.call(uintANsoNdG, uintbCEHdiO, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresscNtsk1 = accounts[4]
		const addressHsAVEDb = accounts[1]
		const uintpH11A1l = BigInt("760")
		const uintzjbSJAa = BigInt("1664")
		const NasiLiquidityPoolFactoryNMr0Ihi = await NasiLiquidityPoolFactory.new(addresscNtsk1, addressHsAVEDb, uintpH11A1l, uintzjbSJAa, {from: accounts[2]});
		const uintLntG0dH = BigInt("1706")
		const addressDHpzOU8 = accounts[1]
		const uintDp4GQYY = BigInt("1886")
		const uintcpFdKD = BigInt("738")
		const uintBB8Du4F = BigInt("1063")
		const addressjC9pU1 = accounts[3]
		await NasiLiquidityPoolFactoryNMr0Ihi.renounceOwnership.call({from: accounts[2]});
		const uint256sZSVkHB = await NasiLiquidityPoolFactoryNMr0Ihi.leaveStaking.call(uintLntG0dH, {from: accounts[3]});
		await NasiLiquidityPoolFactoryNMr0Ihi.onlyPauser.call({from: accounts[3]});
		const addressgJ0fihL = await NasiLiquidityPoolFactoryNMr0Ihi.setMigrator.call(addressDHpzOU8, {from: accounts[3]});
		const uint256FiFeSM5 = await NasiLiquidityPoolFactoryNMr0Ihi.deposit.call(uintcpFdKD, uintDp4GQYY, {from: accounts[4]});
		const uint256OqvfeYY = await NasiLiquidityPoolFactoryNMr0Ihi.emergencyWithdraw.call(uintBB8Du4F, {from: accounts[4]});
		const addresswbXC8WM = await NasiLiquidityPoolFactoryNMr0Ihi.dev.call(addressjC9pU1, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressbKM6FgQ = accounts[4]
		const addresstl4gW7g = accounts[1]
		const uintDvYTzNM = BigInt("760")
		const uintNVXXhjf = BigInt("1664")
		const NasiLiquidityPoolFactoryNMr0Ihi = await NasiLiquidityPoolFactory.new(addressbKM6FgQ, addresstl4gW7g, uintDvYTzNM, uintNVXXhjf, {from: accounts[2]});
		const uintXiVq5FX = BigInt("1008")
		const uintOKrWBr = BigInt("1648")
		const uint256eHyHax4 = await NasiLiquidityPoolFactoryNMr0Ihi.updatePool.call(uintXiVq5FX, {from: accounts[0]});
		const boolTdOT1X0 = await NasiLiquidityPoolFactoryNMr0Ihi.paused.call({from: accounts[4]});
		const uint256sZSVkHB = await NasiLiquidityPoolFactoryNMr0Ihi.leaveStaking.call(uintOKrWBr, {from: accounts[3]});
	});
})