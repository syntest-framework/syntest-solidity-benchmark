const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisNcvUb1 = await Ledgis.new({from: accounts[0]});
		const uintCvzUrsN = BigInt("1000")
		const addressFUW2Sml = accounts[2]
		const uintW3YDsYu = BigInt("1524")
		const addressnnAbumo = accounts[2]
		const addressCyz3y5Z = accounts[1]
		const uintdNOZmTd = BigInt("2004")
		const addressJC57onn = accounts[1]
		const uintWoiB1dx = BigInt("1491")
		const addressL425Ziy = "0x0000000000000000000000000000000000000001"
//		await LedgisNcvUb1.unpause.call({from: accounts[4]});
//		const boolRhqqidD = await LedgisNcvUb1.mint.call(addressFUW2Sml, uintCvzUrsN, {from: accounts[2]});
//		const boolszeGzux = await LedgisNcvUb1.transferFrom.call(addressCyz3y5Z, addressnnAbumo, uintW3YDsYu, {from: accounts[3]});
//		const boolTT74f3d = await LedgisNcvUb1.approve.call(addressJC57onn, uintdNOZmTd, {from: accounts[2]});
//		const boolA4utO3T = await LedgisNcvUb1.mint.call(addressL425Ziy, uintWoiB1dx, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisNcvUb1.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgispgxGg2n = await Ledgis.new({from: accounts[5]});
		const uintyqNmVeV = BigInt("1159")
		const addressvdSs0tJ = accounts[0]
//		await LedgispgxGg2n.renounceOwnership.call({from: accounts[5]});
//		const bool5RcJml = await LedgispgxGg2n.transfer.call(addressvdSs0tJ, uintyqNmVeV, {from: accounts[2]});

		await expect(LedgispgxGg2n.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAsQhhlL = await Ledgis.new({from: accounts[5]});
		const addressJQ5swz6 = accounts[2]
		const boolP9NgDpx = await LedgisAsQhhlL.isFrozen.call(addressJQ5swz6, {from: accounts[0]});
//		await LedgisAsQhhlL.pause.call({from: accounts[2]});

		assert.equal(boolP9NgDpx, false)
		await expect(LedgisAsQhhlL.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswvgputY = await Ledgis.new({from: accounts[4]});
		const uintquZoZzM = BigInt("377")
		const uintkbpzfJx = BigInt("827")
		const addressTO1UsD = accounts[5]
		const uintC554Pt = BigInt("1507")
		const addressfz1Cc5g = accounts[1]
//		await LedgiswvgputY.whenPaused.call({from: accounts[2]});
//		const boollDxCgcu = await LedgiswvgputY.transferWithLockAfter.call(addressTO1UsD, uintkbpzfJx, uintquZoZzM, {from: accounts[5]});
//		const addressZUjFE4E = await LedgiswvgputY.unlock.call(addressfz1Cc5g, uintC554Pt, {from: accounts[3]});

		await expect(LedgiswvgputY.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisBexnCV = await Ledgis.new({from: accounts[0]});
		const uintEhVqpQg = BigInt("1814")
		const addresslNp2kma = accounts[2]
		const address2UhnQP = accounts[4]
		const uintvutUo67 = BigInt("1582")
		const addressE1gPqrm = accounts[4]
		const addressyRljnFM = accounts[4]
		const addressUZWqqGc = accounts[1]
//		const boolsAHtjzN = await LedgisBexnCV.transferFrom.call(address2UhnQP, addresslNp2kma, uintEhVqpQg, {from: accounts[1]});
//		await LedgisBexnCV.whenPaused.call({from: accounts[4]});
//		const boolY0tMba2 = await LedgisBexnCV.transferFrom.call(addressyRljnFM, addressE1gPqrm, uintvutUo67, {from: accounts[0]});
//		await LedgisBexnCV.whenNotPaused.call({from: accounts[3]});
//		const addresscsGxUx = await LedgisBexnCV.unfreeze.call(addressUZWqqGc, {from: accounts[4]});

		await expect(LedgisBexnCV.transferFrom.call(address2UhnQP, addresslNp2kma, uintEhVqpQg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisaHUhH0 = await Ledgis.new({from: accounts[3]});
		const uintS5JXgf = BigInt("1548")
		const uintYqA0AL4 = BigInt("101")
		const addressBIZsJRO = accounts[0]
		const uint256ifdsys = await LedgisaHUhH0.totalSupply.call({from: accounts[0]});
//		await LedgisaHUhH0.unpause.call({from: accounts[1]});
//		await LedgisaHUhH0.whenNotFrozen.call({from: accounts[4]});
//		const addresssURzMwe = await LedgisaHUhH0.lock.call(addressBIZsJRO, uintYqA0AL4, uintS5JXgf, {from: accounts[3]});

		assert.equal(uint256ifdsys, BigInt("10000000000000"))
		await expect(LedgisaHUhH0.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDOA9Uo = await Ledgis.new({from: accounts[0]});
		const uintN4V3GJG = BigInt("559")
		const addresspfMOJDA = accounts[4]
		const uintV83wmS = BigInt("1801")
		const addresshOwAO18 = accounts[3]
		const addressHqpOl9D = accounts[5]
		const booluZRNxas = await LedgisDOA9Uo.increaseAllowance.call(addresspfMOJDA, uintN4V3GJG, {from: accounts[0]});
//		const addressGeKQocY = await LedgisDOA9Uo.unlock.call(addresshOwAO18, uintV83wmS, {from: accounts[5]});
//		const uint256brSF0OG = await LedgisDOA9Uo.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256GW98Ynu = await LedgisDOA9Uo.balanceOf.call(addressHqpOl9D, {from: accounts[5]});
//		await LedgisDOA9Uo.pause.call({from: accounts[1]});

		assert.equal(booluZRNxas, true)
		await expect(LedgisDOA9Uo.unlock.call(addresshOwAO18, uintV83wmS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDIBFxBH = await Ledgis.new({from: accounts[5]});
		const uintjNtu63g = BigInt("353")
		const addressBee0QAY = accounts[4]
		const uintz5w09JE = BigInt("553")
		const uintLLhaIEA = BigInt("118")
		const addresswzrpFKE = accounts[1]
		const boolv6u53BC = await LedgisDIBFxBH.approve.call(addressBee0QAY, uintjNtu63g, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yJXVL2I = await LedgisDIBFxBH.afterTime.call(uintz5w09JE, {from: accounts[1]});
		const boolru55A4d = await LedgisDIBFxBH.increaseAllowance.call(addresswzrpFKE, uintLLhaIEA, {from: accounts[4]});

		assert.equal(boolru55A4d, true)
		assert.equal(boolv6u53BC, true)
		assert.equal(uint256yJXVL2I, BigInt("1630233997"))
	});

	it('test for Ledgis', async () => {
		const LedgisBexnCV = await Ledgis.new({from: accounts[0]});
		const addressciNpPp = "0x0000000000000000000000000000000000000001"
		const uintYSXHOfX = BigInt("1358")
		const addressu2ZuOsg = accounts[4]
		const uintf4QZf6v = BigInt("1814")
		const addresszxEOdw8 = accounts[3]
		const addressCKW6sue = accounts[4]
		const uintuuaDnk9 = BigInt("1582")
		const addressut7eig7 = accounts[4]
		const addressw1R7CCc = accounts[4]
		const uintGfQ0ULW = BigInt("1276")
		const addressbXFOGdB = accounts[0]
		const uint256ypfvKFS = await LedgisBexnCV.balanceOf.call(addressciNpPp, {from: accounts[1]});
		const boolUG5Fxvt = await LedgisBexnCV.transfer.call(addressu2ZuOsg, uintYSXHOfX, {from: accounts[0]});
//		await LedgisBexnCV.whenNotPaused.call({from: accounts[1]});
//		const boolsAHtjzN = await LedgisBexnCV.transferFrom.call(addressCKW6sue, addresszxEOdw8, uintf4QZf6v, {from: accounts[1]});
//		await LedgisBexnCV.whenPaused.call({from: accounts[4]});
//		const boolY0tMba2 = await LedgisBexnCV.transferFrom.call(addressw1R7CCc, addressut7eig7, uintuuaDnk9, {from: accounts[0]});
//		const boolhYLOiSB = await LedgisBexnCV.mint.call(addressbXFOGdB, uintGfQ0ULW, {from: accounts[2]});

		assert.equal(boolUG5Fxvt, true)
		assert.equal(uint256ypfvKFS, BigInt("0"))
		await expect(LedgisBexnCV.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisBexnCV = await Ledgis.new({from: accounts[0]});
		const addressszftdTU = "0x0000000000000000000000000000000000000001"
		const uintEp0JWfC = BigInt("2013")
		const addressaDySTiE = accounts[1]
		const uintolhvqJP = BigInt("1358")
		const addressVdUdvT0 = accounts[4]
		const uintPAjevte = BigInt("1814")
		const addressvhWD3FV = accounts[3]
		const addressfsC9gpS = accounts[5]
		const uintnYcyCJ = BigInt("1582")
		const addressZC0JnOb = accounts[4]
		const addressgWvosMo = accounts[4]
		const uint47aMy8 = BigInt("1276")
		const addressp1audYY = accounts[0]
		const uint256ypfvKFS = await LedgisBexnCV.balanceOf.call(addressszftdTU, {from: accounts[1]});
//		const boolPw402v6 = await LedgisBexnCV.decreaseAllowance.call(addressaDySTiE, uintEp0JWfC, {from: accounts[5]});
//		const boolUG5Fxvt = await LedgisBexnCV.transfer.call(addressVdUdvT0, uintolhvqJP, {from: accounts[0]});
//		await LedgisBexnCV.whenNotPaused.call({from: accounts[1]});
//		const boolsAHtjzN = await LedgisBexnCV.transferFrom.call(addressfsC9gpS, addressvhWD3FV, uintPAjevte, {from: accounts[1]});
//		await LedgisBexnCV.whenPaused.call({from: accounts[4]});
//		const boolY0tMba2 = await LedgisBexnCV.transferFrom.call(addressgWvosMo, addressZC0JnOb, uintnYcyCJ, {from: accounts[0]});
//		const boolhYLOiSB = await LedgisBexnCV.mint.call(addressp1audYY, uint47aMy8, {from: accounts[2]});

		assert.equal(uint256ypfvKFS, BigInt("0"))
		await expect(LedgisBexnCV.decreaseAllowance.call(addressaDySTiE, uintEp0JWfC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgispgxGg2n = await Ledgis.new({from: accounts[5]});
		const addressu1jo8X3 = accounts[4]
		const uintBR2WHNW = BigInt("1159")
		const addresscBXRHto = accounts[1]
//		await LedgispgxGg2n.renounceOwnership.call({from: accounts[5]});
//		const uint256VHFzzrL = await LedgispgxGg2n.lockCount.call(addressu1jo8X3, {from: accounts[4]});
//		const bool5RcJml = await LedgispgxGg2n.transfer.call(addresscBXRHto, uintBR2WHNW, {from: accounts[2]});

		await expect(LedgispgxGg2n.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisBexnCV = await Ledgis.new({from: accounts[0]});
		const addressDyZLDFM = "0x0000000000000000000000000000000000000001"
		const uintHD65L60 = BigInt("1358")
		const addressWhtaWfv = accounts[4]
		const addressETaS36H = accounts[5]
		const uintWAWHchw = BigInt("1814")
		const addressz2uLisA = accounts[3]
		const addressrMPgSvS = accounts[4]
		const uintbxg2xm = BigInt("1985")
		const uintJ7dNL7o = BigInt("192")
		const addresshWs7JK = accounts[5]
		const uintgwQmoK = BigInt("1582")
		const addressoKkcMv = accounts[5]
		const addressa54mscE = accounts[4]
		const uintGw7x1e8 = BigInt("1276")
		const addressMyPjuSb = accounts[0]
		const uint256ypfvKFS = await LedgisBexnCV.balanceOf.call(addressDyZLDFM, {from: accounts[1]});
		const boolUG5Fxvt = await LedgisBexnCV.transfer.call(addressWhtaWfv, uintHD65L60, {from: accounts[0]});
		const addresslyejPG1 = await LedgisBexnCV.transferOwnership.call(addressETaS36H, {from: accounts[0]});
//		await LedgisBexnCV.whenNotPaused.call({from: accounts[1]});
//		const boolsAHtjzN = await LedgisBexnCV.transferFrom.call(addressrMPgSvS, addressz2uLisA, uintWAWHchw, {from: accounts[1]});
//		await LedgisBexnCV.whenPaused.call({from: accounts[4]});
//		const uint256THgpsTl = await LedgisBexnCV.afterTime.call(uintbxg2xm, {from: accounts[5]});
//		const boolV5t5gpr = await LedgisBexnCV.mint.call(addresshWs7JK, uintJ7dNL7o, {from: accounts[3]});
//		const boolY0tMba2 = await LedgisBexnCV.transferFrom.call(addressa54mscE, addressoKkcMv, uintgwQmoK, {from: accounts[0]});
//		const boolhYLOiSB = await LedgisBexnCV.mint.call(addressMyPjuSb, uintGw7x1e8, {from: accounts[2]});

		assert.equal(boolUG5Fxvt, true)
		assert.equal(uint256ypfvKFS, BigInt("0"))
		await expect(LedgisBexnCV.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisrBe8pM = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqDxTwKo = accounts[5]
		const uintUBox9GR = BigInt("681")
		const addressRlsnIGf = "0x0000000000000000000000000000000000000001"
		const uintXcQI81v = BigInt("1356")
		const addressCv4uHi0 = accounts[2]
		const addressnrmJ55Q = accounts[0]
		await LedgisrBe8pM.whenNotFrozen.call({from: accounts[2]});
		const addressgQdXrA1 = await LedgisrBe8pM.freeze.call(addressqDxTwKo, {from: accounts[1]});
		const boolajY2Fcb = await LedgisrBe8pM.increaseAllowance.call(addressRlsnIGf, uintUBox9GR, {from: accounts[2]});
		const booldYMTrlK = await LedgisrBe8pM.increaseAllowance.call(addressCv4uHi0, uintXcQI81v, {from: accounts[0]});
		const addressPvzTYCh = await LedgisrBe8pM.transferOwnership.call(addressnrmJ55Q, {from: accounts[0]});
	});

	it('test for Ledgis', async () => {
		const Ledgisdvp7Zlh = await Ledgis.new({from: accounts[2]});
		const addressvDcCLJQ = accounts[2]
		const uintICLkp2 = BigInt("39")
		const addressQRnuMir = accounts[2]
		const uint256k3tdya6 = await Ledgisdvp7Zlh.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressmgO2hRQ = await Ledgisdvp7Zlh.unfreeze.call(addressvDcCLJQ, {from: accounts[1]});
//		const boolUqViUF9 = await Ledgisdvp7Zlh.decreaseAllowance.call(addressQRnuMir, uintICLkp2, {from: accounts[3]});
//		await Ledgisdvp7Zlh.whenNotFrozen.call({from: accounts[4]});
//		const uint256CQjHuC6 = await Ledgisdvp7Zlh.totalSupply.call({from: accounts[3]});

		assert.equal(uint256k3tdya6, BigInt("1630233428"))
		await expect(Ledgisdvp7Zlh.unfreeze.call(addressvDcCLJQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisBexnCV = await Ledgis.new({from: accounts[0]});
		const addresstlTGeaM = accounts[2]
		const addressnHRDMux = accounts[1]
		const addressDcu3dpu = "0x0000000000000000000000000000000000000001"
		const addressy4BoutG = "0x0000000000000000000000000000000000000001"
		const uintKfH1Et = BigInt("1358")
		const addressHNhCCzX = accounts[4]
		const uintd1LEnMd = BigInt("1814")
		const addressEoq5tNv = accounts[3]
		const addresst40GAZW = accounts[4]
		const uintVmc1OGh = BigInt("192")
		const addresslx2Zlsu = accounts[5]
		const uintTmcX2qK = BigInt("1582")
		const addresscW28zSF = accounts[5]
		const addressPTeq0ZN = accounts[4]
		const uintrzvF2NS = BigInt("1276")
		const addressfIEDrYj = accounts[0]
		const boolZ6LT74w = await LedgisBexnCV.isFrozen.call(addresstlTGeaM, {from: accounts[3]});
		const uint256RddB8fv = await LedgisBexnCV.allowance.call(addressDcu3dpu, addressnHRDMux, {from: accounts[3]});
		const uint256ypfvKFS = await LedgisBexnCV.balanceOf.call(addressy4BoutG, {from: accounts[1]});
		const boolUG5Fxvt = await LedgisBexnCV.transfer.call(addressHNhCCzX, uintKfH1Et, {from: accounts[0]});
//		await LedgisBexnCV.whenNotPaused.call({from: accounts[1]});
//		const boolsAHtjzN = await LedgisBexnCV.transferFrom.call(addresst40GAZW, addressEoq5tNv, uintd1LEnMd, {from: accounts[1]});
//		await LedgisBexnCV.whenPaused.call({from: accounts[4]});
//		const boolV5t5gpr = await LedgisBexnCV.mint.call(addresslx2Zlsu, uintVmc1OGh, {from: accounts[3]});
//		const boolY0tMba2 = await LedgisBexnCV.transferFrom.call(addressPTeq0ZN, addresscW28zSF, uintTmcX2qK, {from: accounts[0]});
//		const boolhYLOiSB = await LedgisBexnCV.mint.call(addressfIEDrYj, uintrzvF2NS, {from: accounts[2]});

		assert.equal(boolUG5Fxvt, true)
		assert.equal(boolZ6LT74w, false)
		assert.equal(uint256RddB8fv, BigInt("0"))
		assert.equal(uint256ypfvKFS, BigInt("0"))
		await expect(LedgisBexnCV.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisBexnCV = await Ledgis.new({from: accounts[0]});
		const uintbwc0uGc = BigInt("1745")
		const addressimRPFSd = accounts[3]
		const addressGRbJ9Mg = "0x0000000000000000000000000000000000000001"
		const uintxHr3KuW = BigInt("1358")
		const addressrDSYVhH = accounts[4]
		const addresswWMDi0i = accounts[5]
		const uintG66O7YQ = BigInt("1814")
		const addressSUCctk = accounts[3]
		const addresso8JxztL = accounts[4]
		const addressC4wQ5Q7 = accounts[3]
		const uintSyG1ytq = BigInt("1985")
		const uintwdT4o9a = BigInt("1582")
		const addressEPfLg5S = accounts[5]
		const addressDlFoYqO = accounts[4]
		const uintKgyE7GQ = BigInt("1276")
		const addressJ89EvZT = accounts[0]
//		const addressRjsDm24 = await LedgisBexnCV.unlock.call(addressimRPFSd, uintbwc0uGc, {from: accounts[0]});
//		const uint256ypfvKFS = await LedgisBexnCV.balanceOf.call(addressGRbJ9Mg, {from: accounts[1]});
//		const boolUG5Fxvt = await LedgisBexnCV.transfer.call(addressrDSYVhH, uintxHr3KuW, {from: accounts[0]});
//		const addresslyejPG1 = await LedgisBexnCV.transferOwnership.call(addresswWMDi0i, {from: accounts[0]});
//		await LedgisBexnCV.whenNotPaused.call({from: accounts[1]});
//		const boolsAHtjzN = await LedgisBexnCV.transferFrom.call(addresso8JxztL, addressSUCctk, uintG66O7YQ, {from: accounts[1]});
//		await LedgisBexnCV.whenPaused.call({from: accounts[4]});
//		const uint256kWOib7T = await LedgisBexnCV.balanceOf.call(addressC4wQ5Q7, {from: accounts[2]});
//		const uint256THgpsTl = await LedgisBexnCV.afterTime.call(uintSyG1ytq, {from: accounts[5]});
//		const boolY0tMba2 = await LedgisBexnCV.transferFrom.call(addressDlFoYqO, addressEPfLg5S, uintwdT4o9a, {from: accounts[0]});
//		const boolhYLOiSB = await LedgisBexnCV.mint.call(addressJ89EvZT, uintKgyE7GQ, {from: accounts[2]});

		await expect(LedgisBexnCV.unlock.call(addressimRPFSd, uintbwc0uGc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisBexnCV = await Ledgis.new({from: accounts[0]});
		const addressjhVKGTP = "0x0000000000000000000000000000000000000001"
		const uintmI0tJ6p = BigInt("1875")
		const address8QqHDP = accounts[4]
		const addressNQr8SBy = "0x0000000000000000000000000000000000000001"
		const uintmbejAzC = BigInt("1358")
		const addressgYrdMS = accounts[4]
		const addressd6Mejaz = accounts[4]
		const uintbI4zlv7 = BigInt("1814")
		const addressdFz05Hx = accounts[3]
		const addresst3QOkS2 = accounts[4]
		const uinthiPzU3 = BigInt("1582")
		const addresssHll3sv = accounts[4]
		const addressrWsqCNj = accounts[4]
		const uinttVD9GCl = BigInt("1276")
		const addressKruAJtt = accounts[0]
		const uint256ypfvKFS = await LedgisBexnCV.balanceOf.call(addressjhVKGTP, {from: accounts[1]});
		const boolTjJrkg = await LedgisBexnCV.mint.call(address8QqHDP, uintmI0tJ6p, {from: accounts[0]});
//		const addressEP6tV2Y = await LedgisBexnCV.freeze.call(addressNQr8SBy, {from: accounts[4]});
//		const boolUG5Fxvt = await LedgisBexnCV.transfer.call(addressgYrdMS, uintmbejAzC, {from: accounts[0]});
//		await LedgisBexnCV.whenNotPaused.call({from: accounts[1]});
//		const uint256tBQOsvt = await LedgisBexnCV.balanceOf.call(addressd6Mejaz, {from: accounts[3]});
//		const boolsAHtjzN = await LedgisBexnCV.transferFrom.call(addresst3QOkS2, addressdFz05Hx, uintbI4zlv7, {from: accounts[1]});
//		await LedgisBexnCV.whenPaused.call({from: accounts[4]});
//		const boolY0tMba2 = await LedgisBexnCV.transferFrom.call(addressrWsqCNj, addresssHll3sv, uinthiPzU3, {from: accounts[0]});
//		const boolhYLOiSB = await LedgisBexnCV.mint.call(addressKruAJtt, uinttVD9GCl, {from: accounts[2]});

		assert.equal(boolTjJrkg, true)
		assert.equal(uint256ypfvKFS, BigInt("0"))
		await expect(LedgisBexnCV.freeze.call(addressNQr8SBy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLeGc3i9 = await Ledgis.new({from: accounts[4]});
		const addressQO6b4B = "0x0000000000000000000000000000000000000001"
		const addressuxP50Oo = accounts[1]
		const uintLNijkuS = BigInt("887")
		const addressOt9Jg8w = accounts[5]
		const addressZysFHtu = accounts[1]
		const uint256Rxu9GiX = await LedgisLeGc3i9.lockCount.call(addressQO6b4B, {from: accounts[1]});
		const addressdEPhmgc = await LedgisLeGc3i9.freeze.call(addressuxP50Oo, {from: accounts[4]});
		const boolUcF7Ujn = await LedgisLeGc3i9.increaseAllowance.call(addressOt9Jg8w, uintLNijkuS, {from: accounts[3]});
		const boolxIRHusQ = await LedgisLeGc3i9.isFrozen.call(addressZysFHtu, {from: accounts[0]});

		assert.equal(boolUcF7Ujn, true)
		assert.equal(boolxIRHusQ, false)
		assert.equal(uint256Rxu9GiX, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisyGi1lYi = await Ledgis.new({from: accounts[3]});
		const uintVUA3wUp = BigInt("932")
		const addressZinHhUX = accounts[3]
		const uintitcYude = BigInt("342")
		const uint41P3T9 = BigInt("312")
		const addresswFI28R0 = accounts[2]
		const addressUWb5xlb = accounts[4]
		const boolrEWEnK = await LedgisyGi1lYi.approve.call(addressZinHhUX, uintVUA3wUp, {from: accounts[4]});
//		const addressozcmQpy = await LedgisyGi1lYi.lockAfter.call(addresswFI28R0, uint41P3T9, uintitcYude, {from: accounts[3]});
//		const uint256rL37cmT = await LedgisyGi1lYi.balanceOf.call(addressUWb5xlb, {from: accounts[4]});

		assert.equal(boolrEWEnK, true)
		await expect(LedgisyGi1lYi.lockAfter.call(addresswFI28R0, uint41P3T9, uintitcYude, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLAFzgnX = await Ledgis.new({from: accounts[3]});
		const uintodF2fAb = BigInt("1211")
		const addressauLJ5Rh = accounts[0]
		const addressYWsfJ4U = accounts[3]
		const uintpBoLxRY = BigInt("1952")
		const addressiMCSK70 = accounts[2]
		const addressStyJwHY = accounts[4]
		const addresscFt1nVR = accounts[1]
		const addressq0D7tzb = accounts[3]
//		await LedgisLAFzgnX.lockState.call(addressauLJ5Rh, uintodF2fAb, {from: accounts[1]});
//		const addressptbNfmg = await LedgisLAFzgnX.transferOwnership.call(addressYWsfJ4U, {from: accounts[2]});
//		const boolwgPDcs5 = await LedgisLAFzgnX.transferFrom.call(addressStyJwHY, addressiMCSK70, uintpBoLxRY, {from: accounts[3]});
//		const uint256VO4zAOt = await LedgisLAFzgnX.lockCount.call(addresscFt1nVR, {from: accounts[1]});
//		const uint256hwTp830 = await LedgisLAFzgnX.lockCount.call(addressq0D7tzb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisLAFzgnX.lockState.call(addressauLJ5Rh, uintodF2fAb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgispgxGg2n = await Ledgis.new({from: accounts[5]});
		const addressJJuGHgq = accounts[5]
		const uintsqxuGST = BigInt("1085")
		const uintYDOGYN1 = BigInt("1774")
		const addressZsw2IGx = accounts[0]
		const uintdVR8tf = BigInt("179")
		const addresslw8R2jF = accounts[1]
		const uintqxYfSkK = BigInt("1241")
		const addressAMciLzC = accounts[3]
		const addressjWCJ3sz = accounts[3]
		const uint256flFXIgB = await LedgispgxGg2n.balanceOf.call(addressJJuGHgq, {from: accounts[1]});
		const booldWHICZn = await LedgispgxGg2n.transferWithLock.call(addressZsw2IGx, uintYDOGYN1, uintsqxuGST, {from: accounts[5]});
//		const boolJTSRjvV = await LedgispgxGg2n.transfer.call(addresslw8R2jF, uintdVR8tf, {from: accounts[2]});
//		const boolXsndQ2O = await LedgispgxGg2n.transferFrom.call(addressjWCJ3sz, addressAMciLzC, uintqxYfSkK, {from: accounts[3]});

		assert.equal(booldWHICZn, true)
		assert.equal(uint256flFXIgB, BigInt("10000000000000"))
		await expect(LedgispgxGg2n.transfer.call(addresslw8R2jF, uintdVR8tf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgispgxGg2n = await Ledgis.new({from: accounts[5]});
		const addressPAnpUK4 = accounts[5]
		const uintciX3L9f = BigInt("93")
		const addresskd4ZC1W = accounts[0]
		const uintdEZg1EB = BigInt("619")
		const addressyHylYsP = accounts[4]
		const uint256flFXIgB = await LedgispgxGg2n.balanceOf.call(addressPAnpUK4, {from: accounts[1]});
		const boolvbYp9Vn = await LedgispgxGg2n.approve.call(addresskd4ZC1W, uintciX3L9f, {from: accounts[4]});
//		const addressGKzP2vf = await LedgispgxGg2n.burn.call(addressyHylYsP, uintdEZg1EB, {from: accounts[5]});

		assert.equal(boolvbYp9Vn, true)
		assert.equal(uint256flFXIgB, BigInt("10000000000000"))
		await expect(LedgispgxGg2n.burn.call(addressyHylYsP, uintdEZg1EB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgispgxGg2n = await Ledgis.new({from: accounts[5]});
		const addresstMOksTz = accounts[4]
		const addressGAvKAIs = accounts[0]
		const uint256flFXIgB = await LedgispgxGg2n.balanceOf.call(addresstMOksTz, {from: accounts[1]});
		const addressydA8Fsa = await LedgispgxGg2n.unfreeze.call(addressGAvKAIs, {from: accounts[5]});

		assert.equal(uint256flFXIgB, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisYym6MuX = await Ledgis.new({from: accounts[1]});
		const uinta2boQ2e = BigInt("1566")
		const uintfXusMzM = BigInt("88")
		const addresswptTBHv = accounts[3]
		const addressljaGK70 = accounts[1]
		const uintJDetBPL = BigInt("701")
		const uintd2zgj5 = BigInt("1954")
		const addressb8hvbHX = accounts[2]
		const boolBFJnT5O = await LedgisYym6MuX.transferWithLockAfter.call(addresswptTBHv, uintfXusMzM, uinta2boQ2e, {from: accounts[1]});
//		await LedgisYym6MuX.renounceOwnership.call({from: accounts[3]});
//		const boolJMuTztP = await LedgisYym6MuX.isFrozen.call(addressljaGK70, {from: accounts[3]});
//		const uint256JUAEOt = await LedgisYym6MuX.afterTime.call(uintJDetBPL, {from: accounts[5]});
//		const boolMaVzxPb = await LedgisYym6MuX.transfer.call(addressb8hvbHX, uintd2zgj5, {from: accounts[1]});

		assert.equal(boolBFJnT5O, true)
		await expect(LedgisYym6MuX.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgispgxGg2n = await Ledgis.new({from: accounts[5]});
		const addressc0w1k2Z = accounts[4]
		const uintFvnrsb2 = BigInt("1074")
		const uintEV9WrOR = BigInt("204")
		const addressnyjhUM = accounts[3]
//		await LedgispgxGg2n.pause.call({from: accounts[5]});
//		const uint256flFXIgB = await LedgispgxGg2n.balanceOf.call(addressc0w1k2Z, {from: accounts[1]});
//		const addresspNzWEAp = await LedgispgxGg2n.lock.call(addressnyjhUM, uintEV9WrOR, uintFvnrsb2, {from: accounts[1]});

		await expect(LedgispgxGg2n.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgispgxGg2n = await Ledgis.new({from: accounts[5]});
		const addresstOdlXnM = accounts[5]
		const uintHRyHMp2 = BigInt("1195")
		const uintZ5C2AbT = BigInt("714")
		const addressG4Ev6CH = "0x0000000000000000000000000000000000000001"
		const uint256flFXIgB = await LedgispgxGg2n.balanceOf.call(addresstOdlXnM, {from: accounts[1]});
//		const addresseBcKBfL = await LedgispgxGg2n.lock.call(addressG4Ev6CH, uintZ5C2AbT, uintHRyHMp2, {from: accounts[5]});

		assert.equal(uint256flFXIgB, BigInt("10000000000000"))
		await expect(LedgispgxGg2n.lock.call(addressG4Ev6CH, uintZ5C2AbT, uintHRyHMp2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})