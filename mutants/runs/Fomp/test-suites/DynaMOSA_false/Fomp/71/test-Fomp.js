const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressCFr6Owi = accounts[5]
		const FompXsRCt1y = await Fomp.new(addressCFr6Owi, {from: accounts[1]});
		const addresss5gm1HZ = "0x0000000000000000000000000000000000000001"
		const uintSyINkFc = BigInt("686")
		const addressJ581Jo = accounts[3]
		const addresssQDnbj = accounts[2]
		const addressYcYZfaN = accounts[4]
		const uint96sGfZPw = await FompXsRCt1y.getCurrentVotes.call(addresss5gm1HZ, {from: accounts[2]});
		const boolnJ7UDl = await FompXsRCt1y.transferFrom.call(addresssQDnbj, addressJ581Jo, uintSyINkFc, {from: accounts[3]});
		const uint96jFqoc56 = await FompXsRCt1y.getCurrentVotes.call(addressYcYZfaN, {from: accounts[5]});

		assert.equal(uint96sGfZPw, BigInt("0"))
		await expect(FompXsRCt1y.transferFrom.call(addresssQDnbj, addressJ581Jo, uintSyINkFc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressJnQquvM = accounts[4]
		const FompCkYzWp = await Fomp.new(addressJnQquvM, {from: accounts[4]});
		const byteyTRZwkr = "0x1e10010714031e171a050d111919092012060a14120e1e0001131a1c17041d1d"
		const bytec87d9k4 = "0x101e16190302010f141320131200200618161c171b1b0218140812010c181e0e"
		const uintwqaH1lf = BigInt("123")
		const uintbVAJEoh = BigInt("1603")
		const uintlS0T29k = BigInt("23")
		const addressRqySEF5 = accounts[1]
		const addressdqmKHZq = accounts[1]
		const uintCx12C0T = BigInt("426")
		const addressnl4tI8S = "0x0000000000000000000000000000000000000001"
		const addressMnXE0w = accounts[1]
		const uintSmmFO7K = BigInt("1781")
		const addresshIU3or = accounts[2]
		const addressCRb7Ww4 = accounts[1]
		const addressoXgxDiS = await FompCkYzWp.delegateBySig.call(addressRqySEF5, uintlS0T29k, uintbVAJEoh, uintwqaH1lf, bytec87d9k4, byteyTRZwkr, {from: accounts[2]});
		const uint96cXFDaeW = await FompCkYzWp.getCurrentVotes.call(addressdqmKHZq, {from: "0x0000000000000000000000000000000000000001"});
		const boolo0lZ6n6 = await FompCkYzWp.approve.call(addressnl4tI8S, uintCx12C0T, {from: accounts[3]});
		const addressGh3TgsD = await FompCkYzWp.delegate.call(addressMnXE0w, {from: accounts[5]});
		const boolqWjT3j = await FompCkYzWp.transfer.call(addresshIU3or, uintSmmFO7K, {from: accounts[4]});
		const uint96S3Q6UfG = await FompCkYzWp.getCurrentVotes.call(addressCRb7Ww4, {from: accounts[2]});

		await expect(FompCkYzWp.delegateBySig.call(addressRqySEF5, uintlS0T29k, uintbVAJEoh, uintwqaH1lf, bytec87d9k4, byteyTRZwkr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressWZRqmb = accounts[4]
		const FompLZb1Qgj = await Fomp.new(addressWZRqmb, {from: accounts[4]});
		const addressbTb4oRW = accounts[4]
		const addressnSDL1IF = accounts[1]
		const uintp3zYPAD = BigInt("2016")
		const addressAR7kgMM = accounts[1]
		const addressOULHLHv = accounts[1]
		const addresss8jtguW = accounts[3]
		const uintcgND7WI = BigInt("1446")
		const addressk8kmiub = accounts[2]
		const addressNalQkas = accounts[2]
		const addressh6LTu6a = await FompLZb1Qgj.delegate.call(addressbTb4oRW, {from: "0x0000000000000000000000000000000000000001"});
		const address1yYdws = await FompLZb1Qgj.delegate.call(addressnSDL1IF, {from: accounts[1]});
		const boolxVjfEvj = await FompLZb1Qgj.transferFrom.call(addressOULHLHv, addressAR7kgMM, uintp3zYPAD, {from: accounts[0]});
		const addressiMvl6VK = await FompLZb1Qgj.delegate.call(addresss8jtguW, {from: accounts[1]});
		const boolwIBI1w = await FompLZb1Qgj.approve.call(addressk8kmiub, uintcgND7WI, {from: accounts[0]});
		const addressuS9PyXp = await FompLZb1Qgj.delegate.call(addressNalQkas, {from: accounts[3]});

		await expect(FompLZb1Qgj.transferFrom.call(addressOULHLHv, addressAR7kgMM, uintp3zYPAD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressKgYW2Yv = accounts[0]
		const FompIhs8UF = await Fomp.new(addressKgYW2Yv, {from: accounts[2]});
		const addressOtqKf7H = accounts[0]
		const addressNnsidJE = accounts[4]
		const addressKrEUdqP = accounts[0]
		const uint96dBX4bo = await FompIhs8UF.getCurrentVotes.call(addressOtqKf7H, {from: accounts[2]});
		const uintrxGFY87 = await FompIhs8UF.balanceOf.call(addressNnsidJE, {from: accounts[0]});
		const uint2a6Ydk = await FompIhs8UF.balanceOf.call(addressKrEUdqP, {from: accounts[5]});

		assert.equal(uint2a6Ydk, BigInt("1000000000000000000000000"))
		assert.equal(uint96dBX4bo, BigInt("0"))
		assert.equal(uintrxGFY87, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressSpy8quZ = accounts[3]
		const FompdSzRDb = await Fomp.new(addressSpy8quZ, {from: accounts[2]});
		const addressc4kQJM0 = accounts[5]
		const addressGVgsNoH = accounts[2]
		const addressEPdE3ct = accounts[5]
		const uintxTXDncK = BigInt("198")
		const addresskDwaOZK = accounts[2]
		const addressjNP5I7z = accounts[0]
		const uintHvkDaBm = BigInt("268")
		const addressy5r2qd4 = accounts[3]
		const addressgTVvDdc = accounts[4]
		const uintffetfbO = await FompdSzRDb.balanceOf.call(addressc4kQJM0, {from: accounts[4]});
		const uintA5AqFgo = await FompdSzRDb.allowance.call(addressEPdE3ct, addressGVgsNoH, {from: accounts[5]});
		const boolHYhVqDT = await FompdSzRDb.transferFrom.call(addressjNP5I7z, addresskDwaOZK, uintxTXDncK, {from: accounts[2]});
		const boolf3Cc2Nx = await FompdSzRDb.transferFrom.call(addressgTVvDdc, addressy5r2qd4, uintHvkDaBm, {from: accounts[0]});

		assert.equal(uintA5AqFgo, BigInt("0"))
		assert.equal(uintffetfbO, BigInt("0"))
		await expect(FompdSzRDb.transferFrom.call(addressjNP5I7z, addresskDwaOZK, uintxTXDncK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressz2O2njw = accounts[1]
		const FompdGKMMTW = await Fomp.new(addressz2O2njw, {from: accounts[1]});
		const uintNiQwbuV = BigInt("1191")
		const addressHgYceGp = "0x0000000000000000000000000000000000000001"
		const addressqh8Wn94 = accounts[2]
		const uintwLvTK6V = BigInt("1618")
		const addressgVdpaSQ = accounts[2]
		const uintNT0atXD = BigInt("1423")
		const addressnbNyYhQ = accounts[0]
		const booll9w5DkD = await FompdGKMMTW.transfer.call(addressHgYceGp, uintNiQwbuV, {from: "0x0000000000000000000000000000000000000001"});
		const addressuTeSMQ = await FompdGKMMTW.delegate.call(addressqh8Wn94, {from: accounts[0]});
		const uint96cLaZaCM = await FompdGKMMTW.getPriorVotes.call(addressgVdpaSQ, uintwLvTK6V, {from: accounts[0]});
		const boolnl9b16O = await FompdGKMMTW.approve.call(addressnbNyYhQ, uintNT0atXD, {from: accounts[0]});

		await expect(FompdGKMMTW.transfer.call(addressHgYceGp, uintNiQwbuV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressre28HrM = accounts[2]
		const FompVpcZTVP = await Fomp.new(addressre28HrM, {from: accounts[2]});
		const addressQWLFdaO = accounts[1]
		const uinthITlw8 = BigInt("1261")
		const addressZSLCUe4 = accounts[5]
		const uintGuuZbam = BigInt("1782")
		const addressMq4CUw4 = "0x0000000000000000000000000000000000000001"
		const uint96xEcgyr5 = await FompVpcZTVP.getCurrentVotes.call(addressQWLFdaO, {from: accounts[5]});
		const boolnPlm7v = await FompVpcZTVP.approve.call(addressZSLCUe4, uinthITlw8, {from: "0x0000000000000000000000000000000000000001"});
		const boolbq2Yagx = await FompVpcZTVP.approve.call(addressMq4CUw4, uintGuuZbam, {from: accounts[0]});

		assert.equal(boolbq2Yagx, true)
		assert.equal(boolnPlm7v, true)
		assert.equal(uint96xEcgyr5, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressvKfRFya = accounts[0]
		const FompkOREx4R = await Fomp.new(addressvKfRFya, {from: accounts[1]});
		const uintdcDPQV3 = BigInt("2035")
		const addressuCrVC0 = accounts[4]
		const addressgr0Lsau = accounts[2]
		const address6pB61V = "0x0000000000000000000000000000000000000001"
		const byteqOau99r = "0x1e161617101102171e11200f0f010a151816161b1d1e091e1f1d1e0c0403140a"
		const byteIxFjlcQ = "0x0719001e16051a0b00090c1f0514201e1a01140c061a121c1d121518171b1515"
		const uintUDop5LO = BigInt("152")
		const uintcjj0Ej4 = BigInt("8")
		const uintKCz6I01 = BigInt("1150")
		const addressIcFB0y9 = accounts[4]
		const uint96otXBsvw = await FompkOREx4R.getPriorVotes.call(addressuCrVC0, uintdcDPQV3, {from: accounts[4]});
		const uintB3c7FBx = await FompkOREx4R.balanceOf.call(addressgr0Lsau, {from: accounts[0]});
		const uintKSfJYCQ = await FompkOREx4R.balanceOf.call(address6pB61V, {from: accounts[1]});
		const addressqP4uGVn = await FompkOREx4R.delegateBySig.call(addressIcFB0y9, uintKCz6I01, uintcjj0Ej4, uintUDop5LO, byteIxFjlcQ, byteqOau99r, {from: accounts[1]});

		await expect(FompkOREx4R.getPriorVotes.call(addressuCrVC0, uintdcDPQV3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressCjGcU48 = accounts[1]
		const FompCHKcC3b = await Fomp.new(addressCjGcU48, {from: accounts[0]});
		const addresslhPFByh = accounts[4]
		const uintDTswISs = BigInt("1892")
		const addressMNwhCze = accounts[0]
		const uintznR9EOJ = BigInt("535")
		const addressRgJgJk6 = accounts[2]
		const uint96C3lPOL3 = await FompCHKcC3b.getCurrentVotes.call(addresslhPFByh, {from: accounts[4]});
		const boolSjT8qkh = await FompCHKcC3b.transfer.call(addressMNwhCze, uintDTswISs, {from: accounts[1]});
		const boolO4SAzdd = await FompCHKcC3b.approve.call(addressRgJgJk6, uintznR9EOJ, {from: accounts[2]});

		assert.equal(boolO4SAzdd, true)
		assert.equal(boolSjT8qkh, true)
		assert.equal(uint96C3lPOL3, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addresswa9mck9 = accounts[0]
		const FompAB6Enkp = await Fomp.new(addresswa9mck9, {from: "0x0000000000000000000000000000000000000001"});
		const byteY5GuMi5 = "0x17070e05141310160512200a1216190d0c140f051217190f1503201b00122005"
		const bytew0YDWOK = "0x100a1a17181e071b1f021b1317110307160d010d121d08100f120d17150b0907"
		const uintbQTneWD = BigInt("38")
		const uintjrL0ZtJ = BigInt("939")
		const uint0LkE5p = BigInt("1290")
		const addressbkLri4 = accounts[2]
		const addressEv7UYI = accounts[4]
		const addressFSxbQLe = accounts[0]
		const uintDraoAm0 = BigInt("313")
		const addressnNJ9fTO = accounts[4]
		const addressxnxJiJ = accounts[3]
		const bytehFLcOx = "0x0a100512180e1903100c1809060c0b1c090808171e1d13051310040f1319181f"
		const byteFRe6azK = "0x0a1a1b1b111810140d1603130d140f0601171303080604051f05100a030f0707"
		const uintSSfRfOH = BigInt("74")
		const uintYRRgB5U = BigInt("297")
		const uint5CH2oN = BigInt("1057")
		const addressaFsnbb = accounts[2]
		const addressSYlp6ac = await FompAB6Enkp.delegateBySig.call(addressbkLri4, uint0LkE5p, uintjrL0ZtJ, uintbQTneWD, bytew0YDWOK, byteY5GuMi5, {from: accounts[5]});
		const uint96FxUN7Ci = await FompAB6Enkp.getCurrentVotes.call(addressEv7UYI, {from: accounts[4]});
		const uint96Ka0KT4 = await FompAB6Enkp.getCurrentVotes.call(addressFSxbQLe, {from: accounts[3]});
		const boolK8uW7EI = await FompAB6Enkp.transfer.call(addressnNJ9fTO, uintDraoAm0, {from: accounts[5]});
		const uint96XQbQoaf = await FompAB6Enkp.getCurrentVotes.call(addressxnxJiJ, {from: accounts[0]});
		const addressyy3UeeW = await FompAB6Enkp.delegateBySig.call(addressaFsnbb, uint5CH2oN, uintYRRgB5U, uintSSfRfOH, byteFRe6azK, bytehFLcOx, {from: accounts[2]});
	});

	it('test for Fomp', async () => {
		const addressZTyep9m = accounts[0]
		const Fompo9Ymmky = await Fomp.new(addressZTyep9m, {from: accounts[0]});
		const uintkoGj6KU = BigInt("34")
		const addressd16SDqr = accounts[4]
		const addressUZVQ9B5 = accounts[1]
		const uintOfn6IaX = BigInt("1618")
		const addressxc2dTlL = "0x0000000000000000000000000000000000000001"
		const addressjNLnc9o = accounts[2]
		const uint96AAULJM2 = await Fompo9Ymmky.getPriorVotes.call(addressd16SDqr, uintkoGj6KU, {from: accounts[3]});
		const addressOgZJ007 = await Fompo9Ymmky.delegate.call(addressUZVQ9B5, {from: accounts[2]});
		const boolEWxtDOg = await Fompo9Ymmky.approve.call(addressxc2dTlL, uintOfn6IaX, {from: accounts[3]});
		const uint96HZmSNDP = await Fompo9Ymmky.getCurrentVotes.call(addressjNLnc9o, {from: accounts[5]});

		assert.equal(boolEWxtDOg, true)
		assert.equal(uint96AAULJM2, BigInt("0"))
		assert.equal(uint96HZmSNDP, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressaiQPOQR = accounts[3]
		const FompD6f1XRS = await Fomp.new(addressaiQPOQR, {from: accounts[3]});
		const uintgRjXGmL = BigInt("118")
		const addressKXkOXDr = accounts[3]
		const addressmNJYCEE = "0x0000000000000000000000000000000000000001"
		const uintSZY5nXt = BigInt("1777")
		const addressb9OljU = accounts[3]
		const addressGbLii7h = accounts[2]
		const addresshw5F2S0 = accounts[1]
		const addressC4mQQOp = "0x0000000000000000000000000000000000000001"
		const boolVDPilB9 = await FompD6f1XRS.approve.call(addressKXkOXDr, uintgRjXGmL, {from: accounts[1]});
		const addresswpBNUC = await FompD6f1XRS.delegate.call(addressmNJYCEE, {from: accounts[3]});
		const boolUO6cQfp = await FompD6f1XRS.transfer.call(addressb9OljU, uintSZY5nXt, {from: accounts[0]});
		const uint96RkBsz0o = await FompD6f1XRS.getCurrentVotes.call(addressGbLii7h, {from: accounts[1]});
		const uintKQ0aqAW = await FompD6f1XRS.allowance.call(addressC4mQQOp, addresshw5F2S0, {from: accounts[3]});

		assert.equal(boolVDPilB9, true)
		await expect(FompD6f1XRS.transfer.call(addressb9OljU, uintSZY5nXt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressMxTuBd8 = accounts[0]
		const Fompo9Ymmky = await Fomp.new(addressMxTuBd8, {from: accounts[0]});
		const addressXDPaU9 = accounts[3]
		const bytelXqDRtu = "0x07050e041709150603101d16041f1617061f010a020e060e06101712110c0111"
		const bytex1admNP = "0x041815121b0f0d0e0403130b02071708110a0118030506111d11031a110c0e07"
		const uintuH4p3At = BigInt("28")
		const uintm75TJR = BigInt("27")
		const uinttPLswvg = BigInt("662")
		const addressLLnfPOL = accounts[5]
		const uintXwAMits = BigInt("15")
		const addressOtYB2T7 = accounts[0]
		const uinti8KGDi9 = BigInt("1787")
		const addresszw5i4T = accounts[0]
		const uintXQHpIUg = BigInt("440")
		const addressqm4ItJr = accounts[0]
		const byteHs1OPXT = "0x0f091907101e020e1b070d08111b1a19121a1c06000b041b0b10021303011c0c"
		const byteo9u5fjB = "0x1c11050c170b1f1002051512110b051203131820141a19181a041f110c19080d"
		const uintJ77c2ef = BigInt("127")
		const uintXYqys4 = BigInt("70")
		const uintHgoDYEE = BigInt("884")
		const addressphLB0tG = accounts[1]
		const addressMm7KXYi = await Fompo9Ymmky.delegate.call(addressXDPaU9, {from: accounts[0]});
		const addressbmyWAWC = await Fompo9Ymmky.delegateBySig.call(addressLLnfPOL, uinttPLswvg, uintm75TJR, uintuH4p3At, bytex1admNP, bytelXqDRtu, {from: accounts[1]});
		const boole25wed = await Fompo9Ymmky.approve.call(addressOtYB2T7, uintXwAMits, {from: accounts[3]});
		const booleIh4WPP = await Fompo9Ymmky.transfer.call(addresszw5i4T, uinti8KGDi9, {from: accounts[3]});
		const uint96kW49a0E = await Fompo9Ymmky.getPriorVotes.call(addressqm4ItJr, uintXQHpIUg, {from: accounts[3]});
		const addressJzg8eZu = await Fompo9Ymmky.delegateBySig.call(addressphLB0tG, uintHgoDYEE, uintXYqys4, uintJ77c2ef, byteo9u5fjB, byteHs1OPXT, {from: accounts[3]});

		await expect(Fompo9Ymmky.delegateBySig.call(addressLLnfPOL, uinttPLswvg, uintm75TJR, uintuH4p3At, bytex1admNP, bytelXqDRtu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})