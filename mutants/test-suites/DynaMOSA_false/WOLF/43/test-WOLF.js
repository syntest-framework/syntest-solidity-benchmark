const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringTsLB7Hl = "S8cKg2ssjTPCPHMv"
		const stringzc6M0ui = "agjIvpw7oLbG"
		const uintG253Ee = BigInt("964")
		const WOLFYObpe6k = await WOLF.new(stringTsLB7Hl, stringzc6M0ui, uintG253Ee, {from: accounts[0]});
		const uintlv0OoJG = BigInt("211")
		const addressE3gVe2O = accounts[4]
		const uintmdDnqHm = BigInt("1313")
		const addressBqrYeTH = accounts[3]
		const uintE21HiQ9 = BigInt("671")
		const addressh6H4Fpn = accounts[1]
//		const boolkh3AoCG = await WOLFYObpe6k.approveAndCall.call(addressE3gVe2O, uintlv0OoJG, {from: accounts[2]});
//		const boolgskucx = await WOLFYObpe6k.approve.call(addressBqrYeTH, uintmdDnqHm, {from: accounts[1]});
//		const boolZDZmhNN = await WOLFYObpe6k.approveAndCall.call(addressh6H4Fpn, uintE21HiQ9, {from: accounts[0]});

		await expect(WOLFYObpe6k.approveAndCall.call(addressE3gVe2O, uintlv0OoJG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringog4Iiue = "NmFtt7xvrcBLlxXdtq4Wm8K"
		const stringtCJSlzp = "IACmFmYy4VdmRRvuPGQj6LPVpfQJaygiVqdB18QiG8QDoSJ6dRl1vF0N1k7EB01Gr9zVtFmCjkczK1sBdJSDS3tgcSkU"
		const uintZtGA30u = BigInt("1447")
		const WOLFeQ6C10b = await WOLF.new(stringog4Iiue, stringtCJSlzp, uintZtGA30u, {from: accounts[3]});
		const addressXpo638n = accounts[1]
		const uintMKdQT15 = BigInt("1971")
		const addressW286HgX = accounts[0]
		const addresscIVrhMJ = accounts[3]
		const boolFHgOaOQ = await WOLFeQ6C10b.transferownership.call(addressXpo638n, {from: accounts[3]});
//		const boolvUGuOL5 = await WOLFeQ6C10b.approveAndCall.call(addressW286HgX, uintMKdQT15, {from: accounts[4]});
//		const boolirufuN2 = await WOLFeQ6C10b.transferownership.call(addresscIVrhMJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFHgOaOQ, true)
		await expect(WOLFeQ6C10b.approveAndCall.call(addressW286HgX, uintMKdQT15, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringP8zFpCP = ""
		const stringW3l89Gl = "8gQKaVjqYbNetadkH74On6bxPwvrdnQDc0YpSV0H2JbquD5APyzSdexotOGip9lj96VxiNzd"
		const uintlMIWyrL = BigInt("1059")
		const WOLFU5MkWEU = await WOLF.new(stringP8zFpCP, stringW3l89Gl, uintlMIWyrL, {from: accounts[1]});
		const uintMuVTUUO = BigInt("701")
		const addressIcnGKtQ = accounts[4]
		const addressKJEz1U1 = accounts[4]
		const uintpc8IXJ0 = BigInt("1127")
		const addressvJBNVT4 = accounts[4]
		const addressQnUVZZ = accounts[0]
		const uintC31p0wl = BigInt("18")
		const addressSsGfJPd = accounts[2]
		const uintH8YUgoM = BigInt("790")
		const addressTOlIvPk = accounts[2]
		const addressivy6COn = "0x0000000000000000000000000000000000000001"
		const address5kcP0y = accounts[2]
//		const boolqL4A73 = await WOLFU5MkWEU.transferFrom.call(addressKJEz1U1, addressIcnGKtQ, uintMuVTUUO, {from: "0x0000000000000000000000000000000000000001"});
//		const booljBCP9zL = await WOLFU5MkWEU.transferFrom.call(addressQnUVZZ, addressvJBNVT4, uintpc8IXJ0, {from: accounts[1]});
//		const boolHJ4ZFNf = await WOLFU5MkWEU.approve.call(addressSsGfJPd, uintC31p0wl, {from: accounts[1]});
//		const boolmI6tpz1 = await WOLFU5MkWEU.transferFrom.call(addressivy6COn, addressTOlIvPk, uintH8YUgoM, {from: accounts[2]});
//		const boolUrmrDUp = await WOLFU5MkWEU.transferownership.call(address5kcP0y, {from: accounts[0]});

		await expect(WOLFU5MkWEU.transferFrom.call(addressKJEz1U1, addressIcnGKtQ, uintMuVTUUO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringmsXNP71 = "JN5YpzYCWr3LV5"
		const stringSClekrE = "jZRabq7pVH9hchBS3JSTox9hDuD8wlgHbXjAIUjUjF9xNLTibPquGQOWsm4i9FIe8"
		const uintsXffijw = BigInt("1856")
		const WOLFJWZv3Q2 = await WOLF.new(stringmsXNP71, stringSClekrE, uintsXffijw, {from: accounts[5]});
		const uintE2DkP22 = BigInt("1834")
		const addressOjtKhw8 = accounts[2]
		const addressR6ctlxp = accounts[2]
		const uintiW3BAU8 = BigInt("1394")
		const addressoTkEUUf = accounts[4]
		const uintwvicWpO = BigInt("1259")
		const addresscVOq4xx = accounts[5]
		const uintdMuS2i = BigInt("925")
		const addressqVtEdm2 = accounts[4]
		const addressiK22XJ8 = accounts[5]
//		const boolUr3vLHe = await WOLFJWZv3Q2.transferFrom.call(addressR6ctlxp, addressOjtKhw8, uintE2DkP22, {from: accounts[2]});
//		const boolbnWVPhb = await WOLFJWZv3Q2.approveAndCall.call(addressoTkEUUf, uintiW3BAU8, {from: accounts[4]});
//		const booloCiG33K = await WOLFJWZv3Q2.approveAndCall.call(addresscVOq4xx, uintwvicWpO, {from: accounts[4]});
//		const boolohgGUtI = await WOLFJWZv3Q2.transferFrom.call(addressiK22XJ8, addressqVtEdm2, uintdMuS2i, {from: accounts[1]});

		await expect(WOLFJWZv3Q2.transferFrom.call(addressR6ctlxp, addressOjtKhw8, uintE2DkP22, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringKaywZh = "hKFtb"
		const stringsppGGeh = "pn4RdB6QJUKkLKy8P1yCqntqJRlq4N8myuNi9T7sLHsdubLEybi7H2ykYv7bwJaFKD20tPzVhv1dXx0Yda4TvJeB3h4cZ"
		const uintdHMqgvp = BigInt("1785")
		const WOLFoCK08HB = await WOLF.new(stringKaywZh, stringsppGGeh, uintdHMqgvp, {from: "0x0000000000000000000000000000000000000001"});
		const uintfHmzy2N = BigInt("772")
		const addressdNxuTOP = accounts[4]
		const addressXUpGRck = accounts[2]
		const uintfEWJU2B = BigInt("992")
		const addresszpVmpwT = accounts[4]
		const uintsF6uzM7 = BigInt("1149")
		const addressThM5iEW = accounts[2]
		const boolUeNhkX = await WOLFoCK08HB.transfer.call(addressdNxuTOP, uintfHmzy2N, {from: accounts[2]});
		const boolHR2lNJt = await WOLFoCK08HB.transferownership.call(addressXUpGRck, {from: accounts[4]});
		const boolUaUP9Xe = await WOLFoCK08HB.approve.call(addresszpVmpwT, uintfEWJU2B, {from: accounts[0]});
		const booleP5Syxv = await WOLFoCK08HB.approve.call(addressThM5iEW, uintsF6uzM7, {from: accounts[1]});
	});

	it('test for WOLF', async () => {
		const stringhVNRNKd = "JP1y1A7CTHw3PFieIUclAbAqsckNbUcFe9NwL9MtBPNnFX0SUL8DwWgwPwjsDc6RDRpuSdpEUTbzQfgy1FNFyEAGKl7h"
		const stringBvKaG6H = "hAbJEfWUN02rdGIros2XuS18QaP134IqMKSRQ2SSmpmHtVO"
		const uintB4CWhL = BigInt("1947")
		const WOLFcXdaMEf = await WOLF.new(stringhVNRNKd, stringBvKaG6H, uintB4CWhL, {from: accounts[4]});
		const uintMm9Pcm5 = BigInt("1231")
		const addressnbbxNVD = "0x0000000000000000000000000000000000000001"
		const uintBDYwz01 = BigInt("2033")
		const addressqLWqwHM = accounts[0]
		const addresspK8eo30 = accounts[2]
		const uintYPXL7u = BigInt("363")
		const addressyapca60 = accounts[4]
		const uint5AFtve = BigInt("1330")
		const addressnUmB8rT = accounts[2]
		const addressG91OZaO = "0x0000000000000000000000000000000000000001"
		const boolkEPigY5 = await WOLFcXdaMEf.transfer.call(addressnbbxNVD, uintMm9Pcm5, {from: accounts[4]});
//		const boolfJ5oY8M = await WOLFcXdaMEf.transferFrom.call(addresspK8eo30, addressqLWqwHM, uintBDYwz01, {from: accounts[4]});
//		const boolz9ciuov = await WOLFcXdaMEf.approve.call(addressyapca60, uintYPXL7u, {from: "0x0000000000000000000000000000000000000001"});
//		const boolPsBUmZr = await WOLFcXdaMEf.transferFrom.call(addressG91OZaO, addressnUmB8rT, uint5AFtve, {from: accounts[0]});

		assert.equal(boolkEPigY5, true)
		await expect(WOLFcXdaMEf.transferFrom.call(addresspK8eo30, addressqLWqwHM, uintBDYwz01, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringIJtGLNF = "z9dUvPBpcYyL3yWsC2UoUmhkMj3pkNzK0M12hmuAYDAJg7rNqR8ayjhc0Qx"
		const string72JSsN = "YsINToDmNbqPSqa9RQjnIFtg7B"
		const uintLhpP6f9 = BigInt("1300")
		const WOLFgaqcsTh = await WOLF.new(stringIJtGLNF, string72JSsN, uintLhpP6f9, {from: accounts[3]});
		const uintJ9J5lwy = BigInt("1801")
		const addressFyVVUJP = accounts[0]
		const uintUDlFmkK = BigInt("1815")
		const addressbWWtAlR = accounts[2]
		const uintEuz0LBd = BigInt("2015")
		const addressa67UZNL = accounts[0]
		const uintk85KQLD = BigInt("1562")
		const addresso3HFfWs = accounts[4]
		const uintbuSL2mJ = BigInt("1974")
		const addressJvhLRjp = accounts[3]
		const addressNMi0jId = accounts[3]
		const boolCHqfD7J = await WOLFgaqcsTh.approve.call(addressFyVVUJP, uintJ9J5lwy, {from: accounts[4]});
		const boolRGEhiFL = await WOLFgaqcsTh.approve.call(addressbWWtAlR, uintUDlFmkK, {from: accounts[4]});
//		const boolr9qrsH = await WOLFgaqcsTh.approveAndCall.call(addressa67UZNL, uintEuz0LBd, {from: "0x0000000000000000000000000000000000000001"});
//		const boolEaNeNDk = await WOLFgaqcsTh.approve.call(addresso3HFfWs, uintk85KQLD, {from: accounts[1]});
//		const boolzOfmpfU = await WOLFgaqcsTh.transferFrom.call(addressNMi0jId, addressJvhLRjp, uintbuSL2mJ, {from: accounts[0]});

		assert.equal(boolCHqfD7J, true)
		assert.equal(boolRGEhiFL, true)
		await expect(WOLFgaqcsTh.approveAndCall.call(addressa67UZNL, uintEuz0LBd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringva94oMc = "6VpCnjILP9CVB1c8rad8Ste1rtubQbKavqpRhkT41yuaQira01NfhfvTTB6FbAcKHvVQ6UTt8iJhstDe"
		const stringIOu0o4Y = "b1SLDsksVG6nCnI"
		const uintJuC6cKa = BigInt("2041")
		const WOLFf2Gt8v = await WOLF.new(stringva94oMc, stringIOu0o4Y, uintJuC6cKa, {from: accounts[1]});
		const uintINbo4WU = BigInt("1398")
		const addressbNZQTe = accounts[3]
		const uintZWQR4EQ = BigInt("44")
		const addressokFqqR = "0x0000000000000000000000000000000000000001"
		const uintBphjHVd = BigInt("549")
		const addressKwongJ = accounts[1]
		const uintWUA5rz = BigInt("830")
		const addressLfsSHe = accounts[0]
		const boolF6PSl0H = await WOLFf2Gt8v.approve.call(addressbNZQTe, uintINbo4WU, {from: accounts[3]});
		const boolhHhY7GA = await WOLFf2Gt8v.approve.call(addressokFqqR, uintZWQR4EQ, {from: accounts[4]});
		const boolXtWsmyr = await WOLFf2Gt8v.approveAndCall.call(addressKwongJ, uintBphjHVd, {from: accounts[1]});
		const boolxVf77p5 = await WOLFf2Gt8v.approve.call(addressLfsSHe, uintWUA5rz, {from: accounts[3]});

		assert.equal(boolF6PSl0H, true)
		assert.equal(boolXtWsmyr, true)
		assert.equal(boolhHhY7GA, true)
		assert.equal(boolxVf77p5, true)
	});

	it('test for WOLF', async () => {
		const stringpptmIK8 = "LhsJQx4esPQogf3IlIyHf76mOLKCN6s3YeGkpgS8syZKhBTzucEShuCHrb1VqIViaAVft60SWjB56SrhpRD0OOjVPlNi"
		const stringtX9unhL = "7Y1D2CGdHtAa6mbWyJoqoIuHhVy2deePlpr6g2SsXjAtnffzXw74i0qnpGgvzOKwKI5XdA9Dg3"
		const uintIV4IFHS = BigInt("1886")
		const WOLFPPzAVyw = await WOLF.new(stringpptmIK8, stringtX9unhL, uintIV4IFHS, {from: accounts[4]});
		const uintGCVumm8 = BigInt("0")
		const address3m0lPZ = accounts[4]
		const addresss0MgHr6 = accounts[2]
		const uintiRn2OPg = BigInt("1024")
		const addressGIDN8Te = accounts[1]
		const addressIYjTllu = "0x0000000000000000000000000000000000000001"
		const uintDoLSgrH = BigInt("104")
		const addressGOeNrhQ = accounts[2]
		const uintkL9XLP8 = BigInt("1233")
		const addressMJBc9HL = accounts[2]
		const uintUZzkpFc = BigInt("683")
		const addressfErvzfO = accounts[0]
		const uintNKHirB8 = BigInt("1814")
		const addressUhVyefD = accounts[0]
		const addressiu8xFYg = accounts[1]
		const boolr7Agzt = await WOLFPPzAVyw.transferFrom.call(addresss0MgHr6, address3m0lPZ, uintGCVumm8, {from: accounts[1]});
//		const boolqaMWt7B = await WOLFPPzAVyw.transferFrom.call(addressIYjTllu, addressGIDN8Te, uintiRn2OPg, {from: accounts[1]});
//		const boolKFIbnmA = await WOLFPPzAVyw.approveAndCall.call(addressGOeNrhQ, uintDoLSgrH, {from: accounts[0]});
//		const boolBS4R4KR = await WOLFPPzAVyw.transfer.call(addressMJBc9HL, uintkL9XLP8, {from: accounts[4]});
//		const boolLOkm23l = await WOLFPPzAVyw.approveAndCall.call(addressfErvzfO, uintUZzkpFc, {from: accounts[2]});
//		const boolNmpHUbn = await WOLFPPzAVyw.transferFrom.call(addressiu8xFYg, addressUhVyefD, uintNKHirB8, {from: accounts[2]});

		assert.equal(boolr7Agzt, true)
		await expect(WOLFPPzAVyw.transferFrom.call(addressIYjTllu, addressGIDN8Te, uintiRn2OPg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringva94oMc = "6VpCnjILP9CVB1c8rad8Ste1rtubQbKavqpRhkT41yuaQira01NfhfvTTB6FbAcKHvVQ6UTt8iJhstDe"
		const stringIOu0o4Y = "b1SLDsksVG6nCnI"
		const uintvmlF40S = BigInt("2041")
		const WOLFf2Gt8v = await WOLF.new(stringva94oMc, stringIOu0o4Y, uintvmlF40S, {from: accounts[1]});
		const uintGcxDp54 = BigInt("1884")
		const addressK7B95N = accounts[4]
		const uintNIaWM67 = BigInt("0")
		const addressI5dkoWo = "0x0000000000000000000000000000000000000001"
		const uintKY7ZYx = BigInt("1493")
		const addressEfSkyzk = accounts[6]
		const uintUpAF5Kx = BigInt("264")
		const addressyLjCf6C = accounts[0]
		const uintVvWYdjI = BigInt("2028")
		const addressnhzjlbr = accounts[2]
		const uinth2HtMtT = BigInt("2037")
		const addressXiYLq7 = accounts[1]
		const uintke7ztih = BigInt("1257")
		const addressy7B14Vv = accounts[5]
		const uintpRJRTZ7 = BigInt("368")
		const addressGhJ3eLb = accounts[1]
		const addressW7xeizl = accounts[1]
		const uintxc0oro4 = BigInt("1603")
		const addressJbzPVy3 = accounts[3]
		const addressBQFr3wo = accounts[0]
		const uintxfqvnSh = BigInt("1967")
		const addressh2PouJo = accounts[4]
		const uintuk3Yzpd = BigInt("808")
		const addressvzIo3tp = accounts[3]
		const uintixgiEmn = BigInt("1551")
		const addressL2zgzDG = accounts[4]
		const uintwv8TcCY = BigInt("1338")
		const addressSe4MIib = accounts[0]
		const uinthKd1Mkj = BigInt("928")
		const addressPJMLkUL = accounts[3]
		const uintP76KN1w = BigInt("515")
		const addressO5h9dU3 = accounts[0]
		const addresstnb5TV9 = accounts[0]
		const uintcgjJsGh = BigInt("1499")
		const addressvIzY71w = "0x0000000000000000000000000000000000000001"
		const uintfhu9OTe = BigInt("1913")
		const addressbfkJRp = accounts[5]
		const uintq9sumsV = BigInt("1602")
		const addressm1NTbOA = accounts[1]
		const boolBIJhVNm = await WOLFf2Gt8v.approve.call(addressK7B95N, uintGcxDp54, {from: accounts[0]});
		const boolaZhAYjC = await WOLFf2Gt8v.approveAndCall.call(addressI5dkoWo, uintNIaWM67, {from: accounts[1]});
//		const boolktQfiWb = await WOLFf2Gt8v.transfer.call(addressEfSkyzk, uintKY7ZYx, {from: accounts[0]});
//		const booliH3R0qn = await WOLFf2Gt8v.approveAndCall.call(addressyLjCf6C, uintUpAF5Kx, {from: accounts[5]});
//		const boolyfHw32S = await WOLFf2Gt8v.approveAndCall.call(addressnhzjlbr, uintVvWYdjI, {from: accounts[2]});
//		const boolfu7oBVn = await WOLFf2Gt8v.approve.call(addressXiYLq7, uinth2HtMtT, {from: accounts[1]});
//		const boolBf3vVh3 = await WOLFf2Gt8v.approveAndCall.call(addressy7B14Vv, uintke7ztih, {from: accounts[1]});
//		const boolfyIePtJ = await WOLFf2Gt8v.approveAndCall.call(addressGhJ3eLb, uintpRJRTZ7, {from: accounts[0]});
//		const boolFepaXGY = await WOLFf2Gt8v.transferownership.call(addressW7xeizl, {from: accounts[5]});
//		const boolqVRNlaU = await WOLFf2Gt8v.approveAndCall.call(addressJbzPVy3, uintxc0oro4, {from: accounts[3]});
//		const boolxQT30Nt = await WOLFf2Gt8v.transferownership.call(addressBQFr3wo, {from: accounts[1]});
//		const boolVJ83cDw = await WOLFf2Gt8v.approveAndCall.call(addressh2PouJo, uintxfqvnSh, {from: accounts[4]});
//		const boolxRRUp3I = await WOLFf2Gt8v.transfer.call(addressvzIo3tp, uintuk3Yzpd, {from: accounts[0]});
//		const boolmCXryFm = await WOLFf2Gt8v.approveAndCall.call(addressL2zgzDG, uintixgiEmn, {from: accounts[2]});
//		const boolMMF5lV = await WOLFf2Gt8v.approveAndCall.call(addressSe4MIib, uintwv8TcCY, {from: accounts[1]});
//		const booldeyJw6G = await WOLFf2Gt8v.transfer.call(addressPJMLkUL, uinthKd1Mkj, {from: accounts[4]});
//		const bool21bvtq = await WOLFf2Gt8v.transferFrom.call(addresstnb5TV9, addressO5h9dU3, uintP76KN1w, {from: accounts[1]});
//		const boolTkMkVTb = await WOLFf2Gt8v.approveAndCall.call(addressvIzY71w, uintcgjJsGh, {from: accounts[0]});
//		const booljV7vP88 = await WOLFf2Gt8v.approve.call(addressbfkJRp, uintfhu9OTe, {from: accounts[0]});
//		const boolkY3hJ56 = await WOLFf2Gt8v.approve.call(addressm1NTbOA, uintq9sumsV, {from: accounts[4]});

		assert.equal(boolBIJhVNm, true)
		assert.equal(boolaZhAYjC, true)
		await expect(WOLFf2Gt8v.transfer.call(addressEfSkyzk, uintKY7ZYx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})