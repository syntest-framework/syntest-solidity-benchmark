const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringCJmjoPy = "mbUXUQalsC2FVPs6RWkO26yhBkBoxgWfXGeV0msEr61Gm9g8lzKggKXo7gbHfHjRHGvHrsnlc"
		const stringa0QW1QN = "Fo61UplSvg"
		const uintDAX1Z7O = BigInt("999")
		const WOLFkEoaAx6 = await WOLF.new(stringCJmjoPy, stringa0QW1QN, uintDAX1Z7O, {from: accounts[2]});
		const uintf8388f2 = BigInt("1199")
		const addressz7IL5QX = accounts[2]
		const addressssOou0L = accounts[3]
		const uintzzuMlIC = BigInt("815")
		const addressNpaLQFO = "0x0000000000000000000000000000000000000001"
		const addresswferuZ = accounts[4]
		const uintixIgJ4N = BigInt("1125")
		const addressMhHSov4 = accounts[4]
		const uintqpcmZ85 = BigInt("1054")
		const addressAQUKw0C = accounts[3]
		const addresstYQgfJQ = accounts[5]
//		const boolfzMPEsc = await WOLFkEoaAx6.transfer.call(addressz7IL5QX, uintf8388f2, {from: accounts[1]});
//		const boolObsqvls = await WOLFkEoaAx6.transferownership.call(addressssOou0L, {from: accounts[4]});
//		const booliZHRw1E = await WOLFkEoaAx6.transferFrom.call(addresswferuZ, addressNpaLQFO, uintzzuMlIC, {from: accounts[5]});
//		const boolZPOPvTI = await WOLFkEoaAx6.approveAndCall.call(addressMhHSov4, uintixIgJ4N, {from: "0x0000000000000000000000000000000000000001"});
//		const boolvkAdRlA = await WOLFkEoaAx6.transferFrom.call(addresstYQgfJQ, addressAQUKw0C, uintqpcmZ85, {from: accounts[2]});

		await expect(WOLFkEoaAx6.transfer.call(addressz7IL5QX, uintf8388f2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringGp5HUjy = "vpOHwcXN9phFzzXbK4DLj1VkpUupBfEJlVKT6wcQjRx8PQVc7YDF4FJXvIrHWaTgJ"
		const stringESSYPKb = "nvzvOFbRUgR1PnEPLYnymMq9YLIJeVeHjDez5xpSx9H4XM9Dkrh7AJa"
		const uintmxmEqzl = BigInt("1606")
		const WOLF0ZXKNT = await WOLF.new(stringGp5HUjy, stringESSYPKb, uintmxmEqzl, {from: accounts[1]});
		const uintE94RAly = BigInt("1577")
		const addressyNnD26Y = accounts[0]
		const addressvu5g2WD = accounts[4]
		const uintU4HfWtQ = BigInt("837")
		const addressANi9zaU = accounts[5]
		const uintF2a0u0i = BigInt("1219")
		const addressdyEosK8 = accounts[1]
		const uintCJSqCtT = BigInt("468")
		const addressKdcZX7h = accounts[0]
		const uintYyYLzgB = BigInt("968")
		const addressmvg5G27 = accounts[2]
//		const boolibqkah = await WOLF0ZXKNT.transferFrom.call(addressvu5g2WD, addressyNnD26Y, uintE94RAly, {from: accounts[1]});
//		const boolLuHvRSY = await WOLF0ZXKNT.approve.call(addressANi9zaU, uintU4HfWtQ, {from: accounts[3]});
//		const boolT3pLN8E = await WOLF0ZXKNT.approve.call(addressdyEosK8, uintF2a0u0i, {from: accounts[0]});
//		const booli7YBwGk = await WOLF0ZXKNT.approveAndCall.call(addressKdcZX7h, uintCJSqCtT, {from: accounts[2]});
//		const boolgk6Rzvn = await WOLF0ZXKNT.approve.call(addressmvg5G27, uintYyYLzgB, {from: accounts[2]});

		await expect(WOLF0ZXKNT.transferFrom.call(addressvu5g2WD, addressyNnD26Y, uintE94RAly, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringuvsPcd = "HbDDgZn4v7KdYrcHuJIol6YUpquXNeDHaSPyg7CQqvS112nWqUK1WcuhSdVs7hNn6K6PF"
		const stringleZ6HOJ = "pm1bmgfEtveaCPQgeAc93AaVNiAMEo6tgIhM"
		const uintnpfYekH = BigInt("1324")
		const WOLFi91SkCf = await WOLF.new(stringuvsPcd, stringleZ6HOJ, uintnpfYekH, {from: accounts[4]});
		const uintEW8bygE = BigInt("882")
		const addressqcsQvCV = accounts[0]
		const uintkS8cfiV = BigInt("114")
		const addressHEYbIOt = accounts[5]
		const addressmWzjY4k = accounts[0]
		const uintJrWZmWG = BigInt("1561")
		const addressB3kyqXS = accounts[0]
		const addressmZVwt5Q = accounts[5]
//		const boole2Jwjdy = await WOLFi91SkCf.approveAndCall.call(addressqcsQvCV, uintEW8bygE, {from: accounts[2]});
//		const boolJY97IYp = await WOLFi91SkCf.transferFrom.call(addressmWzjY4k, addressHEYbIOt, uintkS8cfiV, {from: accounts[3]});
//		const boolxDblqOM = await WOLFi91SkCf.approve.call(addressB3kyqXS, uintJrWZmWG, {from: accounts[1]});
//		const boolQC9s04 = await WOLFi91SkCf.transferownership.call(addressmZVwt5Q, {from: accounts[2]});

		await expect(WOLFi91SkCf.approveAndCall.call(addressqcsQvCV, uintEW8bygE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringhmOSOSu = "PUqCK7hyiXC9rOgWRNqhUMxJ3MBxvy6cjI"
		const stringAZKvToB = "jQCto1nQzCw5dzw5LUbrZlNAyJCn4xSJDhVPNGxCx0O6oQgdhnErXnbHmL3z2poSxYonD5jL"
		const uintISvwDDA = BigInt("1555")
		const WOLFSWsXIH = await WOLF.new(stringhmOSOSu, stringAZKvToB, uintISvwDDA, {from: accounts[2]});
		const uintfrQYCFR = BigInt("1481")
		const addressLbLPZaK = accounts[0]
		const addressyyaCocL = accounts[2]
		const uintwjhzWgq = BigInt("1297")
		const addressAe59AOI = "0x0000000000000000000000000000000000000001"
		const uintcEbsvN4 = BigInt("758")
		const addressmj6QKIY = "0x0000000000000000000000000000000000000001"
		const addressvZF9M8m = accounts[0]
		const boolRAHZvp = await WOLFSWsXIH.transferFrom.call(addressyyaCocL, addressLbLPZaK, uintfrQYCFR, {from: accounts[2]});
		const boolOYh5eZ1 = await WOLFSWsXIH.approveAndCall.call(addressAe59AOI, uintwjhzWgq, {from: accounts[2]});
//		const booleM3f2Fm = await WOLFSWsXIH.transferFrom.call(addressvZF9M8m, addressmj6QKIY, uintcEbsvN4, {from: accounts[3]});

		assert.equal(boolOYh5eZ1, true)
		assert.equal(boolRAHZvp, true)
		await expect(WOLFSWsXIH.transferFrom.call(addressvZF9M8m, addressmj6QKIY, uintcEbsvN4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringXvy261K = "OnNSZTPaFRtcuxWuQR3"
		const stringg8j4P7S = "ZcPbmsddg1lDIrKGM9nFvgYzX1AdyJRPnbdq3VGyiHu3K64J1RCkGonJTPQHFs8YGALWQfNSqqnz7z8wEDjAsynoQYQYvKsl5z3"
		const uintvMuxqbG = BigInt("1335")
		const WOLFVxfrBJ2 = await WOLF.new(stringXvy261K, stringg8j4P7S, uintvMuxqbG, {from: accounts[3]});
		const uintmJhcvCz = BigInt("1088")
		const addresscXjLm0Z = accounts[4]
		const addresskcpWuG = accounts[1]
		const uintlaPU94r = BigInt("1878")
		const addressO9heSoo = "0x0000000000000000000000000000000000000001"
		const uintKajhpl5 = BigInt("1620")
		const addressiJDEc08 = accounts[4]
		const addressu0jNCLL = accounts[1]
		const addresszR1Kffn = accounts[3]
		const booleODeE3e = await WOLFVxfrBJ2.transfer.call(addresscXjLm0Z, uintmJhcvCz, {from: accounts[3]});
//		const boolKwhJ6JO = await WOLFVxfrBJ2.transferownership.call(addresskcpWuG, {from: accounts[5]});
//		const boolKuQKkHH = await WOLFVxfrBJ2.approveAndCall.call(addressO9heSoo, uintlaPU94r, {from: accounts[0]});
//		const boolICNszQU = await WOLFVxfrBJ2.transferFrom.call(addressu0jNCLL, addressiJDEc08, uintKajhpl5, {from: accounts[1]});
//		const bool7nSHeX = await WOLFVxfrBJ2.transferownership.call(addresszR1Kffn, {from: accounts[3]});

		assert.equal(booleODeE3e, true)
		await expect(WOLFVxfrBJ2.transferownership.call(addresskcpWuG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringVMkL1Ai = "G7G"
		const stringj6MyYKu = "wj5aduYzgxSoxudkkuBFr3IlaJ6vhWe5HHcOOh3H8aY4uHntczczVP"
		const uintbQu7Zbc = BigInt("1728")
		const WOLFosBLjYM = await WOLF.new(stringVMkL1Ai, stringj6MyYKu, uintbQu7Zbc, {from: accounts[2]});
		const uintpVemnzd = BigInt("520")
		const addressKDODDEC = accounts[4]
		const uintHVsNltz = BigInt("1866")
		const addressgytvV6U = accounts[0]
		const uintaOGDIUW = BigInt("1036")
		const addressl1AQ46E = accounts[5]
		const boolRAWbgb = await WOLFosBLjYM.approve.call(addressKDODDEC, uintpVemnzd, {from: "0x0000000000000000000000000000000000000001"});
//		const boolCDt7V45 = await WOLFosBLjYM.approveAndCall.call(addressgytvV6U, uintHVsNltz, {from: accounts[5]});
//		const booloeMFNDW = await WOLFosBLjYM.approve.call(addressl1AQ46E, uintaOGDIUW, {from: accounts[5]});

		assert.equal(boolRAWbgb, true)
		await expect(WOLFosBLjYM.approveAndCall.call(addressgytvV6U, uintHVsNltz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringyxC611F = "wHM8w8w879QvelI2rg3b2zypUiCQVCfvx2FtKlFR16WyJLWnbZEOx8ENhQMaK2CSxAmOWCL2ahKE1"
		const stringRrBsFo = "MAD4lRnHvGsSEDLdh"
		const uintk0cQq40 = BigInt("103")
		const WOLFslWQZi = await WOLF.new(stringyxC611F, stringRrBsFo, uintk0cQq40, {from: accounts[0]});
		const uintPX3677R = BigInt("315")
		const addressLfMTyXi = accounts[4]
		const addressijJf6AT = accounts[5]
		const uintgqhrjO = BigInt("1559")
		const addressF18k5MP = accounts[0]
		const addressLnL7SD0 = accounts[4]
		const addressa8ZBQ04 = accounts[3]
		const uintc93VYHW = BigInt("1201")
		const addressbtR2zC = accounts[2]
//		const boolPc002TX = await WOLFslWQZi.transferFrom.call(addressijJf6AT, addressLfMTyXi, uintPX3677R, {from: accounts[5]});
//		const boolNeFvDy = await WOLFslWQZi.transferFrom.call(addressLnL7SD0, addressF18k5MP, uintgqhrjO, {from: accounts[0]});
//		const boolXnWv9F7 = await WOLFslWQZi.transferownership.call(addressa8ZBQ04, {from: accounts[3]});
//		const boolAY8EWn = await WOLFslWQZi.approve.call(addressbtR2zC, uintc93VYHW, {from: accounts[2]});

		await expect(WOLFslWQZi.transferFrom.call(addressijJf6AT, addressLfMTyXi, uintPX3677R, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringimG76gF = "0l7jeS5Ra6rabMjq97lq"
		const stringPPt06VQ = "tS4BWrJ3mK8vXIFUQAnreOFxZJlXi0hUeMdDJBlOW2LaLtVJsPId5s0nq5uBy9bZp0sWr4svA5Om7"
		const uintqNQs54 = BigInt("1890")
		const WOLFj59XklL = await WOLF.new(stringimG76gF, stringPPt06VQ, uintqNQs54, {from: "0x0000000000000000000000000000000000000001"});
		const uintLJCg76 = BigInt("763")
		const addressSNwIT3w = accounts[4]
		const addressWs099e = accounts[3]
		const uint92nMMz = BigInt("691")
		const addressgnWvDUk = accounts[1]
		const uintom1hQ14 = BigInt("110")
		const addressafe2cpS = accounts[1]
		const uintKBrsxzh = BigInt("793")
		const addressw06wcl7 = accounts[3]
		const uintMy28riQ = BigInt("1449")
		const addressabjGGXe = accounts[1]
		const booladDoqXX = await WOLFj59XklL.approve.call(addressSNwIT3w, uintLJCg76, {from: accounts[2]});
		const booldti8eXb = await WOLFj59XklL.transferownership.call(addressWs099e, {from: accounts[2]});
		const boolFa66Au = await WOLFj59XklL.approve.call(addressgnWvDUk, uint92nMMz, {from: accounts[3]});
		const boolqvzhSGz = await WOLFj59XklL.approveAndCall.call(addressafe2cpS, uintom1hQ14, {from: accounts[2]});
		const boolJeOD0G = await WOLFj59XklL.approve.call(addressw06wcl7, uintKBrsxzh, {from: "0x0000000000000000000000000000000000000001"});
		const boolsMTjNDF = await WOLFj59XklL.approve.call(addressabjGGXe, uintMy28riQ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WOLF', async () => {
		const stringJjnitRK = "daXFSmyi7d"
		const stringL5Za4zP = "SGvpmIPHRKs55q5qqla7N8oEraK"
		const uintCO5LgGN = BigInt("100")
		const WOLFAQk8WXr = await WOLF.new(stringJjnitRK, stringL5Za4zP, uintCO5LgGN, {from: accounts[4]});
		const addresskJ3aciQ = "0x0000000000000000000000000000000000000001"
		const uintTcXNjAe = BigInt("163")
		const addressdxyfSVO = accounts[0]
		const addressLr2xaS = accounts[3]
		const uintKoXnrlF = BigInt("1630")
		const addressCCFNg2W = accounts[5]
		const uintrpi9SiQ = BigInt("175")
		const addressu6vFv2w = accounts[5]
		const uintoqP0mhl = BigInt("1675")
		const addressjeTiApm = accounts[1]
		const boolH30qyjz = await WOLFAQk8WXr.transferownership.call(addresskJ3aciQ, {from: accounts[4]});
//		const boolPDOvARn = await WOLFAQk8WXr.transferFrom.call(addressLr2xaS, addressdxyfSVO, uintTcXNjAe, {from: accounts[0]});
//		const boolOEtO09j = await WOLFAQk8WXr.transfer.call(addressCCFNg2W, uintKoXnrlF, {from: accounts[1]});
//		const booluFnK9yb = await WOLFAQk8WXr.approveAndCall.call(addressu6vFv2w, uintrpi9SiQ, {from: accounts[2]});
//		const booltN2YZeX = await WOLFAQk8WXr.approve.call(addressjeTiApm, uintoqP0mhl, {from: accounts[1]});

		assert.equal(boolH30qyjz, true)
		await expect(WOLFAQk8WXr.transferFrom.call(addressLr2xaS, addressdxyfSVO, uintTcXNjAe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringyxC611F = "wHM8w8w879QvelI2rg3b2zypUiCQVCfvx2FtKlFR16WyJLWnbZEOx8ENhQMaK2CSxAmOWCL2ahKE1"
		const stringRrBsFo = "MAD4lRnHvGsSEDLdh"
		const uintEVVF01V = BigInt("103")
		const WOLFslWQZi = await WOLF.new(stringyxC611F, stringRrBsFo, uintEVVF01V, {from: accounts[0]});
		const uintlOqTvm1 = BigInt("0")
		const addressAgGfUYP = accounts[2]
		const uintTLV0S4 = BigInt("379")
		const addressh3FXYd0 = accounts[4]
		const addressAvPSvb5 = accounts[2]
		const uint7riCF7 = BigInt("1342")
		const addressn1HqIRN = accounts[2]
		const boolZVuvsrR = await WOLFslWQZi.approveAndCall.call(addressAgGfUYP, uintlOqTvm1, {from: accounts[0]});
//		const booleUorJt9 = await WOLFslWQZi.transferFrom.call(addressAvPSvb5, addressh3FXYd0, uintTLV0S4, {from: accounts[5]});
//		const boolaMyNsk0 = await WOLFslWQZi.approve.call(addressn1HqIRN, uint7riCF7, {from: accounts[2]});

		assert.equal(boolZVuvsrR, true)
		await expect(WOLFslWQZi.transferFrom.call(addressAvPSvb5, addressh3FXYd0, uintTLV0S4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringYPZX4p = "WDY0wJtH5oQP6lxM3skd1lcWSMKwt7yPCF71f7TX5jwHujuxHFur1IWPITezmTI6gWcVd3OI"
		const stringXQ9Krqr = "RsddqPVk9K1NwQsAf"
		const uintQyesJs = BigInt("1027")
		const WOLFC91D4T5 = await WOLF.new(stringYPZX4p, stringXQ9Krqr, uintQyesJs, {from: accounts[4]});
		const uintwu94QgP = BigInt("0")
		const addressDrj6d1 = accounts[5]
		const addressgcQ3TPY = accounts[4]
		const uintyTgYujY = BigInt("1329")
		const address6cnZNG = accounts[3]
		const addressyDmuAcK = accounts[3]
		const uintslkjWlW = BigInt("453")
		const addressPXDlGVP = "0x0000000000000000000000000000000000000001"
		const addresssu37gUb = accounts[0]
		const uintC7Nn1WK = BigInt("33")
		const addressnDG9iIo = accounts[0]
		const addressdhUTz3J = accounts[2]
		const addressmWrYD6G = accounts[1]
		const uintxLYfJtN = BigInt("1150")
		const addressCX4qLH5 = accounts[3]
		const addressRsCHul = accounts[0]
		const boolXv4REbT = await WOLFC91D4T5.transferFrom.call(addressgcQ3TPY, addressDrj6d1, uintwu94QgP, {from: accounts[0]});
		const boolLfK2pBv = await WOLFC91D4T5.approve.call(address6cnZNG, uintyTgYujY, {from: accounts[4]});
//		const boolE6Qmyrh = await WOLFC91D4T5.transferownership.call(addressyDmuAcK, {from: accounts[1]});
//		const booliYtK9LM = await WOLFC91D4T5.transferFrom.call(addresssu37gUb, addressPXDlGVP, uintslkjWlW, {from: accounts[1]});
//		const boolJT86Fd = await WOLFC91D4T5.transferFrom.call(addressdhUTz3J, addressnDG9iIo, uintC7Nn1WK, {from: accounts[3]});
//		const booldmpbok4 = await WOLFC91D4T5.transferownership.call(addressmWrYD6G, {from: accounts[4]});
//		const boolLfFU0h = await WOLFC91D4T5.transferFrom.call(addressRsCHul, addressCX4qLH5, uintxLYfJtN, {from: accounts[5]});

		assert.equal(boolLfK2pBv, true)
		assert.equal(boolXv4REbT, true)
		await expect(WOLFC91D4T5.transferownership.call(addressyDmuAcK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})