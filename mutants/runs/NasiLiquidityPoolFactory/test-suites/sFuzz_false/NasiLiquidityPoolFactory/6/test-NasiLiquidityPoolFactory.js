const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressRaKIQmg = accounts[2]
		const addressVdKRT2q = "0x0000000000000000000000000000000000000001"
		const uintsy8txh = BigInt("1263")
		const uintRU3EU19 = BigInt("367")
		const NasiLiquidityPoolFactoryviZ4nf9 = await NasiLiquidityPoolFactory.new(addressRaKIQmg, addressVdKRT2q, uintsy8txh, uintRU3EU19, {from: accounts[2]});
		const addressl8wdbJn = accounts[3]
		const addressbtmtUo = accounts[3]
		const uintNlyf3lM = BigInt("1484")
		const addressdcXqw2 = accounts[5]
		const addressuey8iBZ = accounts[1]
		const uintz7HLdsz = BigInt("17")
		const addressNnocO2l = accounts[4]
		const addressj45XJKi = await NasiLiquidityPoolFactoryviZ4nf9._delegate.call(addressbtmtUo, addressl8wdbJn, {from: accounts[0]});
		const boolcO5o01A = await NasiLiquidityPoolFactoryviZ4nf9.transferFrom.call(addressuey8iBZ, addressdcXqw2, uintNlyf3lM, {from: accounts[3]});
		const uint256AkW7tB2 = await NasiLiquidityPoolFactoryviZ4nf9.migrate.call(uintz7HLdsz, {from: accounts[0]});
		const addresse8Ks5Ym = await NasiLiquidityPoolFactoryviZ4nf9.addPauser.call(addressNnocO2l, {from: accounts[2]});

		await expect(NasiLiquidityPoolFactoryviZ4nf9._delegate.call(addressbtmtUo, addressl8wdbJn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringjVWRaCa = "UcHflyT8fcRddbjdxJbtpMi6gr8zq5Enk36vKKPettgnG6xos72yfAy3BDOVJmChHY3B3D"
		const stringPMOOOB = "m"
		const uinttZVjdXP = BigInt("166")
		const NasiLiquidityPoolFactoryyDe1Ohe = await NasiLiquidityPoolFactory.new(stringjVWRaCa, stringPMOOOB, uinttZVjdXP, {from: accounts[0]});
		const boolgFQCSri = false
		const uinto11xap = BigInt("354")
		const uintIZcNdtx = BigInt("1946")
		const uintqHE22mU = BigInt("1033")
		const uintSCSUVB8 = BigInt("1087")
		await NasiLiquidityPoolFactoryyDe1Ohe.unpause.call({from: accounts[0]});
		const uint2567CGVuu = await NasiLiquidityPoolFactoryyDe1Ohe.setAllocationPoint.call(uintIZcNdtx, uinto11xap, boolgFQCSri, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hGs3rT = await NasiLiquidityPoolFactoryyDe1Ohe.deposit.call(uintSCSUVB8, uintqHE22mU, {from: accounts[1]});
		await NasiLiquidityPoolFactoryyDe1Ohe.pause.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringO9P0zMD = "rPtSyEwJi4r9P"
		const stringQVHddC8 = "gjKX4byYSvCSy1bTial6YMgJzjNd67RQ2bMaOozQEJQq1VyBYLiUnslJecVZY7PFJXbVC4uUeIpQN0ESwRe1098w5JDaFl"
		const uinttOZawOi = BigInt("183")
		const NasiLiquidityPoolFactoryYcIrCya = await NasiLiquidityPoolFactory.new(stringO9P0zMD, stringQVHddC8, uinttOZawOi, {from: "0x0000000000000000000000000000000000000001"});
		const addressBQyNs7f = accounts[4]
		const uintNSg2T8K = BigInt("936")
		const addressJBx0Snn = "0x0000000000000000000000000000000000000001"
		const uintTDAg0jJ = BigInt("2043")
		const addressA9oSvac = accounts[1]
		const addressebw08Up = accounts[0]
		const boolt3s1j7l = await NasiLiquidityPoolFactoryYcIrCya.isPauser.call(addressBQyNs7f, {from: accounts[0]});
		const boolZQlKBc = await NasiLiquidityPoolFactoryYcIrCya.transfer.call(addressJBx0Snn, uintNSg2T8K, {from: accounts[2]});
		const uint256SAnozl5 = await NasiLiquidityPoolFactoryYcIrCya.getPriorVotes.call(addressA9oSvac, uintTDAg0jJ, {from: accounts[5]});
		const addressUO5xZC = await NasiLiquidityPoolFactoryYcIrCya.delegates.call(addressebw08Up, {from: accounts[5]});
		await NasiLiquidityPoolFactoryYcIrCya.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryYcIrCya.renounceMinter.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringahoUIPS = "s53vih6GcbELlQupoYSpGuKc40olz0IPPRB3eiiEqv3kGbbF9sTR8M"
		const stringSqeG8JL = "Y9fz2bXIptNtQgfMQ5gtZ2PkEIVi98HoU5PUvTQCQJsjFoDyAyAB012GcU2ozrDBTgB6muQLlZ7bobrUU9"
		const uintUDrHorY = BigInt("229")
		const NasiLiquidityPoolFactoryUTOV1nh = await NasiLiquidityPoolFactory.new(stringahoUIPS, stringSqeG8JL, uintUDrHorY, {from: accounts[2]});
		const addressLSrYdYT = accounts[1]
		const uintceNGKUY = BigInt("1715")
		const addressxIBNqS = accounts[2]
		await NasiLiquidityPoolFactoryUTOV1nh.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryUTOV1nh.renouncePauser.call({from: accounts[1]});
		const addressHKFqjZ7 = await NasiLiquidityPoolFactoryUTOV1nh.delegates.call(addressLSrYdYT, {from: accounts[0]});
		const boolE7f1BG5 = await NasiLiquidityPoolFactoryUTOV1nh.mint.call(addressxIBNqS, uintceNGKUY, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringn5PnlW = "kuu9RTOUpSVaXCCU3m8LkiMO"
		const stringKKUJ0Hk = "Kknkvubqyw9kPFoV0yUn2GuyFCNmkXlsrlAE"
		const uintoCe3OjQ = BigInt("221")
		const NasiLiquidityPoolFactoryGtyLwy = await NasiLiquidityPoolFactory.new(stringn5PnlW, stringKKUJ0Hk, uintoCe3OjQ, {from: accounts[2]});
		const addressFNjiIKe = accounts[1]
		const addressxM7jej = accounts[4]
		await NasiLiquidityPoolFactoryGtyLwy.renounceMinter.call({from: accounts[3]});
		const addresshQkbzkI = await NasiLiquidityPoolFactoryGtyLwy._delegate.call(addressxM7jej, addressFNjiIKe, {from: accounts[4]});
		const stringRF321y6 = await NasiLiquidityPoolFactoryGtyLwy.symbol.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringNUHAwd2 = "2GIn5JAaE5fLx"
		const stringXCzKJmp = "DnOJc3lMGTeM3NbeF0QtqSzuehw4U7VE7kwp"
		const uintwM1iXMR = BigInt("77")
		const NasiLiquidityPoolFactorydlxTazI = await NasiLiquidityPoolFactory.new(stringNUHAwd2, stringXCzKJmp, uintwM1iXMR, {from: accounts[1]});
		const uintOdgwE1m = BigInt("652")
		const addressieQW5Wq = accounts[2]
		const uintGyHetrF = BigInt("1796")
		const addressENHwvZb = accounts[3]
		const uinteNTEGe8 = BigInt("1621")
		const addressYnFEr6x = accounts[1]
		const stringNmZW4KZ = await NasiLiquidityPoolFactorydlxTazI.symbol.call({from: accounts[3]});
		const boolfOErdpc = await NasiLiquidityPoolFactorydlxTazI.decreaseAllowance.call(addressieQW5Wq, uintOdgwE1m, {from: accounts[3]});
		const boolf0Mp1E4 = await NasiLiquidityPoolFactorydlxTazI.increaseAllowance.call(addressENHwvZb, uintGyHetrF, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactorydlxTazI.onlyPauser.call({from: accounts[0]});
		await NasiLiquidityPoolFactorydlxTazI.pause.call({from: accounts[4]});
		const boolWWWS6pz = await NasiLiquidityPoolFactorydlxTazI.approve.call(addressYnFEr6x, uinteNTEGe8, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJelItaC = "P2z6GTCw5WFC"
		const stringc27OZq = "AV08nPpOkn8sPd5qqYhEgOMVzrfy3gd76FU57X2LVRttMObY2pcW3K3R"
		const uintPbzw17z = BigInt("121")
		const NasiLiquidityPoolFactoryodBd4Ox = await NasiLiquidityPoolFactory.new(stringJelItaC, stringc27OZq, uintPbzw17z, {from: accounts[3]});
		const uintbvJvKij = BigInt("42")
		const addressRBFvip0 = accounts[1]
		const addressKlL5ufy = accounts[5]
		const addressWJvve3V = accounts[2]
		const uintJJBFfE = BigInt("1453")
		const addressxmBjFqc = accounts[4]
		const boolNlgEBLT = await NasiLiquidityPoolFactoryodBd4Ox.mint.call(addressRBFvip0, uintbvJvKij, {from: "0x0000000000000000000000000000000000000001"});
		const addressdoi4lF0 = await NasiLiquidityPoolFactoryodBd4Ox.setMigrator.call(addressKlL5ufy, {from: accounts[0]});
		const addressbE9jmi5 = await NasiLiquidityPoolFactoryodBd4Ox.dev.call(addressWJvve3V, {from: accounts[1]});
		await NasiLiquidityPoolFactoryodBd4Ox.onlyOwner.call({from: accounts[0]});
		const boolHnFsNhb = await NasiLiquidityPoolFactoryodBd4Ox.approve.call(addressxmBjFqc, uintJJBFfE, {from: accounts[3]});
		await NasiLiquidityPoolFactoryodBd4Ox.renouncePauser.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresszXZNyN7 = accounts[4]
		const addressliYh9JH = accounts[0]
		const uintRUvyMud = BigInt("1365")
		const uintTJcDNgZ = BigInt("1079")
		const NasiLiquidityPoolFactoryk076wUP = await NasiLiquidityPoolFactory.new(addresszXZNyN7, addressliYh9JH, uintRUvyMud, uintTJcDNgZ, {from: accounts[5]});
		const uintisG0IrM = BigInt("626")
		const uinteyfLkOo = BigInt("1398")
		const addresspnHjUp = accounts[0]
		const uint256Zy2899Q = await NasiLiquidityPoolFactoryk076wUP.migrate.call(uintisG0IrM, {from: accounts[4]});
		const boolT0LYFdR = await NasiLiquidityPoolFactoryk076wUP.decreaseAllowance.call(addresspnHjUp, uinteyfLkOo, {from: accounts[0]});

		await expect(NasiLiquidityPoolFactoryk076wUP.migrate.call(uintisG0IrM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringiz62KnT = "gbJx2KULbsiXWlt42A2alVToXTDFPmlvXCYrlrVehSzoSojjGgLVOj"
		const stringvkoFBDG = "3CUSVpoE57L25iemIA3Xn42RWfumzezXOvH3AB7DKTg28DbBGe8S2Yi"
		const uintTfvaD9M = BigInt("132")
		const NasiLiquidityPoolFactorySyN9JX = await NasiLiquidityPoolFactory.new(stringiz62KnT, stringvkoFBDG, uintTfvaD9M, {from: accounts[3]});
		const addressVmgS2y = accounts[4]
		const uinteTQlVfj = BigInt("1232")
		const addressTSlM3sq = accounts[1]
		const addressnG8ZdOp = "0x0000000000000000000000000000000000000001"
		const addresszhaHUXA = accounts[2]
		const uintVJxQJx = BigInt("1552")
		const addressgbEEgLk = accounts[0]
		const addressbcyna3f = await NasiLiquidityPoolFactorySyN9JX.addMinter.call(addressVmgS2y, {from: accounts[4]});
		const uint256ijbdeLH = await NasiLiquidityPoolFactorySyN9JX.migrate.call(uinteTQlVfj, {from: accounts[0]});
		const addressW1edToX = await NasiLiquidityPoolFactorySyN9JX.delegates.call(addressTSlM3sq, {from: accounts[1]});
		const uint256hy37Xw = await NasiLiquidityPoolFactorySyN9JX.allowance.call(addresszhaHUXA, addressnG8ZdOp, {from: accounts[2]});
		const booleKTrcx = await NasiLiquidityPoolFactorySyN9JX.increaseAllowance.call(addressgbEEgLk, uintVJxQJx, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressdh1GMCb = accounts[4]
		const addresslWDB0qp = accounts[0]
		const uintEiKcjfi = BigInt("1365")
		const uintxHmEbLy = BigInt("1079")
		const NasiLiquidityPoolFactoryk076wUP = await NasiLiquidityPoolFactory.new(addressdh1GMCb, addresslWDB0qp, uintEiKcjfi, uintxHmEbLy, {from: accounts[5]});
		const addressONAPtRT = accounts[4]
		const uintv2LLBhC = BigInt("602")
		const uintVsQDsWz = BigInt("1398")
		const addresslnySBeS = accounts[4]
		const addresss8Dj881 = await NasiLiquidityPoolFactoryk076wUP.dev.call(addressONAPtRT, {from: accounts[3]});
		const uint256Zy2899Q = await NasiLiquidityPoolFactoryk076wUP.migrate.call(uintv2LLBhC, {from: accounts[4]});
		const boolT0LYFdR = await NasiLiquidityPoolFactoryk076wUP.decreaseAllowance.call(addresslnySBeS, uintVsQDsWz, {from: accounts[0]});

		await expect(NasiLiquidityPoolFactoryk076wUP.dev.call(addressONAPtRT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressppzVwU = accounts[4]
		const addressNsPRYUB = accounts[0]
		const uintI271byk = BigInt("1365")
		const uintalOthyV = BigInt("1079")
		const NasiLiquidityPoolFactoryk076wUP = await NasiLiquidityPoolFactory.new(addressppzVwU, addressNsPRYUB, uintI271byk, uintalOthyV, {from: accounts[5]});
		const uintCiei51P = BigInt("826")
		const uintRU4VrG6 = BigInt("1398")
		const addressR2sMnuz = accounts[0]
		const boolIFKYLG4 = await NasiLiquidityPoolFactoryk076wUP.isOwner.call({from: accounts[4]});
		const uint256DVtSMwu = await NasiLiquidityPoolFactoryk076wUP.enterStaking.call(uintCiei51P, {from: accounts[0]});
		const boolT0LYFdR = await NasiLiquidityPoolFactoryk076wUP.decreaseAllowance.call(addressR2sMnuz, uintRU4VrG6, {from: accounts[0]});

		assert.equal(boolIFKYLG4, false)
		await expect(NasiLiquidityPoolFactoryk076wUP.enterStaking.call(uintCiei51P, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringcWvQQlL = "BQuwjWJIospIkxPDPjcn5naNrBDBdwS5loaJ479t14SFjVZb1ohvo9C5NgEuqhw3LM9NysVx9MZDTD"
		const stringYBSE0xg = "ie74iJkLcjCRJUvkfOfOE"
		const uintiLOP7FU = BigInt("145")
		const NasiLiquidityPoolFactoryRXPPvdK = await NasiLiquidityPoolFactory.new(stringcWvQQlL, stringYBSE0xg, uintiLOP7FU, {from: accounts[0]});
		const uintkFTbkrc = BigInt("1453")
		const uint256Cl92zo = await NasiLiquidityPoolFactoryRXPPvdK.burn.call(uintkFTbkrc, {from: accounts[2]});
		const uint256MqCO5mo = await NasiLiquidityPoolFactoryRXPPvdK.totalSupply.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressCu4XgYq = accounts[4]
		const addressr6EIah = accounts[0]
		const uintb2HHUcq = BigInt("1365")
		const uintBFTQRRR = BigInt("1079")
		const NasiLiquidityPoolFactoryk076wUP = await NasiLiquidityPoolFactory.new(addressCu4XgYq, addressr6EIah, uintb2HHUcq, uintBFTQRRR, {from: accounts[5]});
		const addresspoUtSSe = accounts[2]
		const uintz9yMT2d = BigInt("590")
		const uintq237YBp = BigInt("1398")
		const addresslwpknL7 = accounts[5]
		const uint256Zf5FEV = await NasiLiquidityPoolFactoryk076wUP.pendingNasi.call(uintz9yMT2d, addresspoUtSSe, {from: accounts[2]});
		const boolT0LYFdR = await NasiLiquidityPoolFactoryk076wUP.decreaseAllowance.call(addresslwpknL7, uintq237YBp, {from: accounts[0]});

		await expect(NasiLiquidityPoolFactoryk076wUP.pendingNasi.call(uintz9yMT2d, addresspoUtSSe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressZYgqRz = accounts[4]
		const addressKavg39n = accounts[4]
		const uintPVoPsFE = BigInt("1888")
		const uintpQVEqzX = BigInt("131")
		const NasiLiquidityPoolFactoryufGpMhv = await NasiLiquidityPoolFactory.new(addressZYgqRz, addressKavg39n, uintPVoPsFE, uintpQVEqzX, {from: "0x0000000000000000000000000000000000000001"});
		const addressOMwMdwf = accounts[3]
		const uintHiAVgQI = BigInt("25")
		const addresstbSHk8g = accounts[0]
		const uintiAepO9J = BigInt("1909")
		const addressR5kBlRO = accounts[4]
		const boolHlizdNy = await NasiLiquidityPoolFactoryufGpMhv.isMinter.call(addressOMwMdwf, {from: accounts[0]});
		const uint8R90vOyI = await NasiLiquidityPoolFactoryufGpMhv.decimals.call({from: accounts[4]});
		const uint256c5bbqr2 = await NasiLiquidityPoolFactoryufGpMhv.burn.call(uintHiAVgQI, {from: accounts[3]});
		const addressNPUkP6K = await NasiLiquidityPoolFactoryufGpMhv.dev.call(addresstbSHk8g, {from: accounts[2]});
		const uint256EIX4jXH = await NasiLiquidityPoolFactoryufGpMhv.getPriorVotes.call(addressR5kBlRO, uintiAepO9J, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringFhvp8qf = "EPgtif0m9kA1rZDtAB"
		const stringKesvOwH = "RM2KnvuU4hs38l6S0KMiUv846uUQjAxu42AZUuYq2H1u6GUEgebr2m5YIE6WDLvELMHcTevbtTAm4UiHNT6pyqAo"
		const uintG4LsTmG = BigInt("252")
		const NasiLiquidityPoolFactoryuOdJ4Un = await NasiLiquidityPoolFactory.new(stringFhvp8qf, stringKesvOwH, uintG4LsTmG, {from: accounts[2]});
		const uintMXT7gKW = BigInt("230")
		const addresseCtZudN = accounts[1]
		await NasiLiquidityPoolFactoryuOdJ4Un.massUpdatePools.call({from: accounts[5]});
		await NasiLiquidityPoolFactoryuOdJ4Un.renouncePauser.call({from: accounts[4]});
		const boolo7OfAND = await NasiLiquidityPoolFactoryuOdJ4Un.decreaseAllowance.call(addresseCtZudN, uintMXT7gKW, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringDkDBFtA = "IsOrEgthYaAofTb92Dx2bhU0UYgsS60rIgIBhYCLTTU8dDZA5QgAqiqXsr8b8OvTX2ZJFFCuFhLIL1A3bYapDtzsCkqdml3z"
		const stringIDtE1H = "HmQsrDJpErF63aKbhV6c3CKuIuEB55X9nq3Mz6dzNvPBQXXUANhNVxrkKMJRCoGTSQhh9EKreHFzpvCK2"
		const uintylrVvjs = BigInt("24")
		const NasiLiquidityPoolFactoryVwor2NK = await NasiLiquidityPoolFactory.new(stringDkDBFtA, stringIDtE1H, uintylrVvjs, {from: accounts[2]});
		const addressSc6Qx6E = accounts[3]
		const uintEpFyZFE = BigInt("1045")
		const boolvOcdzxA = await NasiLiquidityPoolFactoryVwor2NK.isMinter.call(addressSc6Qx6E, {from: accounts[4]});
		await NasiLiquidityPoolFactoryVwor2NK.pause.call({from: accounts[1]});
		const uint256Hbmo8nR = await NasiLiquidityPoolFactoryVwor2NK.migrate.call(uintEpFyZFE, {from: accounts[0]});
		await NasiLiquidityPoolFactoryVwor2NK.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressy7OAWgX = accounts[4]
		const addressaNK0xUa = accounts[0]
		const uints0ancSb = BigInt("1365")
		const uintYUX9qLw = BigInt("1079")
		const NasiLiquidityPoolFactoryk076wUP = await NasiLiquidityPoolFactory.new(addressy7OAWgX, addressaNK0xUa, uints0ancSb, uintYUX9qLw, {from: accounts[5]});
		const uintBcSnJyV = BigInt("1650")
		const uint6GxgsU = BigInt("1387")
		const uinttQN3QXB = BigInt("1478")
		const uintZtEL3jm = BigInt("1398")
		const addressFrNdRb5 = accounts[0]
		const addressHbRKSYb = accounts[0]
		const uint256z6zXwJw = await NasiLiquidityPoolFactoryk076wUP.leaveStaking.call(uintBcSnJyV, {from: accounts[2]});
		const uint256LjqwyGR = await NasiLiquidityPoolFactoryk076wUP.deposit.call(uinttQN3QXB, uint6GxgsU, {from: accounts[3]});
		const boolT0LYFdR = await NasiLiquidityPoolFactoryk076wUP.decreaseAllowance.call(addressFrNdRb5, uintZtEL3jm, {from: accounts[0]});
		const addressUCetP1H = await NasiLiquidityPoolFactoryk076wUP.delegates.call(addressHbRKSYb, {from: accounts[0]});

		await expect(NasiLiquidityPoolFactoryk076wUP.leaveStaking.call(uintBcSnJyV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringVKSFF4s = "zKpcGibqjp1sfqF4oKEHkhY7bNM1wePmk"
		const stringox5KvaE = "AwKvaH6LdWZXCcWudHkYH9zHEMwf6llKrV4aSAsIFoc95ePCnyjET"
		const uintFUTMJs = BigInt("23")
		const NasiLiquidityPoolFactorybqIId2U = await NasiLiquidityPoolFactory.new(stringVKSFF4s, stringox5KvaE, uintFUTMJs, {from: accounts[0]});
		const uintRcWTEki = BigInt("239")
		const addresshf1ea4p = accounts[0]
		const addressBJ5bzYr = accounts[2]
		const boolC2wgLDg = await NasiLiquidityPoolFactorybqIId2U.mint.call(addresshf1ea4p, uintRcWTEki, {from: accounts[1]});
		const stringzstcBsZ = await NasiLiquidityPoolFactorybqIId2U.symbol.call({from: accounts[4]});
		const uint256mvGgWSx = await NasiLiquidityPoolFactorybqIId2U.getCurrentVotes.call(addressBJ5bzYr, {from: accounts[4]});
		const uint256DMFqhUZ = await NasiLiquidityPoolFactorybqIId2U.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressB3BoBqS = accounts[4]
		const addressvtY4LEn = accounts[0]
		const uintMEDZGU = BigInt("1365")
		const uintBmX8BVv = BigInt("1079")
		const NasiLiquidityPoolFactoryk076wUP = await NasiLiquidityPoolFactory.new(addressB3BoBqS, addressvtY4LEn, uintMEDZGU, uintBmX8BVv, {from: accounts[5]});
		const uintEnU6v7x = BigInt("1646")
		const uinttbspPFj = BigInt("1571")
		const uintexqcyZT = BigInt("1398")
		const addressC4EnYEX = accounts[2]
		const uint256Xe5VKPc = await NasiLiquidityPoolFactoryk076wUP.deposit.call(uinttbspPFj, uintEnU6v7x, {from: accounts[1]});
		const boolT0LYFdR = await NasiLiquidityPoolFactoryk076wUP.decreaseAllowance.call(addressC4EnYEX, uintexqcyZT, {from: accounts[0]});

		await expect(NasiLiquidityPoolFactoryk076wUP.deposit.call(uinttbspPFj, uintEnU6v7x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringZT68bRY = "aSGwSknpfPGYOGhXIaPjdAjesUOngNly1VdBHstFd7XSDLC8Dcv"
		const stringswlssGw = "ipWyw7IAr7Qk1ThAwibwZIS1neP3Gf2GDet3Bm8kp57s4ITRut3"
		const uintOTvc5VE = BigInt("190")
		const NasiLiquidityPoolFactoryrO9GR4k = await NasiLiquidityPoolFactory.new(stringZT68bRY, stringswlssGw, uintOTvc5VE, {from: accounts[4]});
		const uintDMXhq8 = BigInt("323")
		const addressONcgny = accounts[4]
		const uintnvcn8Fr = BigInt("860")
		const boolVMRGrb7 = true
		const addressiGATaBC = accounts[4]
		const uintnJXl9e = BigInt("1609")
		const booliwfLBmV = await NasiLiquidityPoolFactoryrO9GR4k.decreaseAllowance.call(addressONcgny, uintDMXhq8, {from: accounts[5]});
		const uint256LN2MnsX = await NasiLiquidityPoolFactoryrO9GR4k.updatePool.call(uintnvcn8Fr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GdILUZ = await NasiLiquidityPoolFactoryrO9GR4k.addLpToken.call(uintnJXl9e, addressiGATaBC, boolVMRGrb7, {from: accounts[1]});
		const uint256HzeuOEh = await NasiLiquidityPoolFactoryrO9GR4k.totalSupply.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringRILiX2s = "VjBbidy4bKsLlNX"
		const stringytm8MVz = "MFyTpe4Ls8IwMzWAN4eJ7vSxa0WyBfrcGMnuohxMfSdBNt1mzud2RO9VjDSHJSx"
		const uintGViFckW = BigInt("223")
		const NasiLiquidityPoolFactoryVeibCHA = await NasiLiquidityPoolFactory.new(stringRILiX2s, stringytm8MVz, uintGViFckW, {from: accounts[5]});
		const uintRxcqBAc = BigInt("416")
		const uintphtrDMb = BigInt("1412")
		const uintSaZAq8t = BigInt("127")
		const addressNkx9Fym = accounts[4]
		const uintvGzgKdw = BigInt("1412")
		const addressvgJu0w3 = "0x0000000000000000000000000000000000000001"
		const addressFMLwckq = accounts[1]
		const uint256lbxUdN7 = await NasiLiquidityPoolFactoryVeibCHA.updatePool.call(uintRxcqBAc, {from: accounts[4]});
		const uint256Vi0PY0 = await NasiLiquidityPoolFactoryVeibCHA.burn.call(uintphtrDMb, {from: accounts[1]});
		const boolTrBMEgX = await NasiLiquidityPoolFactoryVeibCHA.increaseAllowance.call(addressNkx9Fym, uintSaZAq8t, {from: accounts[2]});
		const boolgKaNoBg = await NasiLiquidityPoolFactoryVeibCHA.increaseAllowance.call(addressvgJu0w3, uintvGzgKdw, {from: accounts[0]});
		const boolzQgty54 = await NasiLiquidityPoolFactoryVeibCHA.isPauser.call(addressFMLwckq, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringkvmlqgf = "HlmHiwmXVH4BKZ9F9"
		const stringXdkLEAu = "f"
		const uintjjnGkA = BigInt("203")
		const NasiLiquidityPoolFactoryQjZCY9E = await NasiLiquidityPoolFactory.new(stringkvmlqgf, stringXdkLEAu, uintjjnGkA, {from: accounts[2]});
		const uintnYA4DDX = BigInt("1344")
		const addressV8vTDKf = accounts[0]
		const addressYetxlti = accounts[2]
		const uintfM1gezG = BigInt("1796")
		const addresshQ16YM = accounts[1]
		const addressmx5bWXs = await NasiLiquidityPoolFactoryQjZCY9E.burnFrom.call(addressV8vTDKf, uintnYA4DDX, {from: accounts[2]});
		await NasiLiquidityPoolFactoryQjZCY9E.onlyMinter.call({from: accounts[2]});
		const uint256J0yTANF = await NasiLiquidityPoolFactoryQjZCY9E.getCurrentVotes.call(addressYetxlti, {from: "0x0000000000000000000000000000000000000001"});
		const uint256V6MAmwr = await NasiLiquidityPoolFactoryQjZCY9E.getPriorVotes.call(addresshQ16YM, uintfM1gezG, {from: accounts[4]});
		const bool2zrtfK = await NasiLiquidityPoolFactoryQjZCY9E.isOwner.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryQjZCY9E.whenPaused.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringjatn28U = "mpv3OUBD49gmPJajDTvAk"
		const stringHNGhukQ = "ColhWJpfseLCXuGprDsEptuiuU5CABAYeCJl3b8g7dekhGCCPfnBhkI1YxlEfntGAf"
		const uintWUJSLcS = BigInt("207")
		const NasiLiquidityPoolFactorycGLJsn6 = await NasiLiquidityPoolFactory.new(stringjatn28U, stringHNGhukQ, uintWUJSLcS, {from: accounts[5]});
		const uintex0XGj = BigInt("164")
		const uintpWcpDlw = BigInt("2023")
		const uintbGZTjxZ = BigInt("1635")
		const addressH9VBpql = accounts[0]
		const addressq3L0vbM = accounts[4]
		const uintHp5GH9T = BigInt("514")
		const uint256QqWWpq2 = await NasiLiquidityPoolFactorycGLJsn6.deposit.call(uintpWcpDlw, uintex0XGj, {from: accounts[3]});
		const uint256Fu41Ps8 = await NasiLiquidityPoolFactorycGLJsn6.getPriorVotes.call(addressH9VBpql, uintbGZTjxZ, {from: accounts[0]});
		await NasiLiquidityPoolFactorycGLJsn6.massUpdatePools.call({from: accounts[2]});
		const uint256RWXulFH = await NasiLiquidityPoolFactorycGLJsn6.pendingNasi.call(uintHp5GH9T, addressq3L0vbM, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const address6f7J82 = accounts[4]
		const addressnEd2Pnv = accounts[0]
		const uintG1SFeFe = BigInt("1365")
		const uintttC8mMd = BigInt("1079")
		const NasiLiquidityPoolFactoryk076wUP = await NasiLiquidityPoolFactory.new(address6f7J82, addressnEd2Pnv, uintG1SFeFe, uintttC8mMd, {from: accounts[5]});
		const uintxlaCgks = BigInt("1865")
		const uintuA8j4LW = BigInt("963")
		const uintUAi7yAb = BigInt("646")
		const uinttUd9I1u = BigInt("1436")
		const addressKA5Xumh = accounts[4]
		const uint256dQqLhl0 = await NasiLiquidityPoolFactoryk076wUP.withdraw.call(uintuA8j4LW, uintxlaCgks, {from: accounts[1]});
		const uint256sid3wHm = await NasiLiquidityPoolFactoryk076wUP.burn.call(uintUAi7yAb, {from: accounts[2]});
		const boolT0LYFdR = await NasiLiquidityPoolFactoryk076wUP.decreaseAllowance.call(addressKA5Xumh, uinttUd9I1u, {from: accounts[0]});

		await expect(NasiLiquidityPoolFactoryk076wUP.withdraw.call(uintuA8j4LW, uintxlaCgks, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressBlOzKIS = accounts[4]
		const addresshcjPEnp = accounts[4]
		const uinttyuP67x = BigInt("943")
		const uintm96RsxS = BigInt("1935")
		const NasiLiquidityPoolFactoryAWXzkUO = await NasiLiquidityPoolFactory.new(addressBlOzKIS, addresshcjPEnp, uinttyuP67x, uintm96RsxS, {from: accounts[4]});
		const booljjVu25H = true
		const uintcJgTkZq = BigInt("848")
		const uintQF7yiww = BigInt("1198")
		const uintSB4vqWy = BigInt("172")
		const addressCoRfWy = accounts[3]
		const addressM8IbOLZ = accounts[1]
		const uintMzegQTT = BigInt("1202")
		const uintYxcZHlU = BigInt("343")
		const uintISjnkCz = BigInt("2046")
		const uint256HSzszAE = await NasiLiquidityPoolFactoryAWXzkUO.setAllocationPoint.call(uintQF7yiww, uintcJgTkZq, booljjVu25H, {from: accounts[2]});
		const boolo3aW8lU = await NasiLiquidityPoolFactoryAWXzkUO.decreaseAllowance.call(addressCoRfWy, uintSB4vqWy, {from: accounts[0]});
		const addressfh9YR9y = await NasiLiquidityPoolFactoryAWXzkUO.dev.call(addressM8IbOLZ, {from: accounts[3]});
		const uint256hH7casa = await NasiLiquidityPoolFactoryAWXzkUO.getBonusMultiplier.call(uintYxcZHlU, uintMzegQTT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LNTQwSr = await NasiLiquidityPoolFactoryAWXzkUO.updatePool.call(uintISjnkCz, {from: accounts[4]});
		await NasiLiquidityPoolFactoryAWXzkUO.renounceOwnership.call({from: accounts[2]});

		await expect(NasiLiquidityPoolFactoryAWXzkUO.setAllocationPoint.call(uintQF7yiww, uintcJgTkZq, booljjVu25H, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})