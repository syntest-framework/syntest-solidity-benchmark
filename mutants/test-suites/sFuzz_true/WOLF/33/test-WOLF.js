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
		const stringhmOSOSu = "PUqCK7hyiXC9rOgWRNqhUMxJ3MBxvy6cjI"
		const stringAZKvToB = "jQCto1nQzCw5dzw5LUbrZlNAyJCn4xSJDhVPNGxCx0O6oQgdhnErXnbHmL3z2poSxYonD5jL"
		const uintqHOWkVF = BigInt("1555")
		const WOLFSWsXIH = await WOLF.new(stringhmOSOSu, stringAZKvToB, uintqHOWkVF, {from: accounts[2]});
		const uintqz7C39 = BigInt("590")
		const addressbtzgwAY = accounts[0]
		const uintxqlL6YP = BigInt("1481")
		const addressFVQs2C = accounts[0]
		const addressABkuWVc = accounts[2]
		const uintknBJw9y = BigInt("526")
		const addressYraRupp = accounts[5]
		const uintWbxixQa = BigInt("1297")
		const addresshxYlljy = "0x0000000000000000000000000000000000000001"
		const uintOXItTDM = BigInt("758")
		const addressYDAxC4q = "0x0000000000000000000000000000000000000001"
		const addressZX0HIn8 = accounts[0]
		const boolXPdp2Ev = await WOLFSWsXIH.approveAndCall.call(addressbtzgwAY, uintqz7C39, {from: accounts[2]});
		const boolRAHZvp = await WOLFSWsXIH.transferFrom.call(addressABkuWVc, addressFVQs2C, uintxqlL6YP, {from: accounts[2]});
//		const boolvrRwo6 = await WOLFSWsXIH.transfer.call(addressYraRupp, uintknBJw9y, {from: accounts[1]});
//		const boolOYh5eZ1 = await WOLFSWsXIH.approveAndCall.call(addresshxYlljy, uintWbxixQa, {from: accounts[2]});
//		const booleM3f2Fm = await WOLFSWsXIH.transferFrom.call(addressZX0HIn8, addressYDAxC4q, uintOXItTDM, {from: accounts[3]});

		assert.equal(boolRAHZvp, true)
		assert.equal(boolXPdp2Ev, true)
		await expect(WOLFSWsXIH.transfer.call(addressYraRupp, uintknBJw9y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringXvy261K = "OnNSZTPaFRtcuxWuQR3"
		const stringg8j4P7S = "ZcPbmsddg1lDIrKGM9nFvgYzX1AdyJRPnbdq3VGyiHu3K64J1RCkGonJTPQHFs8YGALWQfNSqqnz7z8wEDjAsynoQYQYvKsl5z3"
		const uintTj8FSIy = BigInt("1335")
		const WOLFVxfrBJ2 = await WOLF.new(stringXvy261K, stringg8j4P7S, uintTj8FSIy, {from: accounts[3]});
		const uintkB6E0vN = BigInt("1088")
		const addressNokmYln = accounts[4]
		const uintYiXTvgr = BigInt("1613")
		const addressmDogXcg = accounts[4]
		const addressh1r7rW6 = accounts[1]
		const uintX6d8ln = BigInt("1892")
		const addressR3GRMPX = "0x0000000000000000000000000000000000000001"
		const uintNtnaHc2 = BigInt("1620")
		const addressq7esqxT = accounts[4]
		const addressopKNn0L = accounts[1]
		const uintXeuPgnf = BigInt("66")
		const addresst2nQXCz = accounts[5]
		const addressfT8PBTn = accounts[3]
		const booleODeE3e = await WOLFVxfrBJ2.transfer.call(addressNokmYln, uintkB6E0vN, {from: accounts[3]});
		const boolgIgIHJ = await WOLFVxfrBJ2.approve.call(addressmDogXcg, uintYiXTvgr, {from: accounts[4]});
//		const boolKwhJ6JO = await WOLFVxfrBJ2.transferownership.call(addressh1r7rW6, {from: accounts[5]});
//		const boolKuQKkHH = await WOLFVxfrBJ2.approveAndCall.call(addressR3GRMPX, uintX6d8ln, {from: accounts[0]});
//		const boolICNszQU = await WOLFVxfrBJ2.transferFrom.call(addressopKNn0L, addressq7esqxT, uintNtnaHc2, {from: accounts[1]});
//		const bool6O70su = await WOLFVxfrBJ2.transfer.call(addresst2nQXCz, uintXeuPgnf, {from: accounts[0]});
//		const bool7nSHeX = await WOLFVxfrBJ2.transferownership.call(addressfT8PBTn, {from: accounts[3]});

		assert.equal(booleODeE3e, true)
		assert.equal(boolgIgIHJ, true)
		await expect(WOLFVxfrBJ2.transferownership.call(addressh1r7rW6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringXvy261K = "OnNSZTPaFRtcuxWuQR3"
		const stringg8j4P7S = "ZcPbmsddg1lDIrKGM9nFvgYzX1AdyJRPnbdq3VGyiHu3K64J1RCkGonJTPQHFs8YGALWQfNSqqnz7z8wEDjAsynoQYQYvKsl5z3"
		const uintG57OVTO = BigInt("1335")
		const WOLFVxfrBJ2 = await WOLF.new(stringXvy261K, stringg8j4P7S, uintG57OVTO, {from: accounts[3]});
		const addressx7RJZc0 = accounts[5]
		const uintejMyDWz = BigInt("1076")
		const addressuZh8xZA = accounts[4]
		const addressbfDSBMl = accounts[2]
		const addressKSJ31ew = accounts[1]
		const uintKtmKix = BigInt("1620")
		const addressQTrFxqU = accounts[4]
		const addressJRcEDQX = accounts[1]
		const addressVKxdJzz = accounts[3]
		const boolq2TX7kp = await WOLFVxfrBJ2.transferownership.call(addressx7RJZc0, {from: accounts[3]});
		const booleODeE3e = await WOLFVxfrBJ2.transfer.call(addressuZh8xZA, uintejMyDWz, {from: accounts[3]});
//		const boolKwhJ6JO = await WOLFVxfrBJ2.transferownership.call(addressbfDSBMl, {from: accounts[5]});
//		const boolwX4DvrI = await WOLFVxfrBJ2.transferownership.call(addressKSJ31ew, {from: accounts[0]});
//		const boolICNszQU = await WOLFVxfrBJ2.transferFrom.call(addressJRcEDQX, addressQTrFxqU, uintKtmKix, {from: accounts[1]});
//		const bool7nSHeX = await WOLFVxfrBJ2.transferownership.call(addressVKxdJzz, {from: accounts[3]});

		assert.equal(booleODeE3e, true)
		assert.equal(boolq2TX7kp, true)
		await expect(WOLFVxfrBJ2.transferownership.call(addressbfDSBMl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringQurTD0E = "dqiwBbSPB"
		const stringwg8dSc7 = "QqjHNAZ8NzmPonjQXO1pzFKjXdWn2aDg4Z2TZrHIyBEb00F5s6eB8MzTEOTfYE68CRAooJzyQTK5PAn"
		const uintcnuxm8 = BigInt("1774")
		const WOLFFuKhil6 = await WOLF.new(stringQurTD0E, stringwg8dSc7, uintcnuxm8, {from: "0x0000000000000000000000000000000000000001"});
		const uintCqzJThH = BigInt("66")
		const addressPEKEJIj = accounts[2]
		const uintgLEHItT = BigInt("450")
		const addressDCfIDZn = accounts[2]
		const uintytQRGUS = BigInt("1473")
		const addressDM5xuFK = accounts[1]
		const addressmZ3KPc2 = "0x0000000000000000000000000000000000000001"
		const uintIeZeCz2 = BigInt("396")
		const addressc43YAFI = accounts[2]
		const boolYiZgueD = await WOLFFuKhil6.approveAndCall.call(addressPEKEJIj, uintCqzJThH, {from: accounts[4]});
		const boollG05waC = await WOLFFuKhil6.approve.call(addressDCfIDZn, uintgLEHItT, {from: accounts[1]});
		const boolNfijopP = await WOLFFuKhil6.transferFrom.call(addressmZ3KPc2, addressDM5xuFK, uintytQRGUS, {from: accounts[3]});
		const boolS3PwYFC = await WOLFFuKhil6.approveAndCall.call(addressc43YAFI, uintIeZeCz2, {from: accounts[3]});
	});

	it('test for WOLF', async () => {
		const stringhmOSOSu = "PUqCK7hyiXC9rOgWRNqhUMxJ3MBxvy6cjI"
		const stringAZKvToB = "jQCto1nQzCw5dzw5LUbrZlNAyJCn4xSJDhVPNGxCx0O6oQgdhnErXnbHmL3z2poSxYonD5jL"
		const uintI8Re5Zb = BigInt("1555")
		const WOLFSWsXIH = await WOLF.new(stringhmOSOSu, stringAZKvToB, uintI8Re5Zb, {from: accounts[2]});
		const uintQLIBKJl = BigInt("0")
		const addressPcAhEUR = accounts[1]
		const addressY08s4NZ = "0x0000000000000000000000000000000000000001"
		const booltcZBeSA = await WOLFSWsXIH.transferFrom.call(addressY08s4NZ, addressPcAhEUR, uintQLIBKJl, {from: accounts[2]});

		assert.equal(booltcZBeSA, true)
	});

	it('test for WOLF', async () => {
		const stringhmOSOSu = "PUqCK7hyiXC9rOgWRNqhUMxJ3MBxvy6cjI"
		const stringAZKvToB = "jQCto1nQzCw5dzw5LUbrZlNAyJCn4xSJDhVPNGxCx0O6oQgdhnErXnbHmL3z2poSxYonD5jL"
		const uintds0eZKc = BigInt("1555")
		const WOLFSWsXIH = await WOLF.new(stringhmOSOSu, stringAZKvToB, uintds0eZKc, {from: accounts[2]});
		const uintc4PTdES = BigInt("0")
		const addressD7oMt9 = accounts[1]
		const uintx8wwiqB = BigInt("615")
		const addressPM2AbPk = accounts[3]
		const boole97HZCV = await WOLFSWsXIH.approveAndCall.call(addressD7oMt9, uintc4PTdES, {from: accounts[2]});
		const bool6nqzZu = await WOLFSWsXIH.approve.call(addressPM2AbPk, uintx8wwiqB, {from: accounts[4]});

		assert.equal(bool6nqzZu, true)
		assert.equal(boole97HZCV, true)
	});
})