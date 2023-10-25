const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressMrBrIPy = accounts[3]
		const Fompt141Iqj = await Fomp.new(addressMrBrIPy, {from: accounts[3]});
		const uintLjIk1C7 = BigInt("1641")
		const addressY1aztzu = accounts[1]
		const addressaFoMJ7 = accounts[2]
		const uintB1YvbNX = BigInt("521")
		const addressfogcrlF = "0x0000000000000000000000000000000000000001"
		const addressb1ijzto = accounts[0]
		const addressiLgynuq = accounts[2]
		const boolCGn8fPG = await Fompt141Iqj.approve.call(addressY1aztzu, uintLjIk1C7, {from: accounts[2]});
		const uint96R6g6nIz = await Fompt141Iqj.getCurrentVotes.call(addressaFoMJ7, {from: accounts[2]});
//		const boolpF4y95p = await Fompt141Iqj.transferFrom.call(addressb1ijzto, addressfogcrlF, uintB1YvbNX, {from: accounts[4]});
//		const addressLefv53 = await Fompt141Iqj.delegate.call(addressiLgynuq, {from: accounts[3]});

		assert.equal(boolCGn8fPG, true)
		assert.equal(uint96R6g6nIz, BigInt("0"))
		await expect(Fompt141Iqj.transferFrom.call(addressb1ijzto, addressfogcrlF, uintB1YvbNX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressxDjBEaO = accounts[5]
		const FompvO9VXPE = await Fomp.new(addressxDjBEaO, {from: accounts[5]});
		const addressQulN9Cn = accounts[1]
		const addressV62m533 = accounts[3]
		const addressSh5rvj = accounts[0]
		const uintMNCzppK = BigInt("1327")
		const addressnPROyjY = accounts[4]
		const addresspkd0Bp6 = accounts[2]
		const uint96bULHbc = await FompvO9VXPE.getCurrentVotes.call(addressQulN9Cn, {from: accounts[5]});
		const uintSUxh6gZ = await FompvO9VXPE.allowance.call(addressSh5rvj, addressV62m533, {from: accounts[5]});
//		const uint96W8c6CuI = await FompvO9VXPE.getPriorVotes.call(addressnPROyjY, uintMNCzppK, {from: accounts[2]});
//		const uint96RmIsjPc = await FompvO9VXPE.getCurrentVotes.call(addresspkd0Bp6, {from: accounts[1]});

		assert.equal(uint96bULHbc, BigInt("0"))
		assert.equal(uintSUxh6gZ, BigInt("0"))
		await expect(FompvO9VXPE.getPriorVotes.call(addressnPROyjY, uintMNCzppK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressAgmuPGN = accounts[5]
		const FompsaLNvYY = await Fomp.new(addressAgmuPGN, {from: "0x0000000000000000000000000000000000000001"});
		const uintdW72eqM = BigInt("1214")
		const addressod1bSWI = accounts[2]
		const uintSEjNfam = BigInt("1898")
		const addressCR7moL5 = accounts[0]
		const uintfM1ZZ4p = BigInt("395")
		const addresswCcH6ns = accounts[0]
		const uint96IwUpQR = await FompsaLNvYY.getPriorVotes.call(addressod1bSWI, uintdW72eqM, {from: "0x0000000000000000000000000000000000000001"});
		const boolgbhfjto = await FompsaLNvYY.approve.call(addressCR7moL5, uintSEjNfam, {from: accounts[1]});
		const boolPvpzdX5 = await FompsaLNvYY.transfer.call(addresswCcH6ns, uintfM1ZZ4p, {from: accounts[0]});
	});

	it('test for Fomp', async () => {
		const addressYxKyqdX = accounts[3]
		const FompAPBrnm6 = await Fomp.new(addressYxKyqdX, {from: accounts[1]});
		const addressw9qNhRr = accounts[1]
		const addressGDt4mfv = accounts[2]
		const addressiHXpDB2 = accounts[4]
		const bytejM3vaJA = "0x0b0d021f0812041009070811041807081c1c04100110100219170a1916021815"
		const byteJV5vE4Q = "0x0c1304080a1b1f000a190c18150e14120a040e091513141501181c1901100002"
		const uintPIMAI2a = BigInt("234")
		const uintWY1X10J = BigInt("681")
		const uintGYAW263 = BigInt("1381")
		const addressEqN447H = accounts[1]
		const addressvFvsRQ = accounts[5]
		const uintsPsinSo = BigInt("780")
		const addressLbbaXEZ = accounts[4]
		const uintwm2dKOP = await FompAPBrnm6.balanceOf.call(addressw9qNhRr, {from: accounts[4]});
		const uintf5aI08g = await FompAPBrnm6.allowance.call(addressiHXpDB2, addressGDt4mfv, {from: accounts[2]});
//		const addressgvQ3gfn = await FompAPBrnm6.delegateBySig.call(addressEqN447H, uintGYAW263, uintWY1X10J, uintPIMAI2a, byteJV5vE4Q, bytejM3vaJA, {from: accounts[1]});
//		const uint96lD6AiEw = await FompAPBrnm6.getCurrentVotes.call(addressvFvsRQ, {from: accounts[0]});
//		const boolyMj8huC = await FompAPBrnm6.transfer.call(addressLbbaXEZ, uintsPsinSo, {from: accounts[0]});

		assert.equal(uintf5aI08g, BigInt("0"))
		assert.equal(uintwm2dKOP, BigInt("0"))
		await expect(FompAPBrnm6.delegateBySig.call(addressEqN447H, uintGYAW263, uintWY1X10J, uintPIMAI2a, byteJV5vE4Q, bytejM3vaJA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressZpf8Fh7 = accounts[1]
		const FompPEweEIR = await Fomp.new(addressZpf8Fh7, {from: accounts[1]});
		const addressR4AEsKJ = accounts[4]
		const addresswXTnWub = accounts[3]
		const addressOb1ormI = accounts[5]
		const addressoWkky1y = accounts[1]
		const uintrpw0lG5 = BigInt("1905")
		const addressoRPIr8H = accounts[2]
		const uintrsnonEq = await FompPEweEIR.balanceOf.call(addressR4AEsKJ, {from: accounts[3]});
		const address6yxl2n = await FompPEweEIR.delegate.call(addresswXTnWub, {from: accounts[3]});
		const uint96GABUsFI = await FompPEweEIR.getCurrentVotes.call(addressOb1ormI, {from: accounts[2]});
		const addressASvsc0E = await FompPEweEIR.delegate.call(addressoWkky1y, {from: accounts[1]});
		const boolw6Gljvz = await FompPEweEIR.approve.call(addressoRPIr8H, uintrpw0lG5, {from: accounts[3]});

		assert.equal(boolw6Gljvz, true)
		assert.equal(uint96GABUsFI, BigInt("0"))
		assert.equal(uintrsnonEq, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressAKlOwem = accounts[0]
		const FompfAclick = await Fomp.new(addressAKlOwem, {from: accounts[0]});
		const addressD7FF6gI = "0x0000000000000000000000000000000000000001"
		const addressS19IhS1 = accounts[2]
		const uintCoBPjX0 = BigInt("1167")
		const addresszeVTMEC = accounts[4]
		const uintoldgDFy = await FompfAclick.balanceOf.call(addressD7FF6gI, {from: accounts[2]});
		const addressw9GLhwq = await FompfAclick.delegate.call(addressS19IhS1, {from: accounts[3]});
		const boolUAOaZaw = await FompfAclick.transfer.call(addresszeVTMEC, uintCoBPjX0, {from: accounts[0]});

		assert.equal(boolUAOaZaw, true)
		assert.equal(uintoldgDFy, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressusJqCS = accounts[1]
		const FompPEweEIR = await Fomp.new(addressusJqCS, {from: accounts[1]});
		const addressenzWP5j = accounts[3]
		const uinth1TCgUQ = BigInt("1529")
		const addressi8Pzz0Z = accounts[0]
		const addresslqSaK19 = accounts[5]
		const addressuasSk1V = accounts[2]
		const uintILthgMb = BigInt("1905")
		const addresscOL5eUz = accounts[2]
		const address6yxl2n = await FompPEweEIR.delegate.call(addressenzWP5j, {from: accounts[3]});
//		const boolxumRgmC = await FompPEweEIR.transfer.call(addressi8Pzz0Z, uinth1TCgUQ, {from: accounts[2]});
//		const uint96GABUsFI = await FompPEweEIR.getCurrentVotes.call(addresslqSaK19, {from: accounts[2]});
//		const addressASvsc0E = await FompPEweEIR.delegate.call(addressuasSk1V, {from: accounts[1]});
//		const boolw6Gljvz = await FompPEweEIR.approve.call(addresscOL5eUz, uintILthgMb, {from: accounts[3]});

		await expect(FompPEweEIR.transfer.call(addressi8Pzz0Z, uinth1TCgUQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressLS8SJy2 = accounts[1]
		const FompPEweEIR = await Fomp.new(addressLS8SJy2, {from: accounts[1]});
		const addressP2ZPzh0 = accounts[4]
		const addresshddWqJ9 = accounts[3]
		const addressHpGGqSk = accounts[5]
		const addressbBwyrnC = accounts[0]
		const uinty2uv46 = BigInt("43")
		const addressLf4jyk = "0x0000000000000000000000000000000000000001"
		const uintQIjWpw = BigInt("1905")
		const addressc8KfK8v = accounts[2]
		const bytewK2bwEc = "0x010d0d071c1b0a150a18090b10091b11011f00101f051f1d02141b0a03061501"
		const byteWQWcMwi = "0x171f0c080c080c011f1e09091a04040c1601070107190208121f1a171a1b0310"
		const uintArwWGP = BigInt("144")
		const uintJNzayXc = BigInt("612")
		const uintha2vRLY = BigInt("1625")
		const addressyRKHkR2 = accounts[5]
		const uintCyqbvkY = BigInt("1167")
		const addressa1ECMFQ = accounts[2]
		const addressLHx4en = accounts[2]
		const uintrsnonEq = await FompPEweEIR.balanceOf.call(addressP2ZPzh0, {from: accounts[3]});
		const address6yxl2n = await FompPEweEIR.delegate.call(addresshddWqJ9, {from: accounts[3]});
		const uint96GABUsFI = await FompPEweEIR.getCurrentVotes.call(addressHpGGqSk, {from: accounts[2]});
		const addressASvsc0E = await FompPEweEIR.delegate.call(addressbBwyrnC, {from: accounts[1]});
		const uint96kKvOc5Z = await FompPEweEIR.getPriorVotes.call(addressLf4jyk, uinty2uv46, {from: accounts[2]});
		const boolw6Gljvz = await FompPEweEIR.approve.call(addressc8KfK8v, uintQIjWpw, {from: accounts[3]});
//		const addressRhZAHzB = await FompPEweEIR.delegateBySig.call(addressyRKHkR2, uintha2vRLY, uintJNzayXc, uintArwWGP, byteWQWcMwi, bytewK2bwEc, {from: accounts[5]});
//		const boolikrImE = await FompPEweEIR.transferFrom.call(addressLHx4en, addressa1ECMFQ, uintCyqbvkY, {from: accounts[1]});

		assert.equal(boolw6Gljvz, true)
		assert.equal(uint96GABUsFI, BigInt("0"))
		assert.equal(uint96kKvOc5Z, BigInt("0"))
		assert.equal(uintrsnonEq, BigInt("0"))
		await expect(FompPEweEIR.delegateBySig.call(addressyRKHkR2, uintha2vRLY, uintJNzayXc, uintArwWGP, byteWQWcMwi, bytewK2bwEc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressMhasKS1 = accounts[1]
		const FompPEweEIR = await Fomp.new(addressMhasKS1, {from: accounts[1]});
		const uintxiB85ih = BigInt("1401")
		const addressKUoKScA = "0x0000000000000000000000000000000000000001"
		const uintXFvrdBR = BigInt("57")
		const addresszU0fS2e = accounts[0]
		const addressZpJihJR = accounts[4]
		const addresstlznwHk = accounts[1]
		const addressAduDaj = accounts[0]
		const addresswyprBc = accounts[3]
		const uintkfbjxB = BigInt("376")
		const addressWjCqgfM = accounts[4]
		const uintyQOIpn = BigInt("43")
		const addressCEhkplf = "0x0000000000000000000000000000000000000001"
		const uintm3CtD3l = BigInt("1905")
		const addressUk0slX = accounts[2]
		const bytecsEiVeH = "0x1407091c181516150a02090f190705170a10010504150e1b0b1615190a17080a"
		const bytez0w8Nz1 = "0x171f0c080c080c011f1e09091afffffffe040c1601070107190208121f1a171a1b0310"
		const uintTkzPbhD = BigInt("144")
		const uintoLdyuyo = BigInt("612")
		const uinth3EmL8r = BigInt("1625")
		const addressqzJNIO = accounts[1]
		const addresssEMMfRc = accounts[1]
		const uintNUolokv = BigInt("689")
		const addressA02YaQ = "0x0000000000000000000000000000000000000001"
		const uintZleyPyF = BigInt("700")
		const addressYecwpJu = accounts[0]
		const booliT4Qwzj = await FompPEweEIR.approve.call(addressKUoKScA, uintxiB85ih, {from: accounts[2]});
		const boolInk82ow = await FompPEweEIR.approve.call(addresszU0fS2e, uintXFvrdBR, {from: accounts[0]});
		const uintrsnonEq = await FompPEweEIR.balanceOf.call(addressZpJihJR, {from: accounts[3]});
		const addressaN9B4Z = await FompPEweEIR.delegate.call(addresstlznwHk, {from: accounts[1]});
		const uintaRkoFm7 = await FompPEweEIR.balanceOf.call(addressAduDaj, {from: "0x0000000000000000000000000000000000000001"});
		const address6yxl2n = await FompPEweEIR.delegate.call(addresswyprBc, {from: accounts[3]});
		const boolr4tUvMr = await FompPEweEIR.approve.call(addressWjCqgfM, uintkfbjxB, {from: accounts[1]});
		const uint96kKvOc5Z = await FompPEweEIR.getPriorVotes.call(addressCEhkplf, uintyQOIpn, {from: accounts[2]});
		const boolw6Gljvz = await FompPEweEIR.approve.call(addressUk0slX, uintm3CtD3l, {from: accounts[3]});
//		const addressRhZAHzB = await FompPEweEIR.delegateBySig.call(addressqzJNIO, uinth3EmL8r, uintoLdyuyo, uintTkzPbhD, bytez0w8Nz1, bytecsEiVeH, {from: accounts[5]});
//		const uintXOlDnzc = await FompPEweEIR.balanceOf.call(addresssEMMfRc, {from: accounts[4]});
//		const uint96tWbiWSK = await FompPEweEIR.getPriorVotes.call(addressA02YaQ, uintNUolokv, {from: accounts[2]});
//		const uint96aYh9yuu = await FompPEweEIR.getPriorVotes.call(addressYecwpJu, uintZleyPyF, {from: accounts[4]});

		assert.equal(boolInk82ow, true)
		assert.equal(booliT4Qwzj, true)
		assert.equal(boolr4tUvMr, true)
		assert.equal(boolw6Gljvz, true)
		assert.equal(uint96kKvOc5Z, BigInt("0"))
		assert.equal(uintaRkoFm7, BigInt("0"))
		assert.equal(uintrsnonEq, BigInt("0"))
		await expect(FompPEweEIR.delegateBySig.call(addressqzJNIO, uinth3EmL8r, uintoLdyuyo, uintTkzPbhD, bytez0w8Nz1, bytecsEiVeH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressXGwGcbt = accounts[3]
		const FompCpGXW24 = await Fomp.new(addressXGwGcbt, {from: accounts[4]});
		const uintbi6RTAx = BigInt("0")
		const addressJnp6G7g = accounts[1]
		const addressJrNg5bQ = accounts[5]
		const uintxWmOS9n = BigInt("581")
		const addressZ9lWOCC = accounts[0]
		const uintKH8njk7 = BigInt("624")
		const addressrQGYZbX = accounts[3]
		const addressxNrNIWF = accounts[4]
		const addressDrV1d41 = accounts[1]
		const addressiXfegCn = accounts[4]
		const addressP8bmIKk = "0x00000000000000000000000000000000000000-1"
		const addressdRyXNKU = accounts[1]
		const addressJJOzUqo = accounts[2]
		const addressYZ4pbxQ = accounts[1]
		const addresstI0mW2K = accounts[5]
		const uintsC6ldPj = BigInt("917")
		const addressE5Cz5Js = accounts[4]
		const addressWuqRoo4 = accounts[3]
		const uintt3FRlSl = BigInt("737")
		const addressw43sfNO = accounts[0]
		const addressRhtO96b = accounts[3]
		const addressHqCyNHv = accounts[1]
		const addressk0lshLw = accounts[0]
		const addressBRkNMBu = "0x0000000000000000000000000000000000000001"
		const booldmyXO6u = await FompCpGXW24.approve.call(addressJnp6G7g, uintbi6RTAx, {from: accounts[4]});
		const uintzz7cya = await FompCpGXW24.balanceOf.call(addressJrNg5bQ, {from: accounts[4]});
		const uint96cOj22S6 = await FompCpGXW24.getPriorVotes.call(addressZ9lWOCC, uintxWmOS9n, {from: accounts[2]});
		const boolBHFE6p = await FompCpGXW24.approve.call(addressrQGYZbX, uintKH8njk7, {from: accounts[0]});
		const uintrz7T9En = await FompCpGXW24.allowance.call(addressDrV1d41, addressxNrNIWF, {from: accounts[2]});
//		const uintMRrql8O = await FompCpGXW24.allowance.call(addressP8bmIKk, addressiXfegCn, {from: accounts[0]});
//		const addressgI5jGS = await FompCpGXW24.delegate.call(addressdRyXNKU, {from: accounts[4]});
//		const uint96Vty9CQ = await FompCpGXW24.getCurrentVotes.call(addressJJOzUqo, {from: accounts[2]});
//		const addresse15Elba = await FompCpGXW24.delegate.call(addressYZ4pbxQ, {from: accounts[3]});
//		const addressQnjK0bE = await FompCpGXW24.delegate.call(addresstI0mW2K, {from: accounts[1]});
//		const uint96ZkVnGU9 = await FompCpGXW24.getPriorVotes.call(addressE5Cz5Js, uintsC6ldPj, {from: accounts[0]});
//		const uint96oxgguBO = await FompCpGXW24.getCurrentVotes.call(addressWuqRoo4, {from: accounts[4]});
//		const boolqaTehM7 = await FompCpGXW24.transferFrom.call(addressRhtO96b, addressw43sfNO, uintt3FRlSl, {from: accounts[5]});
//		const uint96Ag1tqf9 = await FompCpGXW24.getCurrentVotes.call(addressHqCyNHv, {from: accounts[1]});
//		const uintySX9Zi9 = await FompCpGXW24.allowance.call(addressBRkNMBu, addressk0lshLw, {from: accounts[3]});

		assert.equal(boolBHFE6p, true)
		assert.equal(booldmyXO6u, true)
		assert.equal(uint96cOj22S6, BigInt("0"))
		assert.equal(uintrz7T9En, BigInt("0"))
		assert.equal(uintzz7cya, BigInt("0"))
		await expect(FompCpGXW24.allowance.call(addressP8bmIKk, addressiXfegCn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresswIvhXhI = accounts[3]
		const FompCpGXW24 = await Fomp.new(addresswIvhXhI, {from: accounts[4]});
		const byteKFbXXr = "0x11100c08031316011616071316151a1c0015141c141009071d1603130d1e101a"
		const byteMpNAELs = "0x01201c180b1f13011d0d1e1f080b171b0dfffffffd1214171e13011b18011518151106"
		const uintu8JGgBU = BigInt("117")
		const uintHjnmUNX = BigInt("1314")
		const uintJFX223K = BigInt("2")
		const addresstRF0Sd = accounts[2]
		const addressLA6G13E = accounts[2]
		const addressBR8YQOG = accounts[4]
//		const addresswkgLMNi = await FompCpGXW24.delegateBySig.call(addresstRF0Sd, uintJFX223K, uintHjnmUNX, uintu8JGgBU, byteMpNAELs, byteKFbXXr, {from: accounts[2]});
//		const uintRJGtN1Y = await FompCpGXW24.allowance.call(addressBR8YQOG, addressLA6G13E, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FompCpGXW24.delegateBySig.call(addresstRF0Sd, uintJFX223K, uintHjnmUNX, uintu8JGgBU, byteMpNAELs, byteKFbXXr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const address09ho8L = accounts[3]
		const FompCpGXW24 = await Fomp.new(address09ho8L, {from: accounts[4]});
		const byteylpWBT3 = "0x11100c08031316011616071316151a1c0015141c141009071d1603130d1e101a"
		const bytebJyWNNG = "0xfffffffc201c180b1f13011d0d1e1f080b171b0d011214171e13011b18011518151106"
		const uintZSDa1n2 = BigInt("117")
		const uintEH7f65m = BigInt("1314")
		const uintuz3yXst = BigInt("2")
		const addressiLPCCN7 = accounts[2]
		const byteLH2Qmn = "0x1a15100b081a0b1c0e1200180d2000011d1f1205191920041b141b0917131001"
		const byteTXkTIcU = "0x1e0e130c1f0c111604041b0d1009191003120a1b0c0c1219041d100711081518"
		const uintWYhHE24 = BigInt("234")
		const uintyKtQqWn = BigInt("456")
		const uinty50Ic77 = BigInt("251")
		const addressbP1Yk36 = accounts[3]
//		const addresswkgLMNi = await FompCpGXW24.delegateBySig.call(addressiLPCCN7, uintuz3yXst, uintEH7f65m, uintZSDa1n2, bytebJyWNNG, byteylpWBT3, {from: accounts[2]});
//		const addressaSAt67X = await FompCpGXW24.delegateBySig.call(addressbP1Yk36, uinty50Ic77, uintyKtQqWn, uintWYhHE24, byteTXkTIcU, byteLH2Qmn, {from: accounts[3]});

		await expect(FompCpGXW24.delegateBySig.call(addressiLPCCN7, uintuz3yXst, uintEH7f65m, uintZSDa1n2, bytebJyWNNG, byteylpWBT3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})