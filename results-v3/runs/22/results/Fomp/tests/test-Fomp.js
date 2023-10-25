const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressqDzBoDM = accounts[4]
		const FompUu2Hzjm = await Fomp.new(addressqDzBoDM, {from: accounts[4]});
		const byteYsNaCj = "0x17071b1b1710010b1d1616061f1d1b051d1a070d020d13151b200914161e0f06"
		const byteqOff4QK = "0x1e0a10081d16181609010216090d10130401020f0e010c0c010a151c151d1c1d"
		const uintXK5Rr5C = BigInt("67")
		const uintFDfl8Ac = BigInt("1799")
		const uintFZAz2Ii = BigInt("1203")
		const addressFA597Qc = accounts[3]
		const byteTuOsnQr = "0x02041e12070c151d0107101712010f1f17090d151d05131b0c1116071a201e0a"
		const bytejKG4fCF = "0x081d0c0e072005161216191f151f021e030e1d03030a05011a0401050e0e1204"
		const uintw0Yx1i1 = BigInt("120")
		const uintGU0WKZv = BigInt("602")
		const uinta6bQRll = BigInt("1193")
		const addressimrH8Di = accounts[3]
		const uintSidMgm0 = BigInt("1630")
		const addressWjIZkhc = accounts[0]
		const addressL4xGOO9 = "0x0000000000000000000000000000000000000001"
		const addressbRKBopl = accounts[0]
		const addressMjoyZmc = await FompUu2Hzjm.delegateBySig.call(addressFA597Qc, uintFZAz2Ii, uintFDfl8Ac, uintXK5Rr5C, byteqOff4QK, byteYsNaCj, {from: accounts[4]});
		const addressyPK7v4t = await FompUu2Hzjm.delegateBySig.call(addressimrH8Di, uinta6bQRll, uintGU0WKZv, uintw0Yx1i1, bytejKG4fCF, byteTuOsnQr, {from: accounts[0]});
		const boolzDO4U0Z = await FompUu2Hzjm.transfer.call(addressWjIZkhc, uintSidMgm0, {from: accounts[0]});
		const uint96F6sLU4s = await FompUu2Hzjm.getCurrentVotes.call(addressL4xGOO9, {from: accounts[2]});
		const uint96IZLcf4 = await FompUu2Hzjm.getCurrentVotes.call(addressbRKBopl, {from: accounts[5]});

		await expect(FompUu2Hzjm.delegateBySig.call(addressFA597Qc, uintFZAz2Ii, uintFDfl8Ac, uintXK5Rr5C, byteqOff4QK, byteYsNaCj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressQTzLWx7 = accounts[1]
		const FompJFxSrz = await Fomp.new(addressQTzLWx7, {from: accounts[1]});
		const uintqRdNWsc = BigInt("1715")
		const addressqp1ffLf = accounts[2]
		const address74MY7u = accounts[2]
		const byteDABMOtB = "0x1915130b100715031c1f04141516030201160b10151d0016191a1b0612191619"
		const byteeMjarQT = "0x0d170205090c0e0c060a0a071c0b130b1a2013020e0715070107180a0e201216"
		const uintcdnEdtO = BigInt("223")
		const uinthOhrp2V = BigInt("515")
		const uintVQDVLsE = BigInt("283")
		const addressxaSbeUT = accounts[1]
		const boolrODvGOI = await FompJFxSrz.approve.call(addressqp1ffLf, uintqRdNWsc, {from: accounts[2]});
		const uintQJHslH = await FompJFxSrz.balanceOf.call(address74MY7u, {from: accounts[1]});
		const addressBvXtVSG = await FompJFxSrz.delegateBySig.call(addressxaSbeUT, uintVQDVLsE, uinthOhrp2V, uintcdnEdtO, byteeMjarQT, byteDABMOtB, {from: accounts[2]});

		assert.equal(boolrODvGOI, true)
		assert.equal(uintQJHslH, BigInt("0"))
		await expect(FompJFxSrz.delegateBySig.call(addressxaSbeUT, uintVQDVLsE, uinthOhrp2V, uintcdnEdtO, byteeMjarQT, byteDABMOtB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressuLZKN7A = "0x0000000000000000000000000000000000000001"
		const FompFKdkcPX = await Fomp.new(addressuLZKN7A, {from: accounts[2]});
		const addressMWKMqNw = "0x0000000000000000000000000000000000000001"
		const uintwUBn8uq = BigInt("107")
		const addressz705Iz = accounts[2]
		const addressmJHVxUm = "0x0000000000000000000000000000000000000001"
		const addressLgIGUa3 = accounts[1]
		const byteBys078Q = "0x150a160d0007021205111c1c0915160901161c1b0e1a07100c20071b1104030f"
		const bytequHjVsZ = "0x0f0f1c1604161d201218151d1d1406010e160f15090500131b151c0202050015"
		const uintriIujq = BigInt("139")
		const uintAZQ9CLw = BigInt("1282")
		const uintwMVole = BigInt("898")
		const addresslzYK7iT = accounts[1]
		const addresswdOHgi9 = await FompFKdkcPX.delegate.call(addressMWKMqNw, {from: accounts[0]});
		const boolafidiuO = await FompFKdkcPX.transfer.call(addressz705Iz, uintwUBn8uq, {from: accounts[5]});
		const uint96kS6FmQe = await FompFKdkcPX.getCurrentVotes.call(addressmJHVxUm, {from: accounts[1]});
		const uint96r3Us6GX = await FompFKdkcPX.getCurrentVotes.call(addressLgIGUa3, {from: accounts[4]});
		const addressoIXLo4o = await FompFKdkcPX.delegateBySig.call(addresslzYK7iT, uintwMVole, uintAZQ9CLw, uintriIujq, bytequHjVsZ, byteBys078Q, {from: accounts[4]});

		await expect(FompFKdkcPX.transfer.call(addressz705Iz, uintwUBn8uq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressBLKowJ = accounts[2]
		const Fompr54TKa6 = await Fomp.new(addressBLKowJ, {from: accounts[3]});
		const addressGnhIaRD = accounts[2]
		const addressgBRrsZw = accounts[3]
		const addressY4IvLB = accounts[3]
		const uintZ8Kk4l7 = BigInt("101")
		const addressjKoi25H = "0x0000000000000000000000000000000000000001"
		const uintFXlJTgI = BigInt("1126")
		const addresshfeWt5k = accounts[1]
		const uint96T8XwW2l = await Fompr54TKa6.getCurrentVotes.call(addressGnhIaRD, {from: accounts[0]});
		const uintQ1FQNNf = await Fompr54TKa6.balanceOf.call(addressgBRrsZw, {from: accounts[2]});
		const addressIRYjld = await Fompr54TKa6.delegate.call(addressY4IvLB, {from: accounts[4]});
		const boolZRJsjkd = await Fompr54TKa6.approve.call(addressjKoi25H, uintZ8Kk4l7, {from: accounts[4]});
		const boolcDcJz24 = await Fompr54TKa6.transfer.call(addresshfeWt5k, uintFXlJTgI, {from: accounts[2]});

		assert.equal(boolZRJsjkd, true)
		assert.equal(boolcDcJz24, true)
		assert.equal(uint96T8XwW2l, BigInt("0"))
		assert.equal(uintQ1FQNNf, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressAkZTQGb = accounts[1]
		const FompJFxSrz = await Fomp.new(addressAkZTQGb, {from: accounts[1]});
		const uintMelzlY3 = BigInt("1715")
		const addressODfy7AM = accounts[1]
		const addressuQuZGV5 = accounts[1]
		const addresscWYA7fD = accounts[1]
		const addresswGTtXG = accounts[3]
		const byteWOHPPZl = "0x1915130b100715031c1f04141516030201160b10151d0016191a1b0612191619"
		const byteNqvkA9T = "0x0d170205090c0e0c060a0a071c0b130b1a2013020e0715070107180a0e201216"
		const uintPFQeLJq = BigInt("223")
		const uintJOspYn9 = BigInt("515")
		const uintQbGdbOP = BigInt("283")
		const addressqWnBshD = accounts[1]
		const boolrODvGOI = await FompJFxSrz.approve.call(addressODfy7AM, uintMelzlY3, {from: accounts[2]});
		const uintt1IOBla = await FompJFxSrz.allowance.call(addresscWYA7fD, addressuQuZGV5, {from: accounts[4]});
		const uintQJHslH = await FompJFxSrz.balanceOf.call(addresswGTtXG, {from: accounts[1]});
		const addressBvXtVSG = await FompJFxSrz.delegateBySig.call(addressqWnBshD, uintQbGdbOP, uintJOspYn9, uintPFQeLJq, byteNqvkA9T, byteWOHPPZl, {from: accounts[2]});

		assert.equal(boolrODvGOI, true)
		assert.equal(uintQJHslH, BigInt("0"))
		assert.equal(uintt1IOBla, BigInt("0"))
		await expect(FompJFxSrz.delegateBySig.call(addressqWnBshD, uintQbGdbOP, uintJOspYn9, uintPFQeLJq, byteNqvkA9T, byteWOHPPZl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressiIkU7vP = accounts[1]
		const FompJFxSrz = await Fomp.new(addressiIkU7vP, {from: accounts[1]});
		const uintBRMiair = BigInt("1715")
		const addressDL6mHVx = accounts[2]
		const uintdYmHH9M = BigInt("939")
		const addressYsZgAa = accounts[2]
		const addressUk47yzY = accounts[3]
		const addresse4rPyH3 = accounts[2]
		const byteZNKYcZ = "0x1915130b100715031c1f04141516030201160b10151d0016191a1b0612191619"
		const bytenjpPsAa = "0x0d170205090c0e0c060a0a071c0b130b1a2013020e0715070107180a0e201216"
		const uintqwBrVDq = BigInt("223")
		const uinthd6q1A = BigInt("515")
		const uintwhQNql = BigInt("283")
		const addressOJpnU1 = accounts[1]
		const addressnnfd5E9 = "0x0000000000000000000000000000000000000001"
		const addressD166c3l = accounts[2]
		const boolrODvGOI = await FompJFxSrz.approve.call(addressDL6mHVx, uintBRMiair, {from: accounts[2]});
		const boolyVAJksL = await FompJFxSrz.transferFrom.call(addressUk47yzY, addressYsZgAa, uintdYmHH9M, {from: accounts[4]});
		const uintQJHslH = await FompJFxSrz.balanceOf.call(addresse4rPyH3, {from: accounts[1]});
		const addressBvXtVSG = await FompJFxSrz.delegateBySig.call(addressOJpnU1, uintwhQNql, uinthd6q1A, uintqwBrVDq, bytenjpPsAa, byteZNKYcZ, {from: accounts[2]});
		const uintH7BKpEa = await FompJFxSrz.allowance.call(addressD166c3l, addressnnfd5E9, {from: accounts[4]});

		assert.equal(boolrODvGOI, true)
		await expect(FompJFxSrz.transferFrom.call(addressUk47yzY, addressYsZgAa, uintdYmHH9M, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressZvJ7a03 = accounts[1]
		const Fompqi4F6kj = await Fomp.new(addressZvJ7a03, {from: accounts[4]});
		const uintdwbZIAj = BigInt("1997")
		const addresskb5yc0j = accounts[1]
		const uint96oekjeJb = await Fompqi4F6kj.getPriorVotes.call(addresskb5yc0j, uintdwbZIAj, {from: accounts[3]});

		await expect(Fompqi4F6kj.getPriorVotes.call(addresskb5yc0j, uintdwbZIAj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const address4cx27J = accounts[2]
		const Fompr54TKa6 = await Fomp.new(address4cx27J, {from: accounts[3]});
		const addressAwW2k2A = accounts[3]
		const addresszLAwpEN = accounts[4]
		const addressZqK340v = accounts[2]
		const uintC5J4BHF = BigInt("101")
		const addresspJwFQtj = accounts[2]
		const addressnTm7VYh = accounts[2]
		const uintiS990rk = BigInt("1126")
		const addressEwdVaxF = accounts[1]
		const uintQ1FQNNf = await Fompr54TKa6.balanceOf.call(addressAwW2k2A, {from: accounts[2]});
		const addressIRYjld = await Fompr54TKa6.delegate.call(addresszLAwpEN, {from: accounts[4]});
		const uintLQgWYj = await Fompr54TKa6.balanceOf.call(addressZqK340v, {from: "0x0000000000000000000000000000000000000001"});
		const boolZRJsjkd = await Fompr54TKa6.approve.call(addresspJwFQtj, uintC5J4BHF, {from: accounts[4]});
		const addressNNS15uI = await Fompr54TKa6.delegate.call(addressnTm7VYh, {from: accounts[2]});
		const boolcDcJz24 = await Fompr54TKa6.transfer.call(addressEwdVaxF, uintiS990rk, {from: accounts[2]});

		assert.equal(boolZRJsjkd, true)
		assert.equal(boolcDcJz24, true)
		assert.equal(uintLQgWYj, BigInt("1000000000000000000000000"))
		assert.equal(uintQ1FQNNf, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addresstDF31Z = accounts[5]
		const Fomp2reAU8 = await Fomp.new(addresstDF31Z, {from: "0x0000000000000000000000000000000000000001"});
		const addressIJoQX5X = accounts[4]
		const byteY7PutHA = "0x0d0810190f190c170912020a151b080f1f060b0d071d071b1a1d18041818040f"
		const byteaibd9vm = "0x1f1f11101019100e13070d1e1118151c0f030b0d1c100a1d0d0e0d0b0108131a"
		const uintK8mnjrJ = BigInt("5")
		const uintJmOrB2K = BigInt("448")
		const uintEVWw2ar = BigInt("613")
		const addressXXPTPBO = accounts[1]
		const addressBxFDygH = "0x0000000000000000000000000000000000000001"
		const uintWR3M7wR = await Fomp2reAU8.balanceOf.call(addressIJoQX5X, {from: accounts[4]});
		const addressbd9wq3o = await Fomp2reAU8.delegateBySig.call(addressXXPTPBO, uintEVWw2ar, uintJmOrB2K, uintK8mnjrJ, byteaibd9vm, byteY7PutHA, {from: accounts[0]});
		const addressIzddUyJ = await Fomp2reAU8.delegate.call(addressBxFDygH, {from: accounts[0]});
	});

	it('test for Fomp', async () => {
		const addressHyifFf = accounts[2]
		const Fompr54TKa6 = await Fomp.new(addressHyifFf, {from: accounts[3]});
		const uintYAZZCT = BigInt("611")
		const addressuh9P1AN = accounts[4]
		const uintu4lNVrA = BigInt("0")
		const addressNT75ZCG = accounts[2]
		const uintuMw7mFl = BigInt("255")
		const addressNCU5aL9 = "0x0000000000000000000000000000000000000001"
		const booleFORyeK = await Fompr54TKa6.approve.call(addressuh9P1AN, uintYAZZCT, {from: accounts[3]});
		const boolZRJsjkd = await Fompr54TKa6.approve.call(addressNT75ZCG, uintu4lNVrA, {from: accounts[4]});
		const uint96kJXmcMQ = await Fompr54TKa6.getPriorVotes.call(addressNCU5aL9, uintuMw7mFl, {from: accounts[1]});

		assert.equal(boolZRJsjkd, true)
		assert.equal(booleFORyeK, true)
		assert.equal(uint96kJXmcMQ, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressQNuoXPP = accounts[2]
		const Fompr54TKa6 = await Fomp.new(addressQNuoXPP, {from: accounts[3]});
		const uintFeK1MCT = BigInt("255")
		const address5cPVHz = accounts[3]
		const byteiAqFZ4Z = "0x0704150d1d1b1a1d060f121f1f1a040c1506170d0c0d0d171a08130a19111009"
		const byteSjWxDGf = "0x01051b041e0d180a1a190c1e0c07111f10131218181518001b18171603150210"
		const uintWlTupEq = BigInt("28")
		const uintUcvB3lX = BigInt("1820")
		const uintXRyi3S = BigInt("249")
		const addressITG6VtP = accounts[2]
		const uint96kJXmcMQ = await Fompr54TKa6.getPriorVotes.call(address5cPVHz, uintFeK1MCT, {from: accounts[1]});
		const addressk5zm8YC = await Fompr54TKa6.delegateBySig.call(addressITG6VtP, uintXRyi3S, uintUcvB3lX, uintWlTupEq, byteSjWxDGf, byteiAqFZ4Z, {from: accounts[2]});

		assert.equal(uint96kJXmcMQ, BigInt("0"))
		await expect(Fompr54TKa6.delegateBySig.call(addressITG6VtP, uintXRyi3S, uintUcvB3lX, uintWlTupEq, byteSjWxDGf, byteiAqFZ4Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})