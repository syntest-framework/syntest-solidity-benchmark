const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintiIEx5Q5 = BigInt("1935")
		const stringngBNc2E = "PA4RaFrHS4W6EpjDbvgv6xALbtwSdBxJhqfLq1uuVBsvLQGYuy7ajs1dsqvbPvIU2kpBC1zj1JTMt2Cf"
		const stringCrwv7vc = "99dqgvuhIRAnwvcq9oYg2swdJz9ectDVgNkk5"
		const GreenMarkTrustMFqko70 = await GreenMarkTrust.new(uintiIEx5Q5, stringngBNc2E, stringCrwv7vc, {from: accounts[4]});
		const byteajuOWx = "0x131a1512160708"
		const uint0SNXxX = BigInt("1368")
		const addressIvFVKBW = accounts[4]
		const uintl5ZyOjK = BigInt("305")
		const addressjxw5PNO = accounts[5]
		const uintLyHhY3U = BigInt("949")
		const addressk3qlwcl = accounts[5]
		const addressxUrpIG = accounts[1]
		const bytewhdtOFF = "0x0f"
		const uintevauRGC = BigInt("1762")
		const addressHh3bN8m = accounts[5]
		const uintqa3lPTu = BigInt("1550")
		const addressRLM7d0P = accounts[5]
		const booleL7fPqD = await GreenMarkTrustMFqko70.approveAndCall.call(addressIvFVKBW, uint0SNXxX, byteajuOWx, {from: "0x0000000000000000000000000000000000000001"});
		const booloyQhNw = await GreenMarkTrustMFqko70.transfer.call(addressjxw5PNO, uintl5ZyOjK, {from: accounts[3]});
		const boolANPOMl = await GreenMarkTrustMFqko70.transferFrom.call(addressxUrpIG, addressk3qlwcl, uintLyHhY3U, {from: accounts[3]});
		const booljaYC2o5 = await GreenMarkTrustMFqko70.approveAndCall.call(addressHh3bN8m, uintevauRGC, bytewhdtOFF, {from: "0x0000000000000000000000000000000000000001"});
		const boolEYeKoU = await GreenMarkTrustMFqko70.burnFrom.call(addressRLM7d0P, uintqa3lPTu, {from: accounts[2]});

		await expect(GreenMarkTrustMFqko70.approveAndCall.call(addressIvFVKBW, uint0SNXxX, byteajuOWx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintr9eEFb8 = BigInt("1129")
		const stringqWlVbX5 = "16Wy9jcWQaV4PMgq9daTiltaYVF6CUI026hPs"
		const stringAunDC8v = "E"
		const GreenMarkTrustpqiklwd = await GreenMarkTrust.new(uintr9eEFb8, stringqWlVbX5, stringAunDC8v, {from: accounts[2]});
		const uintop3htHH = BigInt("1193")
		const addressgzmAK2h = accounts[0]
		const uintDVltlRT = BigInt("1642")
		const addressEg68ptO = "0x0000000000000000000000000000000000000001"
		const addressYcV6bGT = "0x0000000000000000000000000000000000000001"
		const boolf3fpo4K = await GreenMarkTrustpqiklwd.approve.call(addressgzmAK2h, uintop3htHH, {from: accounts[4]});
		const boolcUrW9tF = await GreenMarkTrustpqiklwd.transferFrom.call(addressYcV6bGT, addressEg68ptO, uintDVltlRT, {from: accounts[1]});

		assert.equal(boolf3fpo4K, true)
		await expect(GreenMarkTrustpqiklwd.transferFrom.call(addressYcV6bGT, addressEg68ptO, uintDVltlRT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintGJRFOjm = BigInt("1528")
		const stringhqngV2o = "x5rY5xhthNYXod58c9MOqPs"
		const stringIGfTvjG = "k4pr2bg8QekETudPPfDJO1Su"
		const GreenMarkTrustNtL4I0p = await GreenMarkTrust.new(uintGJRFOjm, stringhqngV2o, stringIGfTvjG, {from: accounts[4]});
		const uintVtux9KR = BigInt("1007")
		const addressH4QNKtf = accounts[0]
		const byterAgeZBK = "0x100706160d"
		const uintyL3O1L5 = BigInt("1122")
		const addressALDkBJf = accounts[5]
		const boolwj9725 = await GreenMarkTrustNtL4I0p.transfer.call(addressH4QNKtf, uintVtux9KR, {from: accounts[0]});
		const boolCd0qKFt = await GreenMarkTrustNtL4I0p.approveAndCall.call(addressALDkBJf, uintyL3O1L5, byterAgeZBK, {from: accounts[2]});

		await expect(GreenMarkTrustNtL4I0p.transfer.call(addressH4QNKtf, uintVtux9KR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintv7YDSJh = BigInt("760")
		const stringAvxYsIE = "BQ47"
		const stringKC75LUF = "ECsfzfCL8H3fvJ"
		const GreenMarkTrustptBGmFU = await GreenMarkTrust.new(uintv7YDSJh, stringAvxYsIE, stringKC75LUF, {from: accounts[3]});
		const uintcD21xpg = BigInt("184")
		const addressBObGUiT = accounts[0]
		const uintfWe0sf = BigInt("1838")
		const boolpYvW9xJ = await GreenMarkTrustptBGmFU.approve.call(addressBObGUiT, uintcD21xpg, {from: accounts[4]});
		const boolypwwFMq = await GreenMarkTrustptBGmFU.burn.call(uintfWe0sf, {from: accounts[2]});

		assert.equal(boolpYvW9xJ, true)
		await expect(GreenMarkTrustptBGmFU.burn.call(uintfWe0sf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintLVLRVY9 = BigInt("1647")
		const stringRWlA6yg = "t4WlB"
		const stringtSihNHA = "jY2v4RS4bQlaoaqnPnERQcDGbQoLgRFAvI81tCDHA0vvtU"
		const GreenMarkTrustxHYflBJ = await GreenMarkTrust.new(uintLVLRVY9, stringRWlA6yg, stringtSihNHA, {from: accounts[3]});
		const uintXqhJPWV = BigInt("1836")
		const bytelZ4bwnW = "0x171e180e171901040e040b1513200c06120e1e1d021a09111713"
		const uintRAajuq5 = BigInt("225")
		const addressrTXOXOT = accounts[0]
		const uintYT9fYNu = BigInt("813")
		const addressNmiYMDe = accounts[1]
		const boolkJl667V = await GreenMarkTrustxHYflBJ.burn.call(uintXqhJPWV, {from: accounts[3]});
		const boolC4shYbh = await GreenMarkTrustxHYflBJ.approveAndCall.call(addressrTXOXOT, uintRAajuq5, bytelZ4bwnW, {from: accounts[5]});
		const booljIHNE9u = await GreenMarkTrustxHYflBJ.approve.call(addressNmiYMDe, uintYT9fYNu, {from: accounts[1]});

		assert.equal(boolkJl667V, true)
		await expect(GreenMarkTrustxHYflBJ.approveAndCall.call(addressrTXOXOT, uintRAajuq5, bytelZ4bwnW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintKRm6w0l = BigInt("464")
		const stringTnGQ576 = "xt3wtV8BWYMWHnP13PwIzXPJU6yjHtBsLXKp8TJEVLieKASzruJXO6Odmdqz1BXfAmJYo3rj3FlSLK"
		const stringwzSkjot = "veJTHAtKiTaiCIZvkT60D2YcuJhnLLlgOS3d0fjU"
		const GreenMarkTrustWx6DbMk = await GreenMarkTrust.new(uintKRm6w0l, stringTnGQ576, stringwzSkjot, {from: "0x0000000000000000000000000000000000000001"});
		const uintapbArG = BigInt("858")
		const addressLfBpD1v = accounts[0]
		const uints8TAV5O = BigInt("1562")
		const addresskWZZpuW = accounts[3]
		const uintDBUE1AB = BigInt("1515")
		const byteeKYhEB = "0x151e08"
		const uintIJvNX3 = BigInt("1225")
		const addressIqTJ2x5 = accounts[5]
		const uintTV75NZv = BigInt("1968")
		const addressCxq0VWv = accounts[0]
		const uintWiQZ1hI = BigInt("510")
		const addressDfSFJf8 = accounts[1]
		const addressNjJofvP = accounts[4]
		const boolKhiaEj = await GreenMarkTrustWx6DbMk.burnFrom.call(addressLfBpD1v, uintapbArG, {from: accounts[3]});
		const boolEgRJfHk = await GreenMarkTrustWx6DbMk.approve.call(addresskWZZpuW, uints8TAV5O, {from: accounts[3]});
		const booloR5PSWf = await GreenMarkTrustWx6DbMk.burn.call(uintDBUE1AB, {from: accounts[4]});
		const bool1AtnxY = await GreenMarkTrustWx6DbMk.approveAndCall.call(addressIqTJ2x5, uintIJvNX3, byteeKYhEB, {from: accounts[0]});
		const boolU5AxeV6 = await GreenMarkTrustWx6DbMk.burnFrom.call(addressCxq0VWv, uintTV75NZv, {from: accounts[2]});
		const boolrI5GeTY = await GreenMarkTrustWx6DbMk.transferFrom.call(addressNjJofvP, addressDfSFJf8, uintWiQZ1hI, {from: accounts[2]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintLjn76uT = BigInt("1528")
		const stringhqngV2o = "x5rY5xhthNYXod58c9MOqPs"
		const stringIGfTvjG = "k4pr2bg8QekETudPPfDJO1Su"
		const GreenMarkTrustNtL4I0p = await GreenMarkTrust.new(uintLjn76uT, stringhqngV2o, stringIGfTvjG, {from: accounts[4]});
		const uintjUS5T4u = BigInt("1961")
		const addresszHMdb8 = accounts[0]
		const uintxFVdPYJ = BigInt("852")
		const addressXVBiPBe = accounts[0]
		const uintD604Ng = BigInt("1007")
		const addressAW9SxMW = accounts[2]
		const byteBVV1yPm = "0x040b1a000c0f1b1519191c04110a0d1d1e0b1d1b1b12060908"
		const uintwvxAGFr = BigInt("1921")
		const addressVc3hALw = accounts[1]
		const boolpbtTjH2 = await GreenMarkTrustNtL4I0p.transfer.call(addresszHMdb8, uintjUS5T4u, {from: accounts[4]});
		const boolmuuWITW = await GreenMarkTrustNtL4I0p.approve.call(addressXVBiPBe, uintxFVdPYJ, {from: accounts[5]});
		const boolwj9725 = await GreenMarkTrustNtL4I0p.transfer.call(addressAW9SxMW, uintD604Ng, {from: accounts[0]});
		const boolIQShgYa = await GreenMarkTrustNtL4I0p.approveAndCall.call(addressVc3hALw, uintwvxAGFr, byteBVV1yPm, {from: accounts[3]});

		assert.equal(boolmuuWITW, true)
		assert.equal(boolpbtTjH2, true)
		await expect(GreenMarkTrustNtL4I0p.transfer.call(addressAW9SxMW, uintD604Ng, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uinto5wRdvl = BigInt("1129")
		const stringqWlVbX5 = "16Wy9jcWQaV4PMgq9daTiltaYVF6CUI026hPs"
		const stringAunDC8v = "E"
		const GreenMarkTrustpqiklwd = await GreenMarkTrust.new(uinto5wRdvl, stringqWlVbX5, stringAunDC8v, {from: accounts[2]});
		const uintVCgVZH = BigInt("587")
		const addressRM2m0U = accounts[1]
		const uintU2FhSja = BigInt("155")
		const addressSEX5ut2 = accounts[1]
		const uintHHONQjr = BigInt("1642")
		const addressk56MYln = "0x0000000000000000000000000000000000000002"
		const addressoFzza9H = "0x0000000000000000000000000000000000000000"
		const boolOtitDQ = await GreenMarkTrustpqiklwd.burnFrom.call(addressRM2m0U, uintVCgVZH, {from: accounts[3]});
		const booljOuaMmV = await GreenMarkTrustpqiklwd.transfer.call(addressSEX5ut2, uintU2FhSja, {from: accounts[0]});
		const boolcUrW9tF = await GreenMarkTrustpqiklwd.transferFrom.call(addressoFzza9H, addressk56MYln, uintHHONQjr, {from: accounts[1]});

		await expect(GreenMarkTrustpqiklwd.burnFrom.call(addressRM2m0U, uintVCgVZH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintSQ8M756 = BigInt("1129")
		const stringqWlVbX5 = "16Wy9jcWQaV4PMgq9daTiltaYVF6CUI026hPs"
		const stringAunDC8v = "E"
		const GreenMarkTrustpqiklwd = await GreenMarkTrust.new(uintSQ8M756, stringqWlVbX5, stringAunDC8v, {from: accounts[2]});
		const uintbNGAFEl = BigInt("587")
		const addressDUZijx1 = accounts[2]
		const uintIkqCeL2 = BigInt("813")
		const addressHkTie0z = accounts[0]
		const byteccyetSm = "0x18161803070e0e03171c020603090b00"
		const uintFSEhr0J = BigInt("1694")
		const addressq8lX3Qm = "0x0000000000000000000000000000000000000001"
		const uintp957xO7 = BigInt("917")
		const boolOtitDQ = await GreenMarkTrustpqiklwd.burnFrom.call(addressDUZijx1, uintbNGAFEl, {from: accounts[3]});
		const boolnXjy2q6 = await GreenMarkTrustpqiklwd.burnFrom.call(addressHkTie0z, uintIkqCeL2, {from: accounts[5]});
		const bool2byu9H = await GreenMarkTrustpqiklwd.approveAndCall.call(addressq8lX3Qm, uintFSEhr0J, byteccyetSm, {from: "0x0000000000000000000000000000000000000001"});
		const boolrQoL04 = await GreenMarkTrustpqiklwd.burn.call(uintp957xO7, {from: accounts[2]});

		await expect(GreenMarkTrustpqiklwd.burnFrom.call(addressDUZijx1, uintbNGAFEl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintvZ1zEg0 = BigInt("1129")
		const stringqWlVbX5 = "16Wy9jcWQaV4PMgq9daTiltaYVF6CUI026hPs"
		const stringAunDC8v = "E"
		const GreenMarkTrustpqiklwd = await GreenMarkTrust.new(uintvZ1zEg0, stringqWlVbX5, stringAunDC8v, {from: accounts[2]});
		const uintv2Ypyc7 = BigInt("1292")
		const addressZw6eQ2 = accounts[2]
		const uintwTFboHS = BigInt("1642")
		const addressVjURWMe = "0x00000000000000000000000000000000000000-1"
		const addressGXXQGpo = "0x0000000000000000000000000000000000000001"
		const uintEJ2vOq = BigInt("548")
		const addressdWOE4z9 = accounts[2]
		const addressmL1j2Qq = accounts[1]
		const bool8rxaRZ = await GreenMarkTrustpqiklwd.approve.call(addressZw6eQ2, uintv2Ypyc7, {from: accounts[5]});
		const boolcUrW9tF = await GreenMarkTrustpqiklwd.transferFrom.call(addressGXXQGpo, addressVjURWMe, uintwTFboHS, {from: accounts[1]});
		const boolJq9HvMw = await GreenMarkTrustpqiklwd.transferFrom.call(addressmL1j2Qq, addressdWOE4z9, uintEJ2vOq, {from: accounts[4]});

		assert.equal(bool8rxaRZ, true)
		await expect(GreenMarkTrustpqiklwd.transferFrom.call(addressGXXQGpo, addressVjURWMe, uintwTFboHS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintiKEfQKO = BigInt("1589")
		const stringSAkJ8im = "gfFVtsciCKKlUtAj9OmONOrBsy7cLV7Or7Bz94CKn9QUgMs"
		const stringFjwKJb = "CXyT3ITqd1eFiYuHa64u4UEq8r2kY2qZjhIv7eu2lOVnBbdTz1Kvf5"
		const GreenMarkTrustEULTGSO = await GreenMarkTrust.new(uintiKEfQKO, stringSAkJ8im, stringFjwKJb, {from: accounts[1]});
		const uintktDJ0cd = BigInt("536")
		const addressfaXlYWC = accounts[2]
		const uintGLChC2j = BigInt("1542")
		const addressv5zkeZ = accounts[4]
		const addressDU1bbsg = "0x00000000000000000000000000000000000000-1"
		const uintiRxdJJG = BigInt("1465")
		const addressMVQKRNU = accounts[1]
		const boolBpa7gT6 = await GreenMarkTrustEULTGSO.approve.call(addressfaXlYWC, uintktDJ0cd, {from: accounts[0]});
		const booltlvZADM = await GreenMarkTrustEULTGSO.transferFrom.call(addressDU1bbsg, addressv5zkeZ, uintGLChC2j, {from: accounts[4]});
		const booleJueeHb = await GreenMarkTrustEULTGSO.approve.call(addressMVQKRNU, uintiRxdJJG, {from: accounts[4]});

		assert.equal(boolBpa7gT6, true)
		await expect(GreenMarkTrustEULTGSO.transferFrom.call(addressDU1bbsg, addressv5zkeZ, uintGLChC2j, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})