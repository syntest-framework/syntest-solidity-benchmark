const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressXGxbUjw = accounts[0]
		const addressYdr79d0 = accounts[5]
		const addresshF6vjJ9 = accounts[0]
		const BACMARSLPTOKENPoolLoW3Ixo = await BACMARSLPTOKENPool.new(addressXGxbUjw, addressYdr79d0, addresshF6vjJ9, {from: "0x0000000000000000000000000000000000000001"});
		const uintD1aMR2x = BigInt("1616")
		const uintzbqPMBd = BigInt("1643")
		const addresscqDIoiR = accounts[3]
		const uint256NE6oxfw = await BACMARSLPTOKENPoolLoW3Ixo.stake.call(uintD1aMR2x, {from: accounts[4]});
		await BACMARSLPTOKENPoolLoW3Ixo.getReward.call({from: accounts[1]});
		const uint256YUtaQI6 = await BACMARSLPTOKENPoolLoW3Ixo.withdraw.call(uintzbqPMBd, {from: accounts[3]});
		const uint256kgXss1g = await BACMARSLPTOKENPoolLoW3Ixo.balanceOf.call(addresscqDIoiR, {from: accounts[0]});
		await BACMARSLPTOKENPoolLoW3Ixo.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string9ocrUT = "2LzJos58tgCcd4EWD3sQe4YAcBF9JGrRHhQ4Vpv0VpweXg"
		const stringERu9vXP = "1Mk4gnxZ3Kj4jdvyOtCLKrmv5n5Cayf8mvxSa2RhBxp"
		const uintJmq2qRs = BigInt("156")
		const BACMARSLPTOKENPoolNWEip7m = await BACMARSLPTOKENPool.new(string9ocrUT, stringERu9vXP, uintJmq2qRs, {from: accounts[2]});
		const byteWjengPf = "0x161b031f0006031a19051e1720120612000a00021709120617121106130e180a"
		const bytezhcRFL4 = "0x0d121b0017041413130c18160511051e1a0f10010a140418020c150e16180d09"
		const uintglS7VC3 = BigInt("162")
		const uintJIAz59U = BigInt("1247")
		const uintEoLIFQL = BigInt("1488")
		const uint256l0M5cQl = await BACMARSLPTOKENPoolNWEip7m.stakeWithPermit.call(uintEoLIFQL, uintJIAz59U, uintglS7VC3, bytezhcRFL4, byteWjengPf, {from: accounts[4]});
		const uint8lPv0K70 = await BACMARSLPTOKENPoolNWEip7m.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresswUbepo1 = "0x0000000000000000000000000000000000000001"
		const addressD2zeE2d = accounts[3]
		const addressJNxq86r = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolQYaEnI = await BACMARSLPTOKENPool.new(addresswUbepo1, addressD2zeE2d, addressJNxq86r, {from: accounts[1]});
		const addressBPV6u49 = accounts[3]
		const uintcYHWkEx = BigInt("1606")
		const uintw1neGV = BigInt("402")
		const uint256b6gKOsn = await BACMARSLPTOKENPoolQYaEnI.balanceOf.call(addressBPV6u49, {from: accounts[4]});
//		const uint256mGwWv26 = await BACMARSLPTOKENPoolQYaEnI.withdraw.call(uintcYHWkEx, {from: accounts[2]});
//		const uint256HfHeDDT = await BACMARSLPTOKENPoolQYaEnI.stake.call(uintw1neGV, {from: accounts[5]});
//		await BACMARSLPTOKENPoolQYaEnI.exit.call({from: accounts[2]});

		assert.equal(uint256b6gKOsn, BigInt("0"))
		await expect(BACMARSLPTOKENPoolQYaEnI.withdraw.call(uintcYHWkEx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string2epncO = "I0LZ7Rl8zqoXHgTid"
		const stringTNag3rU = "rlTA06hOLNMQHdNl5EaldE3TUzl8Y6"
		const uintgJtGok = BigInt("78")
		const BACMARSLPTOKENPoolhpBXL6L = await BACMARSLPTOKENPool.new(string2epncO, stringTNag3rU, uintgJtGok, {from: accounts[2]});
		const addressh8kA0QB = accounts[1]
		const uint256CRzguIt = await BACMARSLPTOKENPoolhpBXL6L.earned.call(addressh8kA0QB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UK7g8QU = await BACMARSLPTOKENPoolhpBXL6L.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolhpBXL6L.nonReentrant.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWolZfVy = "zMUnWrefUogkxcw3KtdwWfCepWjQCeLo41Mbw7Gxs0VP73aSMeu34"
		const stringScNUcbf = "oro7ebBk43KOwgrHR2"
		const uint4gM54n = BigInt("232")
		const BACMARSLPTOKENPoolbEbyM9 = await BACMARSLPTOKENPool.new(stringWolZfVy, stringScNUcbf, uint4gM54n, {from: accounts[4]});
		const uintPcudaAy = BigInt("1950")
		const byteROxJoFC = "0x100c061615130e050c001f02051d0b0f0a150a111c111b1a1e141911001a0104"
		const byteE6odHRV = "0x051a091017151102140a140709010b191b1f100e00091019050b1f050b030405"
		const uintnQJDWP9 = BigInt("155")
		const uintYG0q7TJ = BigInt("565")
		const uintvhjlhuq = BigInt("1181")
		await BACMARSLPTOKENPoolbEbyM9.getReward.call({from: accounts[4]});
		const uint256iiz8y2 = await BACMARSLPTOKENPoolbEbyM9.withdraw.call(uintPcudaAy, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolbEbyM9.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolbEbyM9.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256UMxEYbA = await BACMARSLPTOKENPoolbEbyM9.stakeWithPermit.call(uintvhjlhuq, uintYG0q7TJ, uintnQJDWP9, byteE6odHRV, byteROxJoFC, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressekaAi1C = accounts[1]
		const addressNhrTJOd = "0x0000000000000000000000000000000000000001"
		const addressZ1fJ1MJ = accounts[2]
		const BACMARSLPTOKENPoolMOanHBT = await BACMARSLPTOKENPool.new(addressekaAi1C, addressNhrTJOd, addressZ1fJ1MJ, {from: accounts[4]});
		const addressc87LowD = accounts[1]
//		const addressscVktTI = await BACMARSLPTOKENPoolMOanHBT.updateReward.call(addressc87LowD, {from: accounts[5]});
//		await BACMARSLPTOKENPoolMOanHBT.exit.call({from: accounts[4]});
//		const stringAEz3mnQ = await BACMARSLPTOKENPoolMOanHBT.name.call({from: accounts[3]});
//		const uint256ojySxBP = await BACMARSLPTOKENPoolMOanHBT.lastTimeRewardApplicable.call({from: accounts[5]});

		await expect(BACMARSLPTOKENPoolMOanHBT.updateReward.call(addressc87LowD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJMQKTXX = "SqcfrJAXLhH1sTHCJklj652EGN3JOZtUgH4YTj9jwPXCEMGLbIMxjcGAJX5lyqBH62PSQYWfAHwFJe51G"
		const stringssjJcSw = "2Y2"
		const uintCwLrnDx = BigInt("50")
		const BACMARSLPTOKENPoolVpITKwR = await BACMARSLPTOKENPool.new(stringJMQKTXX, stringssjJcSw, uintCwLrnDx, {from: accounts[2]});
		await BACMARSLPTOKENPoolVpITKwR.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256emlf9rq = await BACMARSLPTOKENPoolVpITKwR.getRewardForDuration.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const address3r0Lmy = accounts[3]
		const address3RtXCQ = accounts[4]
		const addressdrV8Clj = accounts[2]
		const BACMARSLPTOKENPoollAFWcFx = await BACMARSLPTOKENPool.new(address3r0Lmy, address3RtXCQ, addressdrV8Clj, {from: accounts[1]});
		const uintpPgVtlu = BigInt("557")
		const addressEmVsCm5 = accounts[3]
//		const uint256zUYusoN = await BACMARSLPTOKENPoollAFWcFx.notifyRewardAmount.call(uintpPgVtlu, {from: accounts[0]});
//		const stringeKvb8ed = await BACMARSLPTOKENPoollAFWcFx.name.call({from: accounts[3]});
//		const stringv1ybiUq = await BACMARSLPTOKENPoollAFWcFx.symbol.call({from: accounts[5]});
//		const uint256UVKPzfc = await BACMARSLPTOKENPoollAFWcFx.balanceOf.call(addressEmVsCm5, {from: accounts[3]});

		await expect(BACMARSLPTOKENPoollAFWcFx.notifyRewardAmount.call(uintpPgVtlu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBk80Ham = "bg5o"
		const stringEtKaEix = "apMBIbOGuD4FkgcK1ZX43xBfXL3LhoqsebnPgj4U1vch4EdQrLjYEEbQR5BYrQJCRPgBfU9"
		const uintYnocW75 = BigInt("61")
		const BACMARSLPTOKENPoolEhhIVaM = await BACMARSLPTOKENPool.new(stringBk80Ham, stringEtKaEix, uintYnocW75, {from: accounts[4]});
		const uintNY8dbAg = BigInt("615")
		const uintqL4CrQp = BigInt("1875")
		const uint256twiEMO3 = await BACMARSLPTOKENPoolEhhIVaM.stake.call(uintNY8dbAg, {from: accounts[3]});
		await BACMARSLPTOKENPoolEhhIVaM.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolEhhIVaM.getReward.call({from: accounts[1]});
		const uint256I31uGDJ = await BACMARSLPTOKENPoolEhhIVaM.stake.call(uintqL4CrQp, {from: accounts[1]});
		await BACMARSLPTOKENPoolEhhIVaM.nonReentrant.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressSrZoHsP = "0x0000000000000000000000000000000000000001"
		const addressigldcXg = accounts[3]
		const addressUeDahff = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolQYaEnI = await BACMARSLPTOKENPool.new(addressSrZoHsP, addressigldcXg, addressUeDahff, {from: accounts[1]});
		const uinttrGysqs = BigInt("726")
		const addressYT9Reki = accounts[3]
		const uinthw79bQu = BigInt("1606")
		const addressjH6SlZf = accounts[0]
		const uintrlJgAW = BigInt("402")
//		const uint256D5ZzTiR = await BACMARSLPTOKENPoolQYaEnI.stake.call(uinttrGysqs, {from: accounts[5]});
//		const uint256b6gKOsn = await BACMARSLPTOKENPoolQYaEnI.balanceOf.call(addressYT9Reki, {from: accounts[4]});
//		const uint256mGwWv26 = await BACMARSLPTOKENPoolQYaEnI.withdraw.call(uinthw79bQu, {from: accounts[2]});
//		const uint256rBXjRMU = await BACMARSLPTOKENPoolQYaEnI.balanceOf.call(addressjH6SlZf, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HfHeDDT = await BACMARSLPTOKENPoolQYaEnI.stake.call(uintrlJgAW, {from: accounts[5]});
//		await BACMARSLPTOKENPoolQYaEnI.exit.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolQYaEnI.stake.call(uinttrGysqs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressUQP1xh0 = accounts[1]
		const addressAh9RoUj = "0x0000000000000000000000000000000000000001"
		const addressjG4H1IV = accounts[2]
		const BACMARSLPTOKENPoolMOanHBT = await BACMARSLPTOKENPool.new(addressUQP1xh0, addressAh9RoUj, addressjG4H1IV, {from: accounts[4]});
//		await BACMARSLPTOKENPoolMOanHBT.exit.call({from: accounts[4]});
//		const stringAEz3mnQ = await BACMARSLPTOKENPoolMOanHBT.name.call({from: accounts[3]});
//		const uint256ojySxBP = await BACMARSLPTOKENPoolMOanHBT.lastTimeRewardApplicable.call({from: accounts[5]});

		await expect(BACMARSLPTOKENPoolMOanHBT.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string3OxeOX = "55Y9jCSQa7yHdE7mcUUSUlOONWNvDwfXzpBttPeipNxuhzPVNLwyl6w6UxZwzJLCOOgEuLMgUpvcGxmF2LmYxIcPAjClWZrX"
		const stringKeQp2Ro = "KK6mplJiMWxDH9HSdaqigUHemanlfBcsbd2yG2sSyLur4eutwdU05lee"
		const uintRwRjuJ6 = BigInt("92")
		const BACMARSLPTOKENPoolIpk56fW = await BACMARSLPTOKENPool.new(string3OxeOX, stringKeQp2Ro, uintRwRjuJ6, {from: accounts[3]});
		const addressGeZpdx2 = accounts[1]
		const uintcnu9yuE = BigInt("1340")
		const addressb9ts2v8 = await BACMARSLPTOKENPoolIpk56fW.updateReward.call(addressGeZpdx2, {from: accounts[0]});
		const stringThGktpZ = await BACMARSLPTOKENPoolIpk56fW.symbol.call({from: accounts[1]});
		const uint256G4ajZvU = await BACMARSLPTOKENPoolIpk56fW.notifyRewardAmount.call(uintcnu9yuE, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfsjThNl = "wzy8YuTj988Dr14aXld5ko7AS46tKdcQPxwDMVBEUSOS0M1wg2LgOVFn4S2nUD2AEO8BnWlOoY7xH1rm"
		const stringrA9knsF = "DHXwUXnYTSd4mtRPsRHM3et1lzhTZk25geflZkIxqXTwaN1pd6WejFr"
		const uintzR2P4tg = BigInt("252")
		const BACMARSLPTOKENPoolzagosGi = await BACMARSLPTOKENPool.new(stringfsjThNl, stringrA9knsF, uintzR2P4tg, {from: accounts[1]});
		const uintEy9G1EP = BigInt("670")
		const stringDWffqkw = await BACMARSLPTOKENPoolzagosGi.symbol.call({from: accounts[5]});
		const stringDTgD382 = await BACMARSLPTOKENPoolzagosGi.symbol.call({from: accounts[0]});
		const uint8H5saBS = await BACMARSLPTOKENPoolzagosGi.decimals.call({from: accounts[1]});
		const uint256Cfi1vcX = await BACMARSLPTOKENPoolzagosGi.withdraw.call(uintEy9G1EP, {from: accounts[5]});
		await BACMARSLPTOKENPoolzagosGi.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressdUI9tng = accounts[1]
		const addressU9kGkb3 = "0x0000000000000000000000000000000000000001"
		const addressBqL4HY = accounts[2]
		const BACMARSLPTOKENPoolMOanHBT = await BACMARSLPTOKENPool.new(addressdUI9tng, addressU9kGkb3, addressBqL4HY, {from: accounts[4]});
		const bytePDlZ0d0 = "0x1d0a10191100130f0d021b1618011f080c001f0f01200a110d0b1e1e180d0805"
		const byteh9unpmQ = "0x140c16010a0e05010415190e1c100413191d060b1f050a131e1809020d0b0515"
		const uintqIFCaf = BigInt("74")
		const uintRfBKhS = BigInt("249")
		const uintWBvFbs3 = BigInt("803")
		const uintbJuTFE5 = BigInt("645")
//		const uint256QxDHczE = await BACMARSLPTOKENPoolMOanHBT.stakeWithPermit.call(uintWBvFbs3, uintRfBKhS, uintqIFCaf, byteh9unpmQ, bytePDlZ0d0, {from: accounts[1]});
//		const uint256QT9o1cm = await BACMARSLPTOKENPoolMOanHBT.withdraw.call(uintbJuTFE5, {from: accounts[1]});
//		await BACMARSLPTOKENPoolMOanHBT.exit.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolMOanHBT.stakeWithPermit.call(uintWBvFbs3, uintRfBKhS, uintqIFCaf, byteh9unpmQ, bytePDlZ0d0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQAzyl6 = "TTIqdazL1N1yCWqOcKz7dpww6R50H27vnPK8zRcOCOn8Wzi2Gc"
		const stringjkre0XF = "cHnRjcu82fj3VYp"
		const uintRKSEeX = BigInt("91")
		const BACMARSLPTOKENPoolotv56j1 = await BACMARSLPTOKENPool.new(stringQAzyl6, stringjkre0XF, uintRKSEeX, {from: accounts[3]});
		const uintdJu9nyJ = BigInt("1015")
		await BACMARSLPTOKENPoolotv56j1.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolotv56j1.getReward.call({from: accounts[2]});
		const uint256faPHH3X = await BACMARSLPTOKENPoolotv56j1.withdraw.call(uintdJu9nyJ, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressQN7HRc = accounts[1]
		const address8juj7l = "0x0000000000000000000000000000000000000001"
		const addresshFLANpv = accounts[2]
		const BACMARSLPTOKENPoolMOanHBT = await BACMARSLPTOKENPool.new(addressQN7HRc, address8juj7l, addresshFLANpv, {from: accounts[4]});
		const uint256kVqIrnW = await BACMARSLPTOKENPoolMOanHBT.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
//		await BACMARSLPTOKENPoolMOanHBT.exit.call({from: accounts[4]});

		assert.equal(uint256kVqIrnW, BigInt("0"))
		await expect(BACMARSLPTOKENPoolMOanHBT.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZLTejrZ = "Gvd6RzCCGqX7e4tsFOtQmH8TcUYBePO2y17hKkCdpdpeQf7KPsueOlELSex"
		const stringXK6BCbb = "YpLvJjtNo96VDb5M7p"
		const uintifJV5nD = BigInt("81")
		const BACMARSLPTOKENPoolZdY0f4e = await BACMARSLPTOKENPool.new(stringZLTejrZ, stringXK6BCbb, uintifJV5nD, {from: accounts[4]});
		const addressgGrAlCU = "0x0000000000000000000000000000000000000001"
		await BACMARSLPTOKENPoolZdY0f4e.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPoolZdY0f4e.nonReentrant.call({from: accounts[3]});
		await BACMARSLPTOKENPoolZdY0f4e.nonReentrant.call({from: accounts[1]});
		const uint256JwgGfGD = await BACMARSLPTOKENPoolZdY0f4e.earned.call(addressgGrAlCU, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXEInG2s = "LAbhesW5E4BT7hFGBuBNLYdK3h8YJx3S7QAHikSmxnrJFi1FVeUvuDLYNb9FHUDkI3"
		const stringPH7R7Zi = "1eO2vGcrB0JVxwspKMo8iMhmu26lxt5WjUElxVsCV7ZML8eNuRmC9ougqMfgzi"
		const uintWtckxc5 = BigInt("148")
		const BACMARSLPTOKENPoolqbXyXIt = await BACMARSLPTOKENPool.new(stringXEInG2s, stringPH7R7Zi, uintWtckxc5, {from: accounts[0]});
		const uintmT8r7HK = BigInt("573")
		const uint256b9QNX7u = await BACMARSLPTOKENPoolqbXyXIt.totalSupply.call({from: accounts[2]});
		const uint256BqqCcW = await BACMARSLPTOKENPoolqbXyXIt.rewardPerToken.call({from: accounts[2]});
		const uint256SaWsKKj = await BACMARSLPTOKENPoolqbXyXIt.withdraw.call(uintmT8r7HK, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressZVpfBDi = accounts[2]
		const addressKe2XIYt = accounts[4]
		const addressVZEMLBp = accounts[1]
		const BACMARSLPTOKENPoolk56Rx5D = await BACMARSLPTOKENPool.new(addressZVpfBDi, addressKe2XIYt, addressVZEMLBp, {from: accounts[3]});
		const uintovKFpPa = BigInt("2017")
		const uintnpCVY6R = BigInt("1448")
		const uintnBJukwi = BigInt("1759")
		const byteIUnz7r4 = "0x0a171f1a1f180f0f041a070417101b041117010b04191111011f111a0f080b1c"
		const bytek4xHVH8 = "0x0b0e0b0a1e0e171f011e010010001107051911070c0e201e1604190a080a0e03"
		const uintr50PGYE = BigInt("182")
		const uint8WSzXK = BigInt("222")
		const uintk1ZINi = BigInt("715")
		const uintzl9yQgo = BigInt("404")
		const uint256evtr0oc = await BACMARSLPTOKENPoolk56Rx5D.totalSupply.call({from: accounts[1]});
//		const uint256GQo47nT = await BACMARSLPTOKENPoolk56Rx5D.stake.call(uintovKFpPa, {from: accounts[3]});
//		const uint256AbkfOYt = await BACMARSLPTOKENPoolk56Rx5D.withdraw.call(uintnpCVY6R, {from: accounts[1]});
//		const uint256puAhpm6 = await BACMARSLPTOKENPoolk56Rx5D.totalSupply.call({from: accounts[3]});
//		const uint256cfTe4gi = await BACMARSLPTOKENPoolk56Rx5D.withdraw.call(uintnBJukwi, {from: accounts[3]});
//		const uint256HJD6XdY = await BACMARSLPTOKENPoolk56Rx5D.stakeWithPermit.call(uintk1ZINi, uint8WSzXK, uintr50PGYE, bytek4xHVH8, byteIUnz7r4, {from: accounts[0]});
//		const uint256Glxh855 = await BACMARSLPTOKENPoolk56Rx5D.notifyRewardAmount.call(uintzl9yQgo, {from: accounts[4]});

		assert.equal(uint256evtr0oc, BigInt("0"))
		await expect(BACMARSLPTOKENPoolk56Rx5D.stake.call(uintovKFpPa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAnO7VGv = "2y1PWshbGzgHHdfJ5pDCOzrpUAbS27rt5CUPHXMXSgBKjqc6yDQTi"
		const stringfRGjKoz = ""
		const uintAjbkk0g = BigInt("52")
		const BACMARSLPTOKENPoolijiS5Ue = await BACMARSLPTOKENPool.new(stringAnO7VGv, stringfRGjKoz, uintAjbkk0g, {from: "0x0000000000000000000000000000000000000001"});
		const addressiK0kA7 = accounts[1]
		const uintrehhQPe = BigInt("1090")
		const uint256tatuPKZ = await BACMARSLPTOKENPoolijiS5Ue.balanceOf.call(addressiK0kA7, {from: accounts[4]});
		const uint256gEAmj0a = await BACMARSLPTOKENPoolijiS5Ue.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256qPpmnDE = await BACMARSLPTOKENPoolijiS5Ue.withdraw.call(uintrehhQPe, {from: accounts[3]});
		await BACMARSLPTOKENPoolijiS5Ue.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolijiS5Ue.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbRb44gj = "YEvmhz18GYed0UhCVcxzSeZmd9Gum53o8OQlCn286p"
		const stringIqzbT8t = "yilJGpozwi9"
		const uintVEegikV = BigInt("197")
		const BACMARSLPTOKENPoolhCBbjCg = await BACMARSLPTOKENPool.new(stringbRb44gj, stringIqzbT8t, uintVEegikV, {from: accounts[4]});
		const addressHIHXtKe = "0x0000000000000000000000000000000000000001"
		const addresseEjt9u = accounts[3]
		const uint256KhlfV2D = await BACMARSLPTOKENPoolhCBbjCg.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256PZHS09C = await BACMARSLPTOKENPoolhCBbjCg.balanceOf.call(addressHIHXtKe, {from: accounts[1]});
		const uint256uEKFrVE = await BACMARSLPTOKENPoolhCBbjCg.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPoolhCBbjCg.exit.call({from: accounts[0]});
		const uint256j9lFiI = await BACMARSLPTOKENPoolhCBbjCg.earned.call(addresseEjt9u, {from: accounts[3]});
		const stringuW5irbb = await BACMARSLPTOKENPoolhCBbjCg.name.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressqGvaXzX = accounts[2]
		const addressVGvwhtM = accounts[4]
		const addressk2SVj2H = accounts[1]
		const BACMARSLPTOKENPoolk56Rx5D = await BACMARSLPTOKENPool.new(addressqGvaXzX, addressVGvwhtM, addressk2SVj2H, {from: accounts[3]});
//		await BACMARSLPTOKENPoolk56Rx5D.getReward.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolk56Rx5D.exit.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolk56Rx5D.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressHIEADz9 = accounts[2]
		const addressSTQMDu9 = accounts[4]
		const addressUwI3g9w = accounts[1]
		const BACMARSLPTOKENPoolk56Rx5D = await BACMARSLPTOKENPool.new(addressHIEADz9, addressSTQMDu9, addressUwI3g9w, {from: accounts[3]});
		const uintt56NtXU = BigInt("2017")
		const uintIgZurmI = BigInt("1456")
		const uintApChn2W = BigInt("1759")
		const uintpTAhlHu = BigInt("404")
//		const uint256GQo47nT = await BACMARSLPTOKENPoolk56Rx5D.stake.call(uintt56NtXU, {from: accounts[3]});
//		const uint256AbkfOYt = await BACMARSLPTOKENPoolk56Rx5D.withdraw.call(uintIgZurmI, {from: accounts[1]});
//		const uint256InKnyv = await BACMARSLPTOKENPoolk56Rx5D.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256cfTe4gi = await BACMARSLPTOKENPoolk56Rx5D.withdraw.call(uintApChn2W, {from: accounts[3]});
//		const uint256Glxh855 = await BACMARSLPTOKENPoolk56Rx5D.notifyRewardAmount.call(uintpTAhlHu, {from: accounts[4]});
//		const uint8GT3XEGn = await BACMARSLPTOKENPoolk56Rx5D.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256jJ1fDx = await BACMARSLPTOKENPoolk56Rx5D.getRewardForDuration.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolk56Rx5D.stake.call(uintt56NtXU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressqDCQScS = accounts[2]
		const addressIR3d6vS = accounts[4]
		const addressAoYGJPz = accounts[1]
		const BACMARSLPTOKENPoolk56Rx5D = await BACMARSLPTOKENPool.new(addressqDCQScS, addressIR3d6vS, addressAoYGJPz, {from: accounts[3]});
		const byteavp3uT9 = "0x15061e1d1418041a081f200c0b051d1f0c1d050d140a16010f1c131108121d0b"
		const byteuXaSQeL = "0x0b16071403060a1a0e131d1401170d0f1012191f0e1b09160b170f1104161011"
		const uintSmwiEAR = BigInt("51")
		const uintyBKSV8v = BigInt("1075")
		const uintUocmOPl = BigInt("86")
		const uintF1D6RQV = BigInt("1041")
		const uintHb6ZkUH = BigInt("1295")
		const uintVk6zGWF = BigInt("2044")
//		const uint256Ws7JVtc = await BACMARSLPTOKENPoolk56Rx5D.stakeWithPermit.call(uintUocmOPl, uintyBKSV8v, uintSmwiEAR, byteuXaSQeL, byteavp3uT9, {from: accounts[2]});
//		const uint256SqEv7n1 = await BACMARSLPTOKENPoolk56Rx5D.withdraw.call(uintF1D6RQV, {from: accounts[4]});
//		const uint256UW98yq = await BACMARSLPTOKENPoolk56Rx5D.notifyRewardAmount.call(uintHb6ZkUH, {from: accounts[3]});
//		const uint256GQo47nT = await BACMARSLPTOKENPoolk56Rx5D.stake.call(uintVk6zGWF, {from: accounts[3]});

		await expect(BACMARSLPTOKENPoolk56Rx5D.stakeWithPermit.call(uintUocmOPl, uintyBKSV8v, uintSmwiEAR, byteuXaSQeL, byteavp3uT9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringA8GwYVa = "WB5VkAVA0WoHNGTOZ6gPRg3OrrSe0uwWv5qsy0bCbWJ2uRU5b3SUf"
		const stringvNQU6NT = "DD1c2ZBB5L"
		const uintMwe584 = BigInt("205")
		const BACMARSLPTOKENPoolcX9Iw6x = await BACMARSLPTOKENPool.new(stringA8GwYVa, stringvNQU6NT, uintMwe584, {from: accounts[3]});
		const uint256vT7Eh7h = await BACMARSLPTOKENPoolcX9Iw6x.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolcX9Iw6x.exit.call({from: accounts[4]});
		await BACMARSLPTOKENPoolcX9Iw6x.exit.call({from: accounts[3]});
		const uint256uNwK9tu = await BACMARSLPTOKENPoolcX9Iw6x.totalSupply.call({from: accounts[3]});
		await BACMARSLPTOKENPoolcX9Iw6x.nonReentrant.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressgEP4XWB = accounts[2]
		const addressrh6BdN6 = accounts[4]
		const addressYa0UnFA = accounts[1]
		const BACMARSLPTOKENPoolk56Rx5D = await BACMARSLPTOKENPool.new(addressgEP4XWB, addressrh6BdN6, addressYa0UnFA, {from: accounts[3]});
		const uintVoEBRJy = BigInt("1814")
		const uint4MeKqC = BigInt("2022")
//		const uint256Z03X08a = await BACMARSLPTOKENPoolk56Rx5D.withdraw.call(uintVoEBRJy, {from: accounts[5]});
//		const uint256GQo47nT = await BACMARSLPTOKENPoolk56Rx5D.stake.call(uint4MeKqC, {from: accounts[3]});

		await expect(BACMARSLPTOKENPoolk56Rx5D.withdraw.call(uintVoEBRJy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjrNxRN = "aEU1gfD0d84szubsPzqWtDyUS5V"
		const stringeAMSkiE = "XwoVWkEyuzck9utxEzkhjtUTaFnt2Y1UyKMBh9xROkRggeV4cmMd4YNUQygT9VzV89Ho"
		const uint8np8rd = BigInt("71")
		const BACMARSLPTOKENPoolQy6qrsG = await BACMARSLPTOKENPool.new(stringjrNxRN, stringeAMSkiE, uint8np8rd, {from: accounts[4]});
		const uintfuIxfNI = BigInt("60")
		const uint8pktlcky = await BACMARSLPTOKENPoolQy6qrsG.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256C0BFzhm = await BACMARSLPTOKENPoolQy6qrsG.stake.call(uintfuIxfNI, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLJDRGCL = "yWqDuRzYnewVjQEVtkNKYsdGqQMcT72xb8fEornWbLSBYLeW4jRHNuaYW5sgntmSm6NIwC7pkllh7IKtytkBuGLU"
		const stringj50QOTJ = "UwvvNwr0JW9Z0sGcPu5ehEAXAbNM3scTK7GUoFtiPgfm"
		const uintwZ4F22h = BigInt("216")
		const BACMARSLPTOKENPoolmGGvBYx = await BACMARSLPTOKENPool.new(stringLJDRGCL, stringj50QOTJ, uintwZ4F22h, {from: accounts[1]});
		const addressCTtcqRf = accounts[1]
		const addressngYNGu2 = accounts[1]
		const addressAGZs4IU = await BACMARSLPTOKENPoolmGGvBYx.updateReward.call(addressCTtcqRf, {from: accounts[3]});
		const uint256InMNBzm = await BACMARSLPTOKENPoolmGGvBYx.getRewardForDuration.call({from: accounts[3]});
		const uint256TNQiRja = await BACMARSLPTOKENPoolmGGvBYx.balanceOf.call(addressngYNGu2, {from: accounts[2]});
		const stringnFXtTMq = await BACMARSLPTOKENPoolmGGvBYx.symbol.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsL6lKv = "Q2nDPugJ22vsCbKSOMkoVbRH6T9PQui9fDLSJNeSLNSAo4P8RQPiRzaqLI7k8Nem3Z44steyVKkovwWczwwx"
		const stringHmypoDp = "4y9IexrLfn68RbvoM4Sb9M6uCyao1OpeILKVC6VKXMAv5jZ8v0oaV8a7hoRj"
		const uintzJL8GrB = BigInt("162")
		const BACMARSLPTOKENPoolWAu7xGT = await BACMARSLPTOKENPool.new(stringsL6lKv, stringHmypoDp, uintzJL8GrB, {from: accounts[5]});
		await BACMARSLPTOKENPoolWAu7xGT.onlyRewardsDistribution.call({from: accounts[4]});
		const stringfVzeyc = await BACMARSLPTOKENPoolWAu7xGT.name.call({from: accounts[0]});
		await BACMARSLPTOKENPoolWAu7xGT.nonReentrant.call({from: accounts[3]});
		const uint256bhUbKui = await BACMARSLPTOKENPoolWAu7xGT.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPoolWAu7xGT.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYCOCzGc = "6NTjt4zyW3aVtcSiC"
		const stringBrK7lZc = "vmVfFZF"
		const uintGiiayyY = BigInt("194")
		const BACMARSLPTOKENPoolfMYYjtg = await BACMARSLPTOKENPool.new(stringYCOCzGc, stringBrK7lZc, uintGiiayyY, {from: accounts[4]});
		const addresshFQ3ZEf = "0x0000000000000000000000000000000000000001"
		const uint256czQEfvq = await BACMARSLPTOKENPoolfMYYjtg.balanceOf.call(addresshFQ3ZEf, {from: accounts[1]});
		const uint256PNiHuj7 = await BACMARSLPTOKENPoolfMYYjtg.lastTimeRewardApplicable.call({from: accounts[1]});
		const stringz0TsdWr = await BACMARSLPTOKENPoolfMYYjtg.symbol.call({from: accounts[4]});
		await BACMARSLPTOKENPoolfMYYjtg.exit.call({from: accounts[4]});
		const uint256dvIA54w = await BACMARSLPTOKENPoolfMYYjtg.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMb4BzQg = "GvUMcBI8OJ6E7OUmprLAE3OrPplrJBIRLGcioPa1COBuQXeefOhfTDO"
		const stringPOuQCEy = "rOhgs17a1cbvTxnm4E3C6NfTM9KwFgeXy1p"
		const uintrJUquMl = BigInt("1")
		const BACMARSLPTOKENPoolSyRdjv4 = await BACMARSLPTOKENPool.new(stringMb4BzQg, stringPOuQCEy, uintrJUquMl, {from: accounts[4]});
		const addressp1859y4 = accounts[5]
		const bytetuDZnZm = "0x1e13151c050b1911110a16101b14201904051c1d0e0f01081f021d1912070520"
		const byteZOxlbRG = "0x0a0b1d1914020e0e0619121e03040f021f0e04010c1706151e110b0905111304"
		const uintkbmW13S = BigInt("7")
		const uintbbQwYVM = BigInt("528")
		const uintmrJAb0h = BigInt("416")
		const uintPHMuatK = BigInt("565")
		const uint256k1nDQi = await BACMARSLPTOKENPoolSyRdjv4.balanceOf.call(addressp1859y4, {from: accounts[3]});
		const uint256KrTz6kR = await BACMARSLPTOKENPoolSyRdjv4.stakeWithPermit.call(uintmrJAb0h, uintbbQwYVM, uintkbmW13S, byteZOxlbRG, bytetuDZnZm, {from: accounts[2]});
		const uint256Tj64Lm = await BACMARSLPTOKENPoolSyRdjv4.withdraw.call(uintPHMuatK, {from: accounts[3]});
		const uint8mD4c82 = await BACMARSLPTOKENPoolSyRdjv4.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringE7C2XpR = "OPu16hFA2W5a9hahB8yc2l1wFILTuzuZC2SNfINf3KlR5aB8q4YUFOH2rAAvSnossqNr2Wjbd95lavK"
		const stringUJFC4eb = "dqHBdI"
		const uinteabzFE = BigInt("181")
		const BACMARSLPTOKENPoolMvjhYOH = await BACMARSLPTOKENPool.new(stringE7C2XpR, stringUJFC4eb, uinteabzFE, {from: accounts[2]});
		const uinthS3bAFz = BigInt("1237")
		await BACMARSLPTOKENPoolMvjhYOH.getReward.call({from: accounts[3]});
		const uint256TNN6gXy = await BACMARSLPTOKENPoolMvjhYOH.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256NZvlI3 = await BACMARSLPTOKENPoolMvjhYOH.withdraw.call(uinthS3bAFz, {from: accounts[2]});
		await BACMARSLPTOKENPoolMvjhYOH.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolMvjhYOH.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressj5Gd4BY = accounts[2]
		const addressh1wXt0S = accounts[4]
		const address2lfoSS = accounts[1]
		const BACMARSLPTOKENPoolk56Rx5D = await BACMARSLPTOKENPool.new(addressj5Gd4BY, addressh1wXt0S, address2lfoSS, {from: accounts[3]});
		const uintcmLcob8 = BigInt("1928")
		const uintxzaKKmu = BigInt("1098")
//		await BACMARSLPTOKENPoolk56Rx5D.getReward.call({from: accounts[1]});
//		const uint256EVL28TG = await BACMARSLPTOKENPoolk56Rx5D.notifyRewardAmount.call(uintcmLcob8, {from: accounts[2]});
//		const uint256GQo47nT = await BACMARSLPTOKENPoolk56Rx5D.stake.call(uintxzaKKmu, {from: accounts[3]});
//		await BACMARSLPTOKENPoolk56Rx5D.exit.call({from: accounts[2]});
//		const uint256MdxuV1j = await BACMARSLPTOKENPoolk56Rx5D.getRewardForDuration.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolk56Rx5D.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLeYXXPH = "m9dA3F1dQ9Tu1fI3O1yEQ3tC3cqyrse4VfAeT3iLdsBO2uA6n9TCsM"
		const stringxUpMPGm = "zvxkriayQU8LvgAI9ClN"
		const uintEsgau4U = BigInt("136")
		const BACMARSLPTOKENPoolMOYsru1 = await BACMARSLPTOKENPool.new(stringLeYXXPH, stringxUpMPGm, uintEsgau4U, {from: accounts[4]});
		const addressBkKHPzx = accounts[5]
		const byteJBve4oX = "0x120a0505180a0f1c1e14011a1b050f0803150b09180d090f0f1a15060e080607"
		const byteXSRydhk = "0x161c001306141d1212101f0b1400181e090b14010d1411190c1403050a16100c"
		const uintbe7pCrG = BigInt("164")
		const uinti5xq7Nl = BigInt("1100")
		const uintTuIOtU = BigInt("956")
		const uintyW60rFQ = BigInt("1988")
		const uintvfUvtDo = BigInt("1234")
		const byteOnqu6jp = "0x1a1c190406000d191611020910010d1306091b0c1710090a141f070e100b0409"
		const bytexrjQRKM = "0x1c17060b031b14151e0901120c141d010e1c16051f14080917091c13170f1404"
		const uintsSBx91A = BigInt("121")
		const uintNioKTsm = BigInt("347")
		const uintYuPqLTG = BigInt("1827")
		const uint256JRMEkHg = await BACMARSLPTOKENPoolMOYsru1.balanceOf.call(addressBkKHPzx, {from: accounts[4]});
		await BACMARSLPTOKENPoolMOYsru1.nonReentrant.call({from: accounts[1]});
		const uint256a5u2JX = await BACMARSLPTOKENPoolMOYsru1.stakeWithPermit.call(uintTuIOtU, uinti5xq7Nl, uintbe7pCrG, byteXSRydhk, byteJBve4oX, {from: accounts[5]});
		const uint256xo80gbB = await BACMARSLPTOKENPoolMOYsru1.withdraw.call(uintyW60rFQ, {from: accounts[0]});
		const uint256Ele3eHd = await BACMARSLPTOKENPoolMOYsru1.notifyRewardAmount.call(uintvfUvtDo, {from: accounts[0]});
		const uint256DXlJsdv = await BACMARSLPTOKENPoolMOYsru1.stakeWithPermit.call(uintYuPqLTG, uintNioKTsm, uintsSBx91A, bytexrjQRKM, byteOnqu6jp, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMakH9iL = "IEieP"
		const stringoKya1an = "xwSdKX8iO8dOxbxXlKn3xSgcS0Rn"
		const uintJDbe3WZ = BigInt("92")
		const BACMARSLPTOKENPoolDu2NvXd = await BACMARSLPTOKENPool.new(stringMakH9iL, stringoKya1an, uintJDbe3WZ, {from: accounts[1]});
		const uintuUAXJiY = BigInt("177")
		const bytesyYkqp = "0x02181f030817011002071b0d051e19130b1418090d13151410181403011d0118"
		const bytefciervF = "0x000f02161110040815170d0711171b190b1b11020c0914151a081e16001c0510"
		const uintCXQb067 = BigInt("111")
		const uintcUHQZN4 = BigInt("1421")
		const uintNCXKbDW = BigInt("807")
		const addressmZTU0m8 = accounts[3]
		const stringboAysll = await BACMARSLPTOKENPoolDu2NvXd.symbol.call({from: accounts[4]});
		const uint256zNYShWN = await BACMARSLPTOKENPoolDu2NvXd.stake.call(uintuUAXJiY, {from: accounts[1]});
		const uint256rQqIEkR = await BACMARSLPTOKENPoolDu2NvXd.stakeWithPermit.call(uintNCXKbDW, uintcUHQZN4, uintCXQb067, bytefciervF, bytesyYkqp, {from: accounts[3]});
		const uint256qhigHHe = await BACMARSLPTOKENPoolDu2NvXd.earned.call(addressmZTU0m8, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnqlEmu = "mCHG5azJYAGnd7E9uCTnxDng1W1TKg5kFdU"
		const stringzdqgYh = "nH8kUMcCtV1hJv"
		const uintAfeKmbc = BigInt("35")
		const BACMARSLPTOKENPoolmoNcJxq = await BACMARSLPTOKENPool.new(stringnqlEmu, stringzdqgYh, uintAfeKmbc, {from: accounts[1]});
		const uintXmndNQ = BigInt("1516")
		const uintXwOCXtM = BigInt("266")
		const byteODL3gbP = "0x16080711100b1c180c17160a130a1d021f1b1400061b11070b1e0e09191e0619"
		const byteGO5FJzW = "0x021f0e0b13011516160103011a140706080c1303181400150d1e17150c1f1b05"
		const uintvCbQgw = BigInt("45")
		const uintOpSHrmg = BigInt("1815")
		const uintsF0IitF = BigInt("828")
		const uint256cNOm9QT = await BACMARSLPTOKENPoolmoNcJxq.stake.call(uintXmndNQ, {from: accounts[5]});
		const uint256CneyWH9 = await BACMARSLPTOKENPoolmoNcJxq.getRewardForDuration.call({from: accounts[5]});
		const uint256S9lNfRY = await BACMARSLPTOKENPoolmoNcJxq.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256CvfhWez = await BACMARSLPTOKENPoolmoNcJxq.withdraw.call(uintXwOCXtM, {from: accounts[4]});
		const uint256ZlkzWss = await BACMARSLPTOKENPoolmoNcJxq.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256MaqwCGH = await BACMARSLPTOKENPoolmoNcJxq.stakeWithPermit.call(uintsF0IitF, uintOpSHrmg, uintvCbQgw, byteGO5FJzW, byteODL3gbP, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPT7RnCA = "R0WxAstNuTUUOCC2q4aUBCZd7vUHvMuZApwzR2cKzL3gxHOSx0qIrycw1QzUY62PJdkohFcYBq"
		const stringh9d85cs = "9h"
		const uinto1DI9p = BigInt("230")
		const BACMARSLPTOKENPoolZnjytGg = await BACMARSLPTOKENPool.new(stringPT7RnCA, stringh9d85cs, uinto1DI9p, {from: accounts[3]});
		const byteFWf6Iy = "0x1e16181803080c1e0e0815001a1d05041b090c0213031a09030902191600040a"
		const bytebLsx4eb = "0x01130b06061b1f1b1f061b0c18140604031c0c14121416120a00171020151b16"
		const uintTgnzJBD = BigInt("32")
		const uinthcuo3nG = BigInt("466")
		const uintaI4wvg5 = BigInt("815")
		const stringTXJoM2c = await BACMARSLPTOKENPoolZnjytGg.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gcPZKgR = await BACMARSLPTOKENPoolZnjytGg.stakeWithPermit.call(uintaI4wvg5, uinthcuo3nG, uintTgnzJBD, bytebLsx4eb, byteFWf6Iy, {from: accounts[3]});
		const uint256lttgMR1 = await BACMARSLPTOKENPoolZnjytGg.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbqJHqzV = "igANzcYmVlzCcYPF7ynryFsGJhSo2ihMGpJpBS3IhqKc6HFuCHiPz1rk0cmsSZclkMgwx2E8"
		const stringKwOE4Y2 = "bLIF15BflBJlrUM5Hs4YbF2P"
		const uintHWkZc1x = BigInt("232")
		const BACMARSLPTOKENPoolZUIDDKI = await BACMARSLPTOKENPool.new(stringbqJHqzV, stringKwOE4Y2, uintHWkZc1x, {from: "0x0000000000000000000000000000000000000001"});
		const byteoc5Wfzt = "0x0116080e20051e1b190a19061f0f0617101407030b0208191011100b11020b14"
		const byterBXdX21 = "0x14120911051f0807080517010e1417071d001a12110f0f0b151e140f1103161c"
		const uint32yKWM = BigInt("19")
		const uintIi0vndo = BigInt("1237")
		const uintSfZnhrg = BigInt("285")
		const addresspkFAIBm = accounts[5]
		const uint256BiHoJoT = await BACMARSLPTOKENPoolZUIDDKI.stakeWithPermit.call(uintSfZnhrg, uintIi0vndo, uint32yKWM, byterBXdX21, byteoc5Wfzt, {from: accounts[4]});
		const uint256QLwcVR = await BACMARSLPTOKENPoolZUIDDKI.totalSupply.call({from: accounts[4]});
		const uint256ydmlxqh = await BACMARSLPTOKENPoolZUIDDKI.earned.call(addresspkFAIBm, {from: accounts[4]});
		await BACMARSLPTOKENPoolZUIDDKI.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringv4JBe2U = "eK25KMf8k5Ifv6o2"
		const stringxHGD67z = "y"
		const uintQRZTwot = BigInt("180")
		const BACMARSLPTOKENPoolmm08XoK = await BACMARSLPTOKENPool.new(stringv4JBe2U, stringxHGD67z, uintQRZTwot, {from: accounts[5]});
		const uinttMbUf5 = BigInt("1646")
		await BACMARSLPTOKENPoolmm08XoK.exit.call({from: accounts[4]});
		await BACMARSLPTOKENPoolmm08XoK.getReward.call({from: accounts[1]});
		const uint256Os9YnPF = await BACMARSLPTOKENPoolmm08XoK.withdraw.call(uinttMbUf5, {from: accounts[0]});
		await BACMARSLPTOKENPoolmm08XoK.nonReentrant.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMuqhtsL = "ZRo"
		const stringxukZ7IE = "HNkNJRTHAJM48QrfAFuoLK3awDt652P87QWRLUKzu"
		const uintCUnFwn = BigInt("114")
		const BACMARSLPTOKENPoolKkqNMXO = await BACMARSLPTOKENPool.new(stringMuqhtsL, stringxukZ7IE, uintCUnFwn, {from: accounts[1]});
		const uint256wPL15yS = await BACMARSLPTOKENPoolKkqNMXO.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolKkqNMXO.getReward.call({from: accounts[1]});
		const uint256eOYJSQ1 = await BACMARSLPTOKENPoolKkqNMXO.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUWZ4FU7 = "oAs3Sd1aVwA84ZvQd9U"
		const stringLb18r1R = "yX8mrjHb3twA0cLNCewheaj3E2wwQ9JopoN7rEYM6IF9P2HRciZYiPWUvU77b9InZI6dTeEP72HPp8p4oIQxPQlRV7rJCUoTs"
		const uintrbeeVvr = BigInt("150")
		const BACMARSLPTOKENPoolCtD0uam = await BACMARSLPTOKENPool.new(stringUWZ4FU7, stringLb18r1R, uintrbeeVvr, {from: accounts[2]});
		const uintaCuf3ZH = BigInt("1015")
		const uintkXGOnUd = BigInt("1008")
		await BACMARSLPTOKENPoolCtD0uam.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256Y5TE5O = await BACMARSLPTOKENPoolCtD0uam.stake.call(uintaCuf3ZH, {from: accounts[4]});
		const uint256yNhu0PD = await BACMARSLPTOKENPoolCtD0uam.stake.call(uintkXGOnUd, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ljSoQlX = await BACMARSLPTOKENPoolCtD0uam.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJsf3PN4 = "lSZtblCcKkswCypOFe3e3gicLwRYYmMDNI6mGLzsyTGuwDyBPg"
		const stringQuyj82p = "99vOYyODINbw3lhjEJCqJDTrqCDDxwbQMHKzXuMo0k4HsKfkdRt8QNBaEHG1N5ar0kLEWc5NMO8DLS0dXaF4CCh"
		const uintkSymzf = BigInt("194")
		const BACMARSLPTOKENPoolRDJOwS1 = await BACMARSLPTOKENPool.new(stringJsf3PN4, stringQuyj82p, uintkSymzf, {from: accounts[4]});
		const uint256C8nJBKf = await BACMARSLPTOKENPoolRDJOwS1.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256IxDF43V = await BACMARSLPTOKENPoolRDJOwS1.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolRDJOwS1.getReward.call({from: accounts[1]});
		await BACMARSLPTOKENPoolRDJOwS1.getReward.call({from: accounts[5]});
		const uint256lMB7Mo = await BACMARSLPTOKENPoolRDJOwS1.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringL6L2TXE = "91xySMcjzWNkLd6LPZwPXJ9"
		const stringGUQrqBN = "68iZD1jPFGjVM2DV4ScBTKdSqPmxuI6cLN0u3sZEMuEOUS6CrMQHr9pOESOEcX8NQk"
		const uintgJYp7g8 = BigInt("153")
		const BACMARSLPTOKENPoolLQhUxdm = await BACMARSLPTOKENPool.new(stringL6L2TXE, stringGUQrqBN, uintgJYp7g8, {from: accounts[1]});
		const addresse9Gll5Q = accounts[1]
		const uinthGypnbT = BigInt("257")
		const uint256OID1bns = await BACMARSLPTOKENPoolLQhUxdm.balanceOf.call(addresse9Gll5Q, {from: accounts[2]});
		const uint256BJc79co = await BACMARSLPTOKENPoolLQhUxdm.stake.call(uinthGypnbT, {from: accounts[2]});
		await BACMARSLPTOKENPoolLQhUxdm.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgJJiX1D = "FDg"
		const stringdZ5K6XS = "fhlL99jjXSH3t6jUIqMHmmJ3QMW5r"
		const uintphmjU0a = BigInt("90")
		const BACMARSLPTOKENPoolIgf3ihE = await BACMARSLPTOKENPool.new(stringgJJiX1D, stringdZ5K6XS, uintphmjU0a, {from: accounts[4]});
		const byteTiwm0Ci = "0x0103180e171802051e0e0e091a10051b1a0c060b1d09060f0e1e0d18111d0616"
		const byten0VkA1a = "0x15021e1701180e05021811141714080e141814190f200d1d1f1b03040a01071e"
		const uintns0ebUC = BigInt("174")
		const uintUZ9VnPa = BigInt("606")
		const uintbxfIc7C = BigInt("241")
		const uint256DLUXSqR = await BACMARSLPTOKENPoolIgf3ihE.rewardPerToken.call({from: accounts[4]});
		const stringissV3BS = await BACMARSLPTOKENPoolIgf3ihE.symbol.call({from: accounts[4]});
		const uint256NcI3dKR = await BACMARSLPTOKENPoolIgf3ihE.stakeWithPermit.call(uintbxfIc7C, uintUZ9VnPa, uintns0ebUC, byten0VkA1a, byteTiwm0Ci, {from: "0x0000000000000000000000000000000000000001"});
		const stringjU0xPt = await BACMARSLPTOKENPoolIgf3ihE.symbol.call({from: accounts[5]});
		await BACMARSLPTOKENPoolIgf3ihE.onlyRewardsDistribution.call({from: accounts[3]});
		await BACMARSLPTOKENPoolIgf3ihE.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuMFKQwX = "IPF7vrbhfhUynUrf2r6453WUFWhalj9KBOLTk2wssWmuJUqiqERJjCsiLUUCsb771rTJ"
		const stringKIAK8uI = "5T0TsTTH4CZVemqTWiGzzo4X5s8xDv"
		const uintHKijXqG = BigInt("114")
		const BACMARSLPTOKENPoolM3vkcZu = await BACMARSLPTOKENPool.new(stringuMFKQwX, stringKIAK8uI, uintHKijXqG, {from: accounts[4]});
		const uintxEqJh1Z = BigInt("1171")
		const bytepf3fMLr = "0x1800161c01171e10170d1f0f05151b01081e1e01130a0b180c1b1d170500150a"
		const byteNNg5DXL = "0x05051a030b040c171c0d19030b2017181e000605070c011b1812020b0f08060c"
		const uintVpkQHES = BigInt("191")
		const uintrkXf74b = BigInt("551")
		const uintqfH45aM = BigInt("583")
		await BACMARSLPTOKENPoolM3vkcZu.onlyRewardsDistribution.call({from: accounts[0]});
		await BACMARSLPTOKENPoolM3vkcZu.nonReentrant.call({from: accounts[3]});
		const uint256E6MZb1Y = await BACMARSLPTOKENPoolM3vkcZu.withdraw.call(uintxEqJh1Z, {from: accounts[1]});
		const uint256vNRc6Kz = await BACMARSLPTOKENPoolM3vkcZu.stakeWithPermit.call(uintqfH45aM, uintrkXf74b, uintVpkQHES, byteNNg5DXL, bytepf3fMLr, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHWo3dWG = "hVKwbAfd6iXedgyvDZmZZ7pPbpnqgm4SzF4WA4laoOlAsX92uj1XEKj2gShQLDOcMghnBbbj6SQVhHLssB74w2SH7pj35XDglc"
		const stringyhFalPZ = "OeM9ANw0Jwx3SoOEEhPE92SPlFDYXmV9mlsUpp2jB726sgw4uzIxVXLRIsTtMF9Kf5rgeWCbkoXMVRR4w"
		const uintDOIciAP = BigInt("247")
		const BACMARSLPTOKENPoolM51NUMe = await BACMARSLPTOKENPool.new(stringHWo3dWG, stringyhFalPZ, uintDOIciAP, {from: accounts[3]});
		const uintUeM5Rfz = BigInt("1356")
		const uintGPQignA = BigInt("55")
		const byteWFcKDJg = "0x0c0c0c1b09041503170f0c11080705150e010702111f1f070f0c01061e031c1b"
		const bytewI0h2Y = "0x070b0d1b0a0f1a1e070a201207140b1b1f030b1e001e15160e0e191b150e1f15"
		const uintaL9i0ut = BigInt("197")
		const uintbgwGVg4 = BigInt("1413")
		const uintRb4D2qF = BigInt("501")
		const uint256lAr49fb = await BACMARSLPTOKENPoolM51NUMe.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256XCGJe4H = await BACMARSLPTOKENPoolM51NUMe.notifyRewardAmount.call(uintUeM5Rfz, {from: accounts[0]});
		const uint256kYFDlf = await BACMARSLPTOKENPoolM51NUMe.withdraw.call(uintGPQignA, {from: accounts[1]});
		const uint256RljNHww = await BACMARSLPTOKENPoolM51NUMe.stakeWithPermit.call(uintRb4D2qF, uintbgwGVg4, uintaL9i0ut, bytewI0h2Y, byteWFcKDJg, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringA37yB4 = "Sfcm86yKY39sWUyuHSjAqOtupcElUhxfdi5JnDaq96wRqVwL6NVrkp4NsyURloEQbike"
		const stringdOzzELz = "eweJdh017MRLVPYCWk4yqGrdtiCWhWtEnQ2dYRYHvXzAmhbSe1qafxte"
		const uintVru5Q0O = BigInt("31")
		const BACMARSLPTOKENPoolMGXBCF1 = await BACMARSLPTOKENPool.new(stringA37yB4, stringdOzzELz, uintVru5Q0O, {from: accounts[2]});
		const uintvYLDyoD = BigInt("1237")
		const bytes5WWSLH = "0x1809050b0c18090a0a030e16130e01130f180b0a080506180a1c0c0a020b0d1c"
		const byteW5bmM7Q = "0x140707131d1d1f15121b1f0f10101317071a081e12191e0c031a05160f171204"
		const uintdBr7eL9 = BigInt("40")
		const uint5RDboy = BigInt("439")
		const uintWLue93z = BigInt("103")
		const uintymZ2bfN = BigInt("751")
		const uint256kvpm1cx = await BACMARSLPTOKENPoolMGXBCF1.stake.call(uintvYLDyoD, {from: accounts[5]});
		const uint256pde27V = await BACMARSLPTOKENPoolMGXBCF1.stakeWithPermit.call(uintWLue93z, uint5RDboy, uintdBr7eL9, byteW5bmM7Q, bytes5WWSLH, {from: accounts[5]});
		const uint256EsJOp77 = await BACMARSLPTOKENPoolMGXBCF1.notifyRewardAmount.call(uintymZ2bfN, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOFAZ7z = "LSfpaenCijRxM"
		const stringEuEn03a = "BhEdFqmeOToUiQ6mjhn0sxXMsIwk60Z7Mt845tOuPotCamcGW7CYGcAcqwtEpqor"
		const uintCS26P4a = BigInt("66")
		const BACMARSLPTOKENPoolMRVSv1M = await BACMARSLPTOKENPool.new(stringOFAZ7z, stringEuEn03a, uintCS26P4a, {from: accounts[2]});
		const addressrfgj1yY = accounts[4]
		const uintI7O3Agw = BigInt("1253")
		await BACMARSLPTOKENPoolMRVSv1M.getReward.call({from: accounts[4]});
		const uint256tkdmyi = await BACMARSLPTOKENPoolMRVSv1M.balanceOf.call(addressrfgj1yY, {from: accounts[3]});
		const stringuOwLHdI = await BACMARSLPTOKENPoolMRVSv1M.name.call({from: accounts[5]});
		const uint256eaXA4T = await BACMARSLPTOKENPoolMRVSv1M.withdraw.call(uintI7O3Agw, {from: accounts[3]});
		await BACMARSLPTOKENPoolMRVSv1M.getReward.call({from: accounts[0]});
		await BACMARSLPTOKENPoolMRVSv1M.nonReentrant.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnrOA78Z = "SNpRmsaLCXnxQJAnaX6VghFmhsFvxiarmyzptNfsVmrabbty7giCYpi1KadYDsN6d3b"
		const stringuT4wkOx = "wi16pFxYCVmSFNhldFTGIdcfpP9NgPLisNd8NFw4jb6Lt1ODMAM"
		const uintnoJLOaT = BigInt("12")
		const BACMARSLPTOKENPoolfDA0wH = await BACMARSLPTOKENPool.new(stringnrOA78Z, stringuT4wkOx, uintnoJLOaT, {from: accounts[3]});
		const stringTir6rVa = await BACMARSLPTOKENPoolfDA0wH.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPoolfDA0wH.getReward.call({from: accounts[4]});
		const uint256M2ssAyg = await BACMARSLPTOKENPoolfDA0wH.totalSupply.call({from: accounts[2]});
		const uint8eQTXEM8 = await BACMARSLPTOKENPoolfDA0wH.decimals.call({from: accounts[0]});
		const uint256j53TVge = await BACMARSLPTOKENPoolfDA0wH.lastTimeRewardApplicable.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZHQ6Ot = "HTGvt7YNSFN3VA5pEzRztDVsXPb4lmHsoWIde4M5CpT0dx6EEONdRjDr2LxGzKEJGjUtGVGtW4YyIj8OCq1aSBRSpEu"
		const stringOEaZLYh = "jAXuRkhldRI732nVKvXRTYM7xbU5Hdyy"
		const uintZ45pjqK = BigInt("243")
		const BACMARSLPTOKENPoolFOnpnTF = await BACMARSLPTOKENPool.new(stringZHQ6Ot, stringOEaZLYh, uintZ45pjqK, {from: accounts[2]});
		const addressIwbyWX0 = accounts[4]
		await BACMARSLPTOKENPoolFOnpnTF.nonReentrant.call({from: accounts[0]});
		const uint256yltfsUp = await BACMARSLPTOKENPoolFOnpnTF.balanceOf.call(addressIwbyWX0, {from: accounts[0]});
		await BACMARSLPTOKENPoolFOnpnTF.getReward.call({from: accounts[2]});
		const uint256e5quWkC = await BACMARSLPTOKENPoolFOnpnTF.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringF8QxquS = "9N57GYiHaNjjmBhRZFqagrXWqeFfCyx8UtBbzYKqtIQpSO7XKN7ARWACeex"
		const stringgb3zRvd = "cfuvc7yHAo9iKfBEyjN"
		const uintDZSoIZg = BigInt("198")
		const BACMARSLPTOKENPoolvvcW8M3 = await BACMARSLPTOKENPool.new(stringF8QxquS, stringgb3zRvd, uintDZSoIZg, {from: accounts[0]});
		const uint256qMjFTY = await BACMARSLPTOKENPoolvvcW8M3.rewardPerToken.call({from: accounts[5]});
		await BACMARSLPTOKENPoolvvcW8M3.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPoolvvcW8M3.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256cjtzu7m = await BACMARSLPTOKENPoolvvcW8M3.getRewardForDuration.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSKaVL5b = "4z6XvK71TdiAO0mex7WLre33MHrImp8Wmdd1yUG6efAa"
		const stringMwRp8Cj = "7KVrddU1lvgMQFGVMuiUO8MxYBdRoOr947sKhoGDS6Va15cxKE"
		const uintpHXSD7l = BigInt("61")
		const BACMARSLPTOKENPoolsfnmT0r = await BACMARSLPTOKENPool.new(stringSKaVL5b, stringMwRp8Cj, uintpHXSD7l, {from: accounts[4]});
		const uint256KQkfZ1F = await BACMARSLPTOKENPoolsfnmT0r.getRewardForDuration.call({from: accounts[1]});
		const stringNXgtiSJ = await BACMARSLPTOKENPoolsfnmT0r.name.call({from: accounts[1]});
		const stringzViguM3 = await BACMARSLPTOKENPoolsfnmT0r.name.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringw7Zyx9G = "V8SGCQQ2OMlCdhFw86ospsDpmOvvSMuHCFaprAGFnpESOlCmjzfA1HIQEFsDQxojHTQPKBu"
		const stringNWYvdMj = "9su94JmtDUMokOGR2FpVjdXMEhD4ot6bX9lP1eh3LXTUuHZKYXiOsTRdOBZMNuBcvzckTLrP"
		const uintcL0OFp4 = BigInt("113")
		const BACMARSLPTOKENPoolwYd7duj = await BACMARSLPTOKENPool.new(stringw7Zyx9G, stringNWYvdMj, uintcL0OFp4, {from: "0x0000000000000000000000000000000000000001"});
		const byteYhw6BYJ = "0x011c02131c1f0d131e101a191c1a0201050212091205061f090b170713161515"
		const byteV41fimF = "0x16080f0405160d191a030e071f1006140f040619160409141e0809080d1b0f1c"
		const uintX5zK1Ke = BigInt("62")
		const uintlg0yNF3 = BigInt("52")
		const uintW8OZAYW = BigInt("1462")
		const stringZexPJiu = await BACMARSLPTOKENPoolwYd7duj.name.call({from: accounts[0]});
		const uint256Xe0FfWx = await BACMARSLPTOKENPoolwYd7duj.stakeWithPermit.call(uintW8OZAYW, uintlg0yNF3, uintX5zK1Ke, byteV41fimF, byteYhw6BYJ, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringL5O3Edu = "wL6VbV0Ll69cGCowIzLwVfTuXj2a54oEJxRlsg6GcdHT4U3Fe7I"
		const stringhSQEJp6 = "HO3n1L7OJq1Cez1Pyjze9c2FWXAchmDGS46FCsE5f"
		const uintOfuvKn0 = BigInt("245")
		const BACMARSLPTOKENPoolxDp3MOz = await BACMARSLPTOKENPool.new(stringL5O3Edu, stringhSQEJp6, uintOfuvKn0, {from: accounts[0]});
		const addressJQ5Ab8E = "0x0000000000000000000000000000000000000001"
		const addressVlI2O7A = accounts[0]
		const uint256a4F00PI = await BACMARSLPTOKENPoolxDp3MOz.balanceOf.call(addressJQ5Ab8E, {from: accounts[1]});
		const uint256V62wTEl = await BACMARSLPTOKENPoolxDp3MOz.earned.call(addressVlI2O7A, {from: accounts[4]});
		const uint256idMhF16 = await BACMARSLPTOKENPoolxDp3MOz.getRewardForDuration.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHnS5Em = "RCqIHkuuaREgLDbXbf"
		const stringiJQlnmV = "OdkK20UTUSLprMDd3z3zgCcZ5MYdxeyc7zumdAvQTYstWsl4oSxflyTZVt5SzOTizKBevix"
		const uintS6Ht8U2 = BigInt("200")
		const BACMARSLPTOKENPoolExqP3WG = await BACMARSLPTOKENPool.new(stringHnS5Em, stringiJQlnmV, uintS6Ht8U2, {from: accounts[1]});
		const addressyxP81FC = "0x0000000000000000000000000000000000000001"
		const uintrZBZROR = BigInt("1968")
		const uint256wDQRWzd = await BACMARSLPTOKENPoolExqP3WG.earned.call(addressyxP81FC, {from: accounts[4]});
		const uint256eNPdeig = await BACMARSLPTOKENPoolExqP3WG.withdraw.call(uintrZBZROR, {from: accounts[2]});
		const uint256VoSXFqv = await BACMARSLPTOKENPoolExqP3WG.rewardPerToken.call({from: accounts[1]});
		const uint256c3mPYpA = await BACMARSLPTOKENPoolExqP3WG.rewardPerToken.call({from: accounts[4]});
		const uint256ZpxTm3n = await BACMARSLPTOKENPoolExqP3WG.rewardPerToken.call({from: accounts[0]});
		await BACMARSLPTOKENPoolExqP3WG.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEQ2JOes = "oBUT76gn2"
		const stringZZbkG8q = "b8M6qbl"
		const uinteNw2SKi = BigInt("233")
		const BACMARSLPTOKENPoolAvReQwo = await BACMARSLPTOKENPool.new(stringEQ2JOes, stringZZbkG8q, uinteNw2SKi, {from: accounts[0]});
		await BACMARSLPTOKENPoolAvReQwo.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolAvReQwo.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256mkxmAp = await BACMARSLPTOKENPoolAvReQwo.lastTimeRewardApplicable.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringp6DZW1p = "vOTtvCMTNDnuaVPIanC3yS6JIBDZAwdfgjFMFfFPHV7oCZy1k154SSqxCXKGaa5t4mfDPKSRN"
		const stringSZ6lTjn = "zaP88P"
		const uinti6ozbQg = BigInt("148")
		const BACMARSLPTOKENPoolhIK44Ej = await BACMARSLPTOKENPool.new(stringp6DZW1p, stringSZ6lTjn, uinti6ozbQg, {from: accounts[1]});
		const uintRUlwCxd = BigInt("1364")
		const uint256DSOBhxw = await BACMARSLPTOKENPoolhIK44Ej.stake.call(uintRUlwCxd, {from: accounts[2]});
		await BACMARSLPTOKENPoolhIK44Ej.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPoolhIK44Ej.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyHWuHw = "KhI5Go3dkN1AGuTyX3FX7ppFKNvTjOWAVIAq7ypft3M9RQc"
		const stringqCJnvhA = "HQdyEFT7sQORSaYgL8uX7ZIKQTHqBs0UiNDJvFAgYb6E"
		const uintGlJvq1O = BigInt("188")
		const BACMARSLPTOKENPoolA3mouL2 = await BACMARSLPTOKENPool.new(stringyHWuHw, stringqCJnvhA, uintGlJvq1O, {from: accounts[2]});
		const addressN4mOKSV = accounts[0]
		const uint256jsiXSr = await BACMARSLPTOKENPoolA3mouL2.balanceOf.call(addressN4mOKSV, {from: accounts[3]});
		await BACMARSLPTOKENPoolA3mouL2.exit.call({from: accounts[2]});
		const uint256slkSSLA = await BACMARSLPTOKENPoolA3mouL2.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolA3mouL2.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLy3CKlK = "UHnbzMzqvRqLYeaKGunX3OgzhNzxhkb74E72h8w5QvsOUg8IsYvs"
		const stringARXyYD = "vC9jjgniq5edeOhDJNs1m2ab2XkyS3Rmc7KBWkbm8nCD2v9eu"
		const uintNQbFpU1 = BigInt("23")
		const BACMARSLPTOKENPoolSNPaVBH = await BACMARSLPTOKENPool.new(stringLy3CKlK, stringARXyYD, uintNQbFpU1, {from: accounts[5]});
		const addressbRSPh8n = accounts[4]
		const addressbTZOyD1 = accounts[4]
		const addressf0gQt9 = accounts[1]
		await BACMARSLPTOKENPoolSNPaVBH.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const addressNE9PWO0 = await BACMARSLPTOKENPoolSNPaVBH.updateReward.call(addressbRSPh8n, {from: accounts[4]});
		await BACMARSLPTOKENPoolSNPaVBH.exit.call({from: accounts[0]});
		const uint2563J7dcI = await BACMARSLPTOKENPoolSNPaVBH.earned.call(addressbTZOyD1, {from: accounts[4]});
		const uint256q8lRS87 = await BACMARSLPTOKENPoolSNPaVBH.balanceOf.call(addressf0gQt9, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqEr7dQ0 = "h"
		const stringMlOWCvp = "2QvoGhMWX5OLyPsr53VAsRl0j3or3YxzXGRtsDMlelsnfaO5NNMp"
		const uint3T0Ytt = BigInt("200")
		const BACMARSLPTOKENPoolFpdlZXP = await BACMARSLPTOKENPool.new(stringqEr7dQ0, stringMlOWCvp, uint3T0Ytt, {from: accounts[4]});
		const addressPNgiKGm = accounts[2]
		const uint256Vw7bhhV = await BACMARSLPTOKENPoolFpdlZXP.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolFpdlZXP.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256EXguB5p = await BACMARSLPTOKENPoolFpdlZXP.rewardPerToken.call({from: accounts[5]});
		const uint256F3Kuhn = await BACMARSLPTOKENPoolFpdlZXP.balanceOf.call(addressPNgiKGm, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCB2b4ov = "EcgYQFDKFB8ggxY5HFmI5tOSDCQxekc8AIHcBjNzr9EuI8YUy1r99gz2x2c8kFB9ldbRRjimH2EOQ6LFX2DOg"
		const stringBiq7Zu = "E"
		const uinteCIZcV = BigInt("44")
		const BACMARSLPTOKENPoolsW4mYa = await BACMARSLPTOKENPool.new(stringCB2b4ov, stringBiq7Zu, uinteCIZcV, {from: accounts[0]});
		const uintg8gyqe0 = BigInt("902")
		const uintOhFErdQ = BigInt("395")
		const uint256Hw2A8WM = await BACMARSLPTOKENPoolsW4mYa.notifyRewardAmount.call(uintg8gyqe0, {from: accounts[3]});
		const uint256tiIii1L = await BACMARSLPTOKENPoolsW4mYa.totalSupply.call({from: accounts[2]});
		const uint256jL0f83O = await BACMARSLPTOKENPoolsW4mYa.notifyRewardAmount.call(uintOhFErdQ, {from: accounts[3]});
		const uint256UXVBYp = await BACMARSLPTOKENPoolsW4mYa.rewardPerToken.call({from: accounts[0]});
	});
})