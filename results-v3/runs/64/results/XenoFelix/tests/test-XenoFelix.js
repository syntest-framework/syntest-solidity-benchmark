const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const XenoFelixiPjf7zA = await XenoFelix.new({from: accounts[3]});
		const addressuaA6M0O = accounts[4]
		const addresstBZzxBr = accounts[3]
		const addresskbfAj5F = accounts[0]
		const addresslPpt9kv = await XenoFelixiPjf7zA.addPauser.call(addressuaA6M0O, {from: accounts[0]});
		const boolSsKFiFm = await XenoFelixiPjf7zA.isOwner.call(addresstBZzxBr, {from: accounts[0]});
		const booldy0MKKV = await XenoFelixiPjf7zA.unfreezeAccount.call(addresskbfAj5F, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringxb3fzRv = "k8eiQi2CFZAF"
		const stringmwhSjpt = "3hV4WfT0lMplF82QJuFx4uKGw120WrDzGT0EUsjIrl4kJvwh39FyoN8dCwKloVna55gi"
		const uintdv0S2o7 = BigInt("125")
		const XenoFelixqzDJMm5 = await XenoFelix.new(stringxb3fzRv, stringmwhSjpt, uintdv0S2o7, {from: accounts[1]});
		const uintVbQ1Zg9 = BigInt("290")
		const addressZ7w47l = "0x0000000000000000000000000000000000000001"
		const addresssQX4Io4 = accounts[3]
		const uintAAn4oH6 = BigInt("97")
		const addressiepXRTb = accounts[2]
		const addressKLXx1Lq = accounts[0]
		const uintWUXCCIv = BigInt("1971")
		const addressT5sms8g = accounts[1]
		const boolYdPWAU = await XenoFelixqzDJMm5.transferFrom.call(addresssQX4Io4, addressZ7w47l, uintVbQ1Zg9, {from: accounts[1]});
		const boolAWxhHS1 = await XenoFelixqzDJMm5.transferFrom.call(addressKLXx1Lq, addressiepXRTb, uintAAn4oH6, {from: accounts[4]});
		const boolqe93ZD = await XenoFelixqzDJMm5.decreaseAllowance.call(addressT5sms8g, uintWUXCCIv, {from: accounts[4]});
		await XenoFelixqzDJMm5.unpause.call({from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringLW6Hkq0 = "VP"
		const stringzpsDAGV = "gWOEJi4Drq5KyTzQ7qbyze7KOsgGAwUM"
		const uintdjTylSn = BigInt("1800")
		const uints7OtSY2 = BigInt("237")
		const XenoFelixht6z0ho = await XenoFelix.new(stringLW6Hkq0, stringzpsDAGV, uintdjTylSn, uints7OtSY2, {from: accounts[2]});
		const uintX95UehE = BigInt("1710")
		const addressvy9Hre = accounts[4]
		const addressAZiCRF = accounts[4]
		const uintLXn8th6 = BigInt("35")
		const addressTrRG8sv = accounts[3]
		const addressTdxS4Lj = accounts[2]
		const boolj3OuZLB = await XenoFelixht6z0ho.decreaseAllowance.call(addressvy9Hre, uintX95UehE, {from: accounts[3]});
		await XenoFelixht6z0ho.onlyPauser.call({from: accounts[5]});
		const addressIDUX6Fh = await XenoFelixht6z0ho.removePauser.call(addressAZiCRF, {from: "0x0000000000000000000000000000000000000001"});
		const boolClx5AfT = await XenoFelixht6z0ho.transferFrom.call(addressTdxS4Lj, addressTrRG8sv, uintLXn8th6, {from: accounts[0]});

		await expect(XenoFelixht6z0ho.decreaseAllowance.call(addressvy9Hre, uintX95UehE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringTGiywYq = "qCJczJfQmtH7iX8pxiEOksaafaqllI5faGrJT7BOnyITlflApkKJvJOJL41qppdBX1uoScJiEFrVldREuXT9d58a6WP"
		const stringPZSVPMK = "uq2gu9CDwtdT"
		const uintsiFCAbM = BigInt("205")
		const XenoFelixNYXTd91 = await XenoFelix.new(stringTGiywYq, stringPZSVPMK, uintsiFCAbM, {from: accounts[2]});
		const addressebE82U = accounts[0]
		const addressm44JtRS = accounts[1]
		const uintWDU7R0x = BigInt("173")
		const addressFdsfKKN = accounts[1]
		const addressqzulo2X = accounts[2]
		const uint256QaRx9Uo = await XenoFelixNYXTd91.balanceOf.call(addressebE82U, {from: accounts[1]});
		const addressO9hEmF4 = await XenoFelixNYXTd91.notFrozen.call(addressm44JtRS, {from: accounts[4]});
		const addressFQMa5K2 = await XenoFelixNYXTd91.burnFrom.call(addressFdsfKKN, uintWDU7R0x, {from: accounts[3]});
		const bool6qmuaK = await XenoFelixNYXTd91.isOwner.call(addressqzulo2X, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringjNbZlo4 = "I5sSSJdCLv1DGuvCp59sk4fO7A9ypPYDAfgFscZmFn5bIFNmC9Nm1R4d18dDo1UMRQAwK"
		const stringHbZiPkF = "5GvWDKtiUoJumQAtZI7PJ9lD8IjbWOjewXZok2i9OVogXJAKAgf69QjDAteSWJBczI45APhXBKte7Ubx23hcZoUvjMC7"
		const uintawTaWOO = BigInt("1472")
		const uintK6xPFk4 = BigInt("77")
		const XenoFelixznmG29J = await XenoFelix.new(stringjNbZlo4, stringHbZiPkF, uintawTaWOO, uintK6xPFk4, {from: accounts[5]});
		const addresslgRQIL = accounts[4]
		const uintBBGFL1T = BigInt("360")
		const addresseY3bO2M = accounts[3]
		const addressliCnUEj = accounts[2]
		const uintRJaiKLQ = BigInt("1082")
		const addressBw1u01J = accounts[2]
		const boolboHTjIi = await XenoFelixznmG29J.isOwner.call(addresslgRQIL, {from: accounts[0]});
		const boolsbL9F5w = await XenoFelixznmG29J.approve.call(addresseY3bO2M, uintBBGFL1T, {from: accounts[0]});
		const uint256rYEFZqd = await XenoFelixznmG29J.balanceOf.call(addressliCnUEj, {from: accounts[4]});
		await XenoFelixznmG29J.whenPaused.call({from: accounts[1]});
		const boolBsN4vWl = await XenoFelixznmG29J.increaseAllowance.call(addressBw1u01J, uintRJaiKLQ, {from: accounts[3]});

		assert.equal(boolboHTjIi, false)
		assert.equal(boolsbL9F5w, true)
		assert.equal(uint256rYEFZqd, BigInt("0"))
		await expect(XenoFelixznmG29J.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringDwtAISs = "rFiqtpvONcvMnAlt"
		const stringk5QDOY4 = "syxcN55vVypQknL5vaDmXX1ijW2Z57x7qwa"
		const uintiROFKJ9 = BigInt("116")
		const XenoFelixaQwqpIx = await XenoFelix.new(stringDwtAISs, stringk5QDOY4, uintiROFKJ9, {from: accounts[4]});
		const uintvDG7DEx = BigInt("1013")
		const addressfNPTubP = accounts[1]
		const uintWsvZz4P = BigInt("1461")
		const addressz1IELXb = accounts[3]
		const uintua5kmFI = BigInt("751")
		const addressdtLTSlK = accounts[2]
		const addressAkYJfEB = accounts[2]
		const boolj2P0QFk = await XenoFelixaQwqpIx.acceptOwnership.call({from: accounts[2]});
		const booll5I8m0h = await XenoFelixaQwqpIx.transfer.call(addressfNPTubP, uintvDG7DEx, {from: accounts[2]});
		const boolqd1r44W = await XenoFelixaQwqpIx.approve.call(addressz1IELXb, uintWsvZz4P, {from: accounts[5]});
		const addressDW47tb = await XenoFelixaQwqpIx.burnFrom.call(addressdtLTSlK, uintua5kmFI, {from: accounts[4]});
		const boolY5XqbHf = await XenoFelixaQwqpIx.isOwner.call(addressAkYJfEB, {from: accounts[0]});
		const stringkI79Rqb = await XenoFelixaQwqpIx.symbol.call({from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringA6mOV9S = "8m1S"
		const stringDWgB11h = "f5OtKpaww7vFRMmPauIh23PNsJcJAflRFRV6461OoDsKudyaccp9SjCyBuUBAMPG2x2gkA1t4taPN4SZt1HaJxzEXuEz2nAzm"
		const uintUIuupU = BigInt("209")
		const XenoFelixD55tK2z = await XenoFelix.new(stringA6mOV9S, stringDWgB11h, uintUIuupU, {from: accounts[3]});
		const addressTTG98zZ = accounts[0]
		const uintbUGqMrM = BigInt("1720")
		const addressAb7CqWJ = accounts[3]
		const boolKkcEwVY = await XenoFelixD55tK2z.freezeAccount.call(addressTTG98zZ, {from: accounts[2]});
		const boolBOQuCd = await XenoFelixD55tK2z.approve.call(addressAb7CqWJ, uintbUGqMrM, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringX0c46Sq = "wJ6kD"
		const stringTCZnSmI = "L1P2KCwIi8pU4BxtVoBYTfK3NRe4RjDVPmc7SDTWrdRAMBQWHwyS5dNPyOlccszIhkf2Y6cYgL3obCeuYhwR0P"
		const uintWCnKyfv = BigInt("123")
		const XenoFelixXmFbaK = await XenoFelix.new(stringX0c46Sq, stringTCZnSmI, uintWCnKyfv, {from: accounts[5]});
		const uinteBfDpR = BigInt("905")
		const addressJhfaUhz = accounts[1]
		const uintr54N4of = BigInt("202")
		const addressmqb9IJ = accounts[0]
		const addressgVclCH9 = accounts[1]
		const boolrLwNLvh = await XenoFelixXmFbaK.burnOwner.call(addressJhfaUhz, uinteBfDpR, {from: accounts[3]});
		const boolWAmWO5J = await XenoFelixXmFbaK.transfer.call(addressmqb9IJ, uintr54N4of, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Xq8Ks2u = await XenoFelixXmFbaK.balanceOf.call(addressgVclCH9, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringjNbZlo4 = "I5sSSJdCLv1DGuvCp59sk4fO7A9ypPYDAfgFscZmFn5bIFNmC9Nm1R4d18dDo1UMRQAwK"
		const stringHbZiPkF = "5GvWDKtiUoJumQAtZI7PJ9lD8IjbWOjewXZok2i9OVogXJAKAgf69QjDAteSWJBczI45APhXBKte7Ubx23hcZoUvjMC7"
		const uintpkDgTr8 = BigInt("1472")
		const uintLGfDayN = BigInt("77")
		const XenoFelixznmG29J = await XenoFelix.new(stringjNbZlo4, stringHbZiPkF, uintpkDgTr8, uintLGfDayN, {from: accounts[5]});
		const addressIediP1v = accounts[5]
		const uintCsNYVZ0 = BigInt("360")
		const addressuzcww7E = accounts[3]
		const addresslKw6IBY = accounts[5]
		const addresstEqA2O = accounts[2]
		const addressrUBwGi1 = accounts[2]
		const uinthD2HdRZ = BigInt("1082")
		const addressxiW2y5 = accounts[2]
		const boolboHTjIi = await XenoFelixznmG29J.isOwner.call(addressIediP1v, {from: accounts[0]});
		const boolsbL9F5w = await XenoFelixznmG29J.approve.call(addressuzcww7E, uintCsNYVZ0, {from: accounts[0]});
		const addresspfwnNKD = await XenoFelixznmG29J.removePauser.call(addresslKw6IBY, {from: accounts[0]});
		const addressMOlhU6U = await XenoFelixznmG29J.transferOwnership.call(addresstEqA2O, {from: accounts[0]});
		const uint256rYEFZqd = await XenoFelixznmG29J.balanceOf.call(addressrUBwGi1, {from: accounts[4]});
		await XenoFelixznmG29J.whenPaused.call({from: accounts[1]});
		const boolBsN4vWl = await XenoFelixznmG29J.increaseAllowance.call(addressxiW2y5, uinthD2HdRZ, {from: accounts[3]});

		assert.equal(boolboHTjIi, true)
		assert.equal(boolsbL9F5w, true)
		await expect(XenoFelixznmG29J.removePauser.call(addresslKw6IBY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringjNbZlo4 = "I5sSSJdCLv1DGuvCp59sk4fO7A9ypPYDAfgFscZmFn5bIFNmC9Nm1R4d18dDo1UMRQAwK"
		const stringHbZiPkF = "5GvWDKtiUoJumQAtZI7PJ9lD8IjbWOjewXZok2i9OVogXJAKAgf69QjDAteSWJBczI45APhXBKte7Ubx23hcZoUvjMC7"
		const uintNYDUtNj = BigInt("1472")
		const uint6sEwfl = BigInt("77")
		const XenoFelixznmG29J = await XenoFelix.new(stringjNbZlo4, stringHbZiPkF, uintNYDUtNj, uint6sEwfl, {from: accounts[5]});
		const addressqn7gDdO = accounts[4]
		const addressBBF2ybs = "0x0000000000000000000000000000000000000001"
		const uintdqH2d8 = BigInt("369")
		const addressSiXdD3v = accounts[3]
		const addresseTlnXYE = accounts[2]
		const boolboHTjIi = await XenoFelixznmG29J.isOwner.call(addressqn7gDdO, {from: accounts[0]});
		const booleWlWxLB = await XenoFelixznmG29J.freezeAccount.call(addressBBF2ybs, {from: "0x0000000000000000000000000000000000000001"});
		const boolsbL9F5w = await XenoFelixznmG29J.approve.call(addressSiXdD3v, uintdqH2d8, {from: accounts[0]});
		const uint256rYEFZqd = await XenoFelixznmG29J.balanceOf.call(addresseTlnXYE, {from: accounts[4]});
		await XenoFelixznmG29J.whenPaused.call({from: accounts[1]});

		assert.equal(boolboHTjIi, false)
		await expect(XenoFelixznmG29J.freezeAccount.call(addressBBF2ybs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringLW6Hkq0 = "VP"
		const stringzpsDAGV = "gWOEJi4Drq5KyTzQ7qbyze7KOsgGAwUM"
		const uintgaXqqk5 = BigInt("1800")
		const uintHUbsDfg = BigInt("237")
		const XenoFelixht6z0ho = await XenoFelix.new(stringLW6Hkq0, stringzpsDAGV, uintgaXqqk5, uintHUbsDfg, {from: accounts[2]});
		const uintn3hjSGM = BigInt("421")
		const addressrxu61eD = accounts[2]
		const uintkNVzIxR = BigInt("1710")
		const addresstpwifo = accounts[4]
		const addressw6QoXT7 = accounts[4]
		const uintGDVSLHE = BigInt("35")
		const addressP1mYI3L = accounts[3]
		const addressKMwxHXD = accounts[2]
		const uint8nZjamfK = await XenoFelixht6z0ho.decimals.call({from: accounts[4]});
		const booldKHrEha = await XenoFelixht6z0ho.increaseAllowance.call(addressrxu61eD, uintn3hjSGM, {from: accounts[3]});
		const boolj3OuZLB = await XenoFelixht6z0ho.decreaseAllowance.call(addresstpwifo, uintkNVzIxR, {from: accounts[3]});
		const addressIDUX6Fh = await XenoFelixht6z0ho.removePauser.call(addressw6QoXT7, {from: "0x0000000000000000000000000000000000000001"});
		const boolClx5AfT = await XenoFelixht6z0ho.transferFrom.call(addressKMwxHXD, addressP1mYI3L, uintGDVSLHE, {from: accounts[0]});

		assert.equal(booldKHrEha, true)
		assert.equal(uint8nZjamfK, BigInt("237"))
		await expect(XenoFelixht6z0ho.decreaseAllowance.call(addresstpwifo, uintkNVzIxR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringLW6Hkq0 = "VP"
		const stringzpsDAGV = "gWOEJi4Drq5KyTzQ7qbyze7KOsgGAwUM"
		const uintc59sGv = BigInt("1800")
		const uintRz1lHDt = BigInt("237")
		const XenoFelixht6z0ho = await XenoFelix.new(stringLW6Hkq0, stringzpsDAGV, uintc59sGv, uintRz1lHDt, {from: accounts[2]});
		const uintZFXfzdR = BigInt("35")
		const addressQ0L4pU0 = accounts[3]
		const addresskeZGdVc = accounts[2]
		const boolClx5AfT = await XenoFelixht6z0ho.transferFrom.call(addresskeZGdVc, addressQ0L4pU0, uintZFXfzdR, {from: accounts[0]});

		await expect(XenoFelixht6z0ho.transferFrom.call(addresskeZGdVc, addressQ0L4pU0, uintZFXfzdR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringlXLS72V = "iwRphZT8zWXJxkmtyANXGghNcTgSUQKq5mVXyjAB4PijbCcWLKTqz3"
		const stringFHlkICU = "Od5ahezdLiocGurBbowWfCRfV20n3lMtrn2llwKfikwpHTrwzwsBrf48UO5UOJxfBAnjv1GaA"
		const uintrl3LuN6 = BigInt("1981")
		const uintrdQ2dl2 = BigInt("190")
		const XenoFelixNIMEu4v = await XenoFelix.new(stringlXLS72V, stringFHlkICU, uintrl3LuN6, uintrdQ2dl2, {from: accounts[4]});
		const uintqJamMSM = BigInt("1926")
		const addressduZiCn = accounts[2]
		const addressS3j3vs = accounts[2]
		const addresshFZMOI = accounts[2]
		const uintCsaRAx = BigInt("846")
		const addressr1PV4wg = accounts[2]
		const boolf1GlS2L = await XenoFelixNIMEu4v.transfer.call(addressduZiCn, uintqJamMSM, {from: accounts[0]});
		const addressRR3nuoA = await XenoFelixNIMEu4v.addPauser.call(addressS3j3vs, {from: accounts[4]});
		const boolSFzZuxb = await XenoFelixNIMEu4v.unfreezeAccount.call(addresshFZMOI, {from: accounts[1]});
		const boolgFBCLQa = await XenoFelixNIMEu4v.decreaseAllowance.call(addressr1PV4wg, uintCsaRAx, {from: accounts[2]});

		await expect(XenoFelixNIMEu4v.transfer.call(addressduZiCn, uintqJamMSM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringjNbZlo4 = "I5sSSJdCLv1DGuvCp59sk4fO7A9ypPYDAfgFscZmFn5bIFNmC9Nm1R4d18dDo1UMRQAwK"
		const stringHbZiPkF = "5GvWDKtiUoJumQAtZI7PJ9lD8IjbWOjewXZok2i9OVogXJAKAgf69QjDAteSWJBczI45APhXBKte7Ubx23hcZoUvjMC7"
		const uintzvO2UmC = BigInt("1472")
		const uintFDBr2sz = BigInt("77")
		const XenoFelixznmG29J = await XenoFelix.new(stringjNbZlo4, stringHbZiPkF, uintzvO2UmC, uintFDBr2sz, {from: accounts[5]});
		const addresscxdWgx0 = accounts[4]
		const uintOmZNIfO = BigInt("1886")
		const address4etHSA = accounts[3]
		const uintBMEMaS = BigInt("358")
		const addressjxD0xna = accounts[3]
		const addressAPKLrvR = accounts[2]
		const uintjYo0WRs = BigInt("1082")
		const address48vu2A = accounts[2]
		const boolboHTjIi = await XenoFelixznmG29J.isOwner.call(addresscxdWgx0, {from: accounts[0]});
		const boolrSCLLeu = await XenoFelixznmG29J.approve.call(address4etHSA, uintOmZNIfO, {from: accounts[1]});
		const boolsbL9F5w = await XenoFelixznmG29J.approve.call(addressjxD0xna, uintBMEMaS, {from: accounts[0]});
		const uint256rYEFZqd = await XenoFelixznmG29J.balanceOf.call(addressAPKLrvR, {from: accounts[4]});
		const boolBsN4vWl = await XenoFelixznmG29J.increaseAllowance.call(address48vu2A, uintjYo0WRs, {from: accounts[3]});
		await XenoFelixznmG29J.renouncePauser.call({from: accounts[0]});

		assert.equal(boolBsN4vWl, true)
		assert.equal(boolboHTjIi, false)
		assert.equal(boolrSCLLeu, true)
		assert.equal(boolsbL9F5w, true)
		assert.equal(uint256rYEFZqd, BigInt("0"))
		await expect(XenoFelixznmG29J.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringjNbZlo4 = "I5sSSJdCLv1DGuvCp59sk4fO7A9ypPYDAfgFscZmFn5bIFNmC9Nm1R4d18dDo1UMRQAwK"
		const stringHbZiPkF = "5GvWDKtiUoJumQAtZI7PJ9lD8IjbWOjewXZok2i9OVogXJAKAgf69QjDAteSWJBczI45APhXBKte7Ubx23hcZoUvjMC7"
		const uintZsLiJPN = BigInt("1472")
		const uintEJqmDuz = BigInt("77")
		const XenoFelixznmG29J = await XenoFelix.new(stringjNbZlo4, stringHbZiPkF, uintZsLiJPN, uintEJqmDuz, {from: accounts[5]});
		const addressGx4Cqwd = accounts[3]
		const uintOfH76E = BigInt("674")
		const uint256rYEFZqd = await XenoFelixznmG29J.balanceOf.call(addressGx4Cqwd, {from: accounts[4]});
		const uint256N6cvtBf = await XenoFelixznmG29J.burn.call(uintOfH76E, {from: accounts[4]});

		assert.equal(uint256rYEFZqd, BigInt("0"))
		await expect(XenoFelixznmG29J.burn.call(uintOfH76E, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringvK0t6iY = "ItKseJKHNRs8Iy"
		const stringpytUJOO = "ChEtJHz0Kwinr65aZrYmqgxMMR7ZIdvxzQw0IgKDG6UCfo8I5aY"
		const uintNyFQySu = BigInt("237")
		const XenoFelixkUJNwyt = await XenoFelix.new(stringvK0t6iY, stringpytUJOO, uintNyFQySu, {from: accounts[0]});
		const addressgog1OyF = "0x0000000000000000000000000000000000000001"
		const addressF5V8EuH = accounts[5]
		const addressQRBsudE = accounts[2]
		const uintG6s8jFd = BigInt("384")
		const addressw70Ffz5 = accounts[3]
		const addressTE62Ou = accounts[5]
		const uintMuubjOd = BigInt("709")
		const addressq4ExSDj = accounts[0]
		const addresslX0FqLG = accounts[2]
		const boolszg9AVf = await XenoFelixkUJNwyt.freezeAccount.call(addressgog1OyF, {from: accounts[0]});
		await XenoFelixkUJNwyt.renouncePauser.call({from: accounts[3]});
		const uint256r63aQp = await XenoFelixkUJNwyt.allowance.call(addressQRBsudE, addressF5V8EuH, {from: accounts[0]});
		const boolgZ6qunA = await XenoFelixkUJNwyt.transferFrom.call(addressTE62Ou, addressw70Ffz5, uintG6s8jFd, {from: accounts[1]});
		const boolxvdQWlc = await XenoFelixkUJNwyt.transferFrom.call(addresslX0FqLG, addressq4ExSDj, uintMuubjOd, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringjNbZlo4 = "I5sSSJdCLv1DGuvCp59sk4fO7A9ypPYDAfgFscZmFn5bIFNmC9Nm1R4d18dDo1UMRQAwK"
		const stringHbZiPkF = "5GvWDKtiUoJumQAtZI7PJ9lD8IjbWOjewXZok2i9OVogXJAKAgf69QjDAteSWJBczI45APhXBKte7Ubx23hcZoUvjMC7"
		const uintvrRs3m = BigInt("1472")
		const uintpQUlIGU = BigInt("77")
		const XenoFelixznmG29J = await XenoFelix.new(stringjNbZlo4, stringHbZiPkF, uintvrRs3m, uintpQUlIGU, {from: accounts[5]});
		const addressoHZ1e9m = accounts[6]
		const uintdx5NLC = BigInt("1941")
		const addressdRXQwWl = accounts[0]
		const addressiuG4ltr = accounts[2]
		const boolboHTjIi = await XenoFelixznmG29J.isOwner.call(addressoHZ1e9m, {from: accounts[0]});
		const addressIFgv9TS = await XenoFelixznmG29J.burnFrom.call(addressdRXQwWl, uintdx5NLC, {from: accounts[4]});
		await XenoFelixznmG29J.pause.call({from: accounts[2]});
		const uint256rYEFZqd = await XenoFelixznmG29J.balanceOf.call(addressiuG4ltr, {from: accounts[4]});

		assert.equal(boolboHTjIi, false)
		await expect(XenoFelixznmG29J.burnFrom.call(addressdRXQwWl, uintdx5NLC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringLW6Hkq0 = "VP"
		const stringzpsDAGV = "gWOEJi4Drq5KyTzQ7qbyze7KOsgGAwUM"
		const uintI3dkr4H = BigInt("1800")
		const uintXC8vblm = BigInt("237")
		const XenoFelixht6z0ho = await XenoFelix.new(stringLW6Hkq0, stringzpsDAGV, uintI3dkr4H, uintXC8vblm, {from: accounts[2]});
		const uintKkJOZ8t = BigInt("35")
		const addressU7iLaoK = accounts[3]
		const addressUSuYtOm = accounts[3]
		const addressXAP5DVl = accounts[4]
		const boolQG86tiL = await XenoFelixht6z0ho.paused.call({from: accounts[1]});
		const boolClx5AfT = await XenoFelixht6z0ho.transferFrom.call(addressUSuYtOm, addressU7iLaoK, uintKkJOZ8t, {from: accounts[0]});
		const boolTTuUqR5 = await XenoFelixht6z0ho.unfreezeAccount.call(addressXAP5DVl, {from: accounts[5]});

		assert.equal(boolQG86tiL, false)
		await expect(XenoFelixht6z0ho.transferFrom.call(addressUSuYtOm, addressU7iLaoK, uintKkJOZ8t, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringjNbZlo4 = "I5sSSJdCLv1DGuvCp59sk4fO7A9ypPYDAfgFscZmFn5bIFNmC9Nm1R4d18dDo1UMRQAwK"
		const stringHbZiPkF = "5GvWDKtiUoJumQAtZI7PJ9lD8IjbWOjewXZok2i9OVogXJAKAgf69QjDAteSWJBczI45APhXBKte7Ubx23hcZoUvjMC7"
		const uintkylh4w = BigInt("1472")
		const uintAJVkon = BigInt("77")
		const XenoFelixznmG29J = await XenoFelix.new(stringjNbZlo4, stringHbZiPkF, uintkylh4w, uintAJVkon, {from: accounts[5]});
		const addressj3t14I = accounts[4]
		const uint256rYEFZqd = await XenoFelixznmG29J.balanceOf.call(addressj3t14I, {from: accounts[4]});
		const stringoYrI8wA = await XenoFelixznmG29J.name.call({from: accounts[1]});

		assert.equal(stringoYrI8wA, "I5sSSJdCLv1DGuvCp59sk4fO7A9ypPYDAfgFscZmFn5bIFNmC9Nm1R4d18dDo1UMRQAwK")
		assert.equal(uint256rYEFZqd, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringjNbZlo4 = "I5sSSJdCLv1DGuvCp59sk4fO7A9ypPYDAfgFscZmFn5bIFNmC9Nm1R4d18dDo1UMRQAwK"
		const stringHbZiPkF = "5GvWDKtiUoJumQAtZI7PJ9lD8IjbWOjewXZok2i9OVogXJAKAgf69QjDAteSWJBczI45APhXBKte7Ubx23hcZoUvjMC7"
		const uintFpBJKA6 = BigInt("1472")
		const uintODf8KEs = BigInt("77")
		const XenoFelixznmG29J = await XenoFelix.new(stringjNbZlo4, stringHbZiPkF, uintFpBJKA6, uintODf8KEs, {from: accounts[5]});
		const addressKvXcntV = accounts[4]
		const uintNo6q9YN = BigInt("1886")
		const addressiHWjEgY = accounts[3]
		const uintwz6UWw1 = BigInt("358")
		const addressbGsEGv1 = accounts[3]
		const addressZzlg0lM = accounts[3]
		const addressbTfd2zq = accounts[2]
		const addresscVicPbS = "0x0000000000000000000000000000000000000000"
		const uintdFdYTri = BigInt("1458")
		const addresse6KG54 = "0x0000000000000000000000000000000000000001"
		const boolboHTjIi = await XenoFelixznmG29J.isOwner.call(addressKvXcntV, {from: accounts[0]});
		const boolrSCLLeu = await XenoFelixznmG29J.approve.call(addressiHWjEgY, uintNo6q9YN, {from: accounts[1]});
		const uint256Awa5HbR = await XenoFelixznmG29J.totalSupply.call({from: accounts[2]});
		const boolsbL9F5w = await XenoFelixznmG29J.approve.call(addressbGsEGv1, uintwz6UWw1, {from: accounts[0]});
		const boolKYHhxnL = await XenoFelixznmG29J.isOwner.call(addressZzlg0lM, {from: accounts[0]});
		const uint256rYEFZqd = await XenoFelixznmG29J.balanceOf.call(addressbTfd2zq, {from: accounts[4]});
		await XenoFelixznmG29J.renouncePauser.call({from: accounts[0]});
		const addressao9Z6bG = await XenoFelixznmG29J.notFrozen.call(addresscVicPbS, {from: accounts[1]});
		const bool4uPpHt = await XenoFelixznmG29J.burnOwner.call(addresse6KG54, uintdFdYTri, {from: accounts[4]});

		assert.equal(boolKYHhxnL, false)
		assert.equal(boolboHTjIi, false)
		assert.equal(boolrSCLLeu, true)
		assert.equal(boolsbL9F5w, true)
		assert.equal(uint256Awa5HbR, BigInt("28254579371115616641278053957669118493849489970843105849410725942412227641344"))
		assert.equal(uint256rYEFZqd, BigInt("0"))
		await expect(XenoFelixznmG29J.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringjNbZlo4 = "I5sSSJdCLv1DGuvCp59sk4fO7A9ypPYDAfgFscZmFn5bIFNmC9Nm1R4d18dDo1UMRQAwK"
		const stringHbZiPkF = "5GvWDKtiUoJumQAtZI7PJ9lD8IjbWOjewXZok2i9OVogXJAKAgf69QjDAteSWJBczI45APhXBKte7Ubx23hcZoUvjMC7"
		const uintEDNGYGX = BigInt("1472")
		const uintbh5XYlj = BigInt("77")
		const XenoFelixznmG29J = await XenoFelix.new(stringjNbZlo4, stringHbZiPkF, uintEDNGYGX, uintbh5XYlj, {from: accounts[5]});
		const addressPVGxpgh = accounts[1]
		const addressfkrUTCg = accounts[5]
		const addresszJzXE2u = accounts[4]
		const uintwHFptBT = BigInt("1264")
		const addresshJBvTwD = accounts[5]
		const uint256ZTEbP06 = await XenoFelixznmG29J.allowance.call(addressfkrUTCg, addressPVGxpgh, {from: accounts[4]});
		const uint256rYEFZqd = await XenoFelixznmG29J.balanceOf.call(addresszJzXE2u, {from: accounts[4]});
		const uint8fTkZIbE = await XenoFelixznmG29J.decimals.call({from: accounts[2]});
		const boolpwjqA3 = await XenoFelixznmG29J.transfer.call(addresshJBvTwD, uintwHFptBT, {from: accounts[3]});
		await XenoFelixznmG29J.onlyPauser.call({from: accounts[4]});

		assert.equal(uint256ZTEbP06, BigInt("0"))
		assert.equal(uint256rYEFZqd, BigInt("0"))
		assert.equal(uint8fTkZIbE, BigInt("77"))
		await expect(XenoFelixznmG29J.transfer.call(addresshJBvTwD, uintwHFptBT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringjNbZlo4 = "I5sSSJdCLv1DGuvCp59sk4fO7A9ypPYDAfgFscZmFn5bIFNmC9Nm1R4d18dDo1UMRQAwK"
		const stringHbZiPkF = "5GvWDKtiUoJumQAtZI7PJ9lD8IjbWOjewXZok2i9OVogXJAKAgf69QjDAteSWJBczI45APhXBKte7Ubx23hcZoUvjMC7"
		const uintVf6px18 = BigInt("1472")
		const uintKxOceko = BigInt("77")
		const XenoFelixznmG29J = await XenoFelix.new(stringjNbZlo4, stringHbZiPkF, uintVf6px18, uintKxOceko, {from: accounts[5]});
		const addressD7R6v77 = accounts[3]
		const uint256rYEFZqd = await XenoFelixznmG29J.balanceOf.call(addressD7R6v77, {from: accounts[4]});
		const stringdKmrNAF = await XenoFelixznmG29J.symbol.call({from: accounts[3]});
		await XenoFelixznmG29J.onlyNewOwner.call({from: accounts[1]});

		assert.equal(stringdKmrNAF, "5GvWDKtiUoJumQAtZI7PJ9lD8IjbWOjewXZok2i9OVogXJAKAgf69QjDAteSWJBczI45APhXBKte7Ubx23hcZoUvjMC7")
		assert.equal(uint256rYEFZqd, BigInt("0"))
		await expect(XenoFelixznmG29J.onlyNewOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringetPOBUp = "TszcfERZGLpthJet7E7qxlOKmjzVhY4dXFAIF4OiFIjhsxOSod2jZg4Uzb0nhGFeQJhuacW9z4DWPAGtU6"
		const stringmL58kRI = "e9GgMRBmWvrkPUjkSxiHakTMpRDRV2eGAYAxqobqDFt6tPBrmozAAe9TBQnrEBn2kpy6dXcYaXjtLaN2Yo3x6Imu6zECT"
		const uintw7JpOv = BigInt("118")
		const XenoFelixh85Xnn5 = await XenoFelix.new(stringetPOBUp, stringmL58kRI, uintw7JpOv, {from: "0x0000000000000000000000000000000000000001"});
		const addressAjCpaJ = accounts[3]
		const addresso14XUWe = accounts[2]
		const uintASAUsFI = BigInt("114")
		const address9yEZDF = accounts[2]
		const addressytJVIC = accounts[1]
		const addressXjABOb = accounts[2]
		const addressAbLBSOU = accounts[2]
		const addressCSDjbA0 = await XenoFelixh85Xnn5.notFrozenAndTransaction.call(addresso14XUWe, addressAjCpaJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolD0RkDP2 = await XenoFelixh85Xnn5.paused.call({from: accounts[0]});
		await XenoFelixh85Xnn5.whenNotPaused.call({from: accounts[1]});
		const boolUJrOUmy = await XenoFelixh85Xnn5.transferFrom.call(addressytJVIC, address9yEZDF, uintASAUsFI, {from: accounts[4]});
		const uint256O3fphS3 = await XenoFelixh85Xnn5.allowance.call(addressAbLBSOU, addressXjABOb, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringjNbZlo4 = "I5sSSJdCLv1DGuvCp59sk4fO7A9ypPYDAfgFscZmFn5bIFNmC9Nm1R4d18dDo1UMRQAwK"
		const stringHbZiPkF = "5GvWDKtiUoJumQAtZI7PJ9lD8IjbWOjewXZok2i9OVogXJAKAgf69QjDAteSWJBczI45APhXBKte7Ubx23hcZoUvjMC7"
		const uintCbTZn6 = BigInt("1472")
		const uintYzrESfV = BigInt("77")
		const XenoFelixznmG29J = await XenoFelix.new(stringjNbZlo4, stringHbZiPkF, uintCbTZn6, uintYzrESfV, {from: accounts[5]});
		const addressBs19Lkm = accounts[4]
		const boolH6eUS1B = await XenoFelixznmG29J.freezeAccount.call(addressBs19Lkm, {from: accounts[5]});
		await XenoFelixznmG29J.renouncePauser.call({from: accounts[4]});

		assert.equal(boolH6eUS1B, true)
		await expect(XenoFelixznmG29J.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringLW6Hkq0 = "VP"
		const stringzpsDAGV = "gWOEJi4Drq5KyTzQ7qbyze7KOsgGAwUM"
		const uinth4f9onH = BigInt("1800")
		const uintLBR10XE = BigInt("237")
		const XenoFelixht6z0ho = await XenoFelix.new(stringLW6Hkq0, stringzpsDAGV, uinth4f9onH, uintLBR10XE, {from: accounts[2]});
		const addressZ3sa64M = accounts[1]
		const addressade6N0c = accounts[4]
		const uintovKLD0 = BigInt("35")
		const addressH3oJsrP = accounts[4]
		const addressI7RdYh = accounts[2]
		const boolzzThYzR = await XenoFelixht6z0ho.unfreezeAccount.call(addressZ3sa64M, {from: accounts[2]});
		const addressHnRtifP = await XenoFelixht6z0ho.notFrozen.call(addressade6N0c, {from: accounts[4]});
		const boolClx5AfT = await XenoFelixht6z0ho.transferFrom.call(addressI7RdYh, addressH3oJsrP, uintovKLD0, {from: accounts[0]});

		await expect(XenoFelixht6z0ho.unfreezeAccount.call(addressZ3sa64M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringjNbZlo4 = "I5sSSJdCLv1DGuvCp59sk4fO7A9ypPYDAfgFscZmFn5bIFNmC9Nm1R4d18dDo1UMRQAwK"
		const stringHbZiPkF = "5GvWDKtiUoJumQAtZI7PJ9lD8IjbWOjewXZok2i9OVogXJAKAgf69QjDAteSWJBczI45APhXBKte7Ubx23hcZoUvjMC7"
		const uintZXKPN4M = BigInt("1472")
		const uintUbkiYSf = BigInt("77")
		const XenoFelixznmG29J = await XenoFelix.new(stringjNbZlo4, stringHbZiPkF, uintZXKPN4M, uintUbkiYSf, {from: accounts[5]});
		const addressqmGpOtM = accounts[5]
		const addressEig9FEB = accounts[3]
		const uintEPJFbK = BigInt("1289")
		const addresshuluVhq = accounts[0]
		const addressho733OQ = accounts[2]
		const addressVbekDEM = await XenoFelixznmG29J.addPauser.call(addressqmGpOtM, {from: accounts[5]});
		const uint256rYEFZqd = await XenoFelixznmG29J.balanceOf.call(addressEig9FEB, {from: accounts[4]});
		const boolTmbNYjS = await XenoFelixznmG29J.increaseAllowance.call(addresshuluVhq, uintEPJFbK, {from: accounts[0]});
		const addressmU44rmt = await XenoFelixznmG29J.notFrozen.call(addressho733OQ, {from: accounts[4]});

		await expect(XenoFelixznmG29J.addPauser.call(addressqmGpOtM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpC2Qr8Y = "k1cyi7oM2ieiSkC6AfkUaRR2vbt13E4vaJYifiQmbJLm8VBBGpLIpRj"
		const stringZDQnXOJ = "DtoCIeRV0Uqk7w0VVLU8bCGjHxXl2nIXKorKm8wyL9bCVTCszQoSOExsdBldqFrZwgiepHS"
		const uintoYTKPrI = BigInt("1660")
		const uintBqoO7NZ = BigInt("248")
		const XenoFelixTo5iom = await XenoFelix.new(stringpC2Qr8Y, stringZDQnXOJ, uintoYTKPrI, uintBqoO7NZ, {from: "0x0000000000000000000000000000000000000001"});
		const addressyBRn81E = accounts[3]
		const uintwMH6K8Q = BigInt("883")
		const addressdwmgF9B = accounts[3]
		const uintHfSW8rB = BigInt("95")
		const addressAfYk9Qw = accounts[0]
		const boolkRbuaod = await XenoFelixTo5iom.isOwner.call(addressyBRn81E, {from: accounts[2]});
		const booln0EVWMo = await XenoFelixTo5iom.transfer.call(addressdwmgF9B, uintwMH6K8Q, {from: "0x0000000000000000000000000000000000000001"});
		const booloSpVhde = await XenoFelixTo5iom.transfer.call(addressAfYk9Qw, uintHfSW8rB, {from: accounts[2]});
	});
})