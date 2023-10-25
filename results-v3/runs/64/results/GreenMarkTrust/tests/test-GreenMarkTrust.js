const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintFMXlOb = BigInt("800")
		const stringYVuu23d = "sNxu10Uce77XPOTL8org9JXyvVnAfWEJtONg53GQXA3yjFYchTJTbDBuL8VdlJ6KWq3YKUSeeP"
		const stringOT1dZzB = "cTrdfbCwSg1B8OANWeEtDX4z"
		const GreenMarkTrustsdEAoKY = await GreenMarkTrust.new(uintFMXlOb, stringYVuu23d, stringOT1dZzB, {from: accounts[3]});
		const byteCinrWeq = "0x1a10041b0f1209071f1709"
		const uintHtL3Hfi = BigInt("1319")
		const addressYoCvlSv = accounts[1]
		const uintZNkJRwq = BigInt("85")
		const addressaMeJ1EW = accounts[1]
		const addresssNBsuK3 = accounts[0]
		const byteCYYHxLf = "0x1e1b1d12140d161707171217121d03020a0103110505130716121616"
		const uintJXfsQkU = BigInt("1972")
		const addressJLUq0xC = accounts[0]
		const uintlemlZMY = BigInt("1014")
		const addressSyvnRVi = accounts[1]
		const boolr7GcTDO = await GreenMarkTrustsdEAoKY.approveAndCall.call(addressYoCvlSv, uintHtL3Hfi, byteCinrWeq, {from: accounts[4]});
		const booly8A6GtO = await GreenMarkTrustsdEAoKY.transferFrom.call(addresssNBsuK3, addressaMeJ1EW, uintZNkJRwq, {from: accounts[2]});
		const boolBDPjOgJ = await GreenMarkTrustsdEAoKY.approveAndCall.call(addressJLUq0xC, uintJXfsQkU, byteCYYHxLf, {from: accounts[4]});
		const boolBlnVca1 = await GreenMarkTrustsdEAoKY.approve.call(addressSyvnRVi, uintlemlZMY, {from: accounts[0]});

		await expect(GreenMarkTrustsdEAoKY.approveAndCall.call(addressYoCvlSv, uintHtL3Hfi, byteCinrWeq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintwbawwCs = BigInt("1655")
		const stringn7FRAKV = "KjJewquzhyfiw"
		const stringlipQ7Tt = "LYyE7NVSC9oRwj9gHvNmmYOPmQAPgoixQ8ENB1g2"
		const GreenMarkTrustS22fRvY = await GreenMarkTrust.new(uintwbawwCs, stringn7FRAKV, stringlipQ7Tt, {from: accounts[3]});
		const uintaNrPQj4 = BigInt("330")
		const addressveOEk1e = accounts[3]
		const addressPGF6y6o = accounts[0]
		const uintMPfOj87 = BigInt("1413")
		const addressAXyJH1 = accounts[4]
		const uintMnFRxYo = BigInt("1356")
		const addresskIr0u4 = accounts[3]
		const uintYs4vN0 = BigInt("1334")
		const addressje0y8vU = "0x0000000000000000000000000000000000000001"
		const addressUxlr30Z = accounts[0]
		const uintaPcm2iX = BigInt("652")
		const addressTta61Y = "0x0000000000000000000000000000000000000001"
		const uintnl7Qvg1 = BigInt("1447")
		const addressFf9G1Af = "0x0000000000000000000000000000000000000001"
		const addressSCovyPs = accounts[4]
		const bool2giJyk = await GreenMarkTrustS22fRvY.transferFrom.call(addressPGF6y6o, addressveOEk1e, uintaNrPQj4, {from: accounts[3]});
		const boolKRaS6z5 = await GreenMarkTrustS22fRvY.transfer.call(addressAXyJH1, uintMPfOj87, {from: accounts[1]});
		const boolnGvJEEx = await GreenMarkTrustS22fRvY.transfer.call(addresskIr0u4, uintMnFRxYo, {from: accounts[0]});
		const boolzd4hpHy = await GreenMarkTrustS22fRvY.transferFrom.call(addressUxlr30Z, addressje0y8vU, uintYs4vN0, {from: accounts[3]});
		const boolVNQ8S2E = await GreenMarkTrustS22fRvY.approve.call(addressTta61Y, uintaPcm2iX, {from: accounts[1]});
		const boolFZDBSN = await GreenMarkTrustS22fRvY.transferFrom.call(addressSCovyPs, addressFf9G1Af, uintnl7Qvg1, {from: accounts[4]});

		await expect(GreenMarkTrustS22fRvY.transferFrom.call(addressPGF6y6o, addressveOEk1e, uintaNrPQj4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintxXy4Wa = BigInt("1503")
		const string5YpRIp = "Z6EaUXK0B2IzMf8mskHu7NAHoy9CKt59I1S1Q5EF2W31gpMKuFGxWgdVnKa4FnCnjtUfduhBV9fB73mNFgM7y6G1X"
		const stringw0AW7z9 = "p9k6TFhb8nV4RTdXsHIeny7i9QDhVys4HqHoB9wiK6"
		const GreenMarkTruste11pbZz = await GreenMarkTrust.new(uintxXy4Wa, string5YpRIp, stringw0AW7z9, {from: accounts[0]});
		const uintgxebhHL = BigInt("1061")
		const addressvFEXFU = accounts[0]
		const byteozgyhNI = "0x0712110d08120b1406141110011618"
		const uintTBqzrIW = BigInt("1483")
		const addresso6syuWa = accounts[1]
		const boolKcOwkZ = await GreenMarkTruste11pbZz.burnFrom.call(addressvFEXFU, uintgxebhHL, {from: accounts[0]});
		const bool9XYmxX = await GreenMarkTruste11pbZz.approveAndCall.call(addresso6syuWa, uintTBqzrIW, byteozgyhNI, {from: accounts[2]});

		await expect(GreenMarkTruste11pbZz.burnFrom.call(addressvFEXFU, uintgxebhHL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintVmzc3lf = BigInt("574")
		const stringAZRb8Gu = "1aAcqS2r6KTmF7wYkUSRMnxH5AgTsBzQK1XVDje2YPcx8YmSp6rcWVcQFh3KeQha1whBIyFcaXKX528eX8badyv"
		const stringifgGBtu = "ZpmRCLqpLhkGy8RGD25sduNLRdtiPGjnMgfx3BkBvZmy8WDVGug5XmpB1LTomYeSv"
		const GreenMarkTrustixE8Po3 = await GreenMarkTrust.new(uintVmzc3lf, stringAZRb8Gu, stringifgGBtu, {from: "0x0000000000000000000000000000000000000001"});
		const byteGvLlR8 = "0x181b030a0c051016180100060b1f06041c2007"
		const uintmfB7GZE = BigInt("556")
		const addressl9ydGR = accounts[2]
		const uintiFTNXPO = BigInt("196")
		const addressdEXhIc0 = accounts[0]
		const uintOM7u5uC = BigInt("1854")
		const addressBfB9Gxr = accounts[5]
		const addressqZYCetu = accounts[4]
		const uintF7MNotS = BigInt("1525")
		const addressxeDi6Mv = accounts[4]
		const uintpz4GC0 = BigInt("1758")
		const addressUXSfz6L = accounts[3]
		const boolbMVkf8E = await GreenMarkTrustixE8Po3.approveAndCall.call(addressl9ydGR, uintmfB7GZE, byteGvLlR8, {from: accounts[4]});
		const boolEc8ng6t = await GreenMarkTrustixE8Po3.transfer.call(addressdEXhIc0, uintiFTNXPO, {from: accounts[3]});
		const boolZkO9Fr = await GreenMarkTrustixE8Po3.transferFrom.call(addressqZYCetu, addressBfB9Gxr, uintOM7u5uC, {from: accounts[4]});
		const boolvkHpqQu = await GreenMarkTrustixE8Po3.approve.call(addressxeDi6Mv, uintF7MNotS, {from: accounts[3]});
		const boolNT8Yhf6 = await GreenMarkTrustixE8Po3.approve.call(addressUXSfz6L, uintpz4GC0, {from: accounts[1]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintg3d0L1Q = BigInt("1655")
		const stringn7FRAKV = "KjJewquzhyfiw"
		const stringlipQ7Tt = "LYyE7NVSC9oRwj9gHvNmmYOPmQAPgoixQ8ENB1g2"
		const GreenMarkTrustS22fRvY = await GreenMarkTrust.new(uintg3d0L1Q, stringn7FRAKV, stringlipQ7Tt, {from: accounts[3]});
		const uintH8ok3Hu = BigInt("424")
		const uintANXOHgj = BigInt("330")
		const addressE9IhfBm = accounts[3]
		const addressvlReJv8 = accounts[0]
		const uintWODQ2i = BigInt("1413")
		const addresse5AUZs = accounts[4]
		const uinthvwpGq = BigInt("1356")
		const addressoxLm556 = accounts[3]
		const uintnpXLStC = BigInt("1334")
		const addressFpQJrdG = "0x0000000000000000000000000000000000000001"
		const addressY3ETqE4 = accounts[0]
		const uintx2ALCOB = BigInt("684")
		const addressKH5sWyH = "0x0000000000000000000000000000000000000001"
		const uintEPuAVbh = BigInt("1447")
		const addresskEb5Nc8 = "0x0000000000000000000000000000000000000001"
		const addressfaGbAoA = accounts[4]
		const boolr9NWGxp = await GreenMarkTrustS22fRvY.burn.call(uintH8ok3Hu, {from: accounts[0]});
		const bool2giJyk = await GreenMarkTrustS22fRvY.transferFrom.call(addressvlReJv8, addressE9IhfBm, uintANXOHgj, {from: accounts[3]});
		const boolKRaS6z5 = await GreenMarkTrustS22fRvY.transfer.call(addresse5AUZs, uintWODQ2i, {from: accounts[1]});
		const boolnGvJEEx = await GreenMarkTrustS22fRvY.transfer.call(addressoxLm556, uinthvwpGq, {from: accounts[0]});
		const boolzd4hpHy = await GreenMarkTrustS22fRvY.transferFrom.call(addressY3ETqE4, addressFpQJrdG, uintnpXLStC, {from: accounts[3]});
		const boolVNQ8S2E = await GreenMarkTrustS22fRvY.approve.call(addressKH5sWyH, uintx2ALCOB, {from: accounts[1]});
		const boolFZDBSN = await GreenMarkTrustS22fRvY.transferFrom.call(addressfaGbAoA, addresskEb5Nc8, uintEPuAVbh, {from: accounts[4]});

		await expect(GreenMarkTrustS22fRvY.burn.call(uintH8ok3Hu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintvCctzlr = BigInt("1049")
		const stringS1jzgJG = "kuEDFDJ26beQTAly"
		const stringlKsPYFn = "CgTMUnNozCqewcKuQlZLqUWPqcDt7fk8bw2iwFY94dm9v5w3qRwzORSnLM6JULsx7fIWFG"
		const GreenMarkTrustznSHOyH = await GreenMarkTrust.new(uintvCctzlr, stringS1jzgJG, stringlKsPYFn, {from: accounts[3]});
		const uintNDEf7b5 = BigInt("707")
		const addressjMpuxqr = accounts[4]
		const uintTlw2d16 = BigInt("539")
		const addressmge8YJd = accounts[5]
		const uintSixagKk = BigInt("116")
		const addressUqVsosD = "0x0000000000000000000000000000000000000001"
		const addressUKzYqun = accounts[0]
		const uintgmECA3a = BigInt("1379")
		const addressDgX6Sy0 = accounts[1]
		const addressx3lHlIl = accounts[0]
		const uintnxImOJx = BigInt("699")
		const addressh7oAuo7 = accounts[1]
		const uintNOtU0r4 = BigInt("592")
		const addresscsK5M2K = accounts[4]
		const booldP8ha25 = await GreenMarkTrustznSHOyH.approve.call(addressjMpuxqr, uintNDEf7b5, {from: accounts[0]});
		const booldzUxJT = await GreenMarkTrustznSHOyH.transfer.call(addressmge8YJd, uintTlw2d16, {from: accounts[2]});
		const boolKaRkInn = await GreenMarkTrustznSHOyH.transferFrom.call(addressUKzYqun, addressUqVsosD, uintSixagKk, {from: accounts[3]});
		const boolnTVbNoB = await GreenMarkTrustznSHOyH.transferFrom.call(addressx3lHlIl, addressDgX6Sy0, uintgmECA3a, {from: accounts[3]});
		const boolabZeYFb = await GreenMarkTrustznSHOyH.burnFrom.call(addressh7oAuo7, uintnxImOJx, {from: accounts[3]});
		const boolpeWAcWv = await GreenMarkTrustznSHOyH.approve.call(addresscsK5M2K, uintNOtU0r4, {from: accounts[2]});

		assert.equal(booldP8ha25, true)
		await expect(GreenMarkTrustznSHOyH.transfer.call(addressmge8YJd, uintTlw2d16, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintuVMd0P7 = BigInt("1049")
		const stringS1jzgJG = "kuEDFDJ26beQTAly"
		const stringlKsPYFn = "CgTMUnNozCqewcKuQlZLqUWPqcDt7fk8bw2iwFY94dm9v5w3qRwzORSnLM6JULsx7fIWFG"
		const GreenMarkTrustznSHOyH = await GreenMarkTrust.new(uintuVMd0P7, stringS1jzgJG, stringlKsPYFn, {from: accounts[3]});
		const uintWT3IjZk = BigInt("1892")
		const uintyxmvxgt = BigInt("975")
		const addressn9CLkXW = accounts[4]
		const uintuqT8Rgy = BigInt("721")
		const addressv449tIp = "0x0000000000000000000000000000000000000001"
		const addressrMosyCA = accounts[1]
		const uintQDsM8rs = BigInt("692")
		const addressf0r4xba = accounts[2]
		const boolOORhwhE = await GreenMarkTrustznSHOyH.burn.call(uintWT3IjZk, {from: accounts[3]});
		const boolvvWP8OJ = await GreenMarkTrustznSHOyH.transfer.call(addressn9CLkXW, uintyxmvxgt, {from: accounts[5]});
		const boolKaRkInn = await GreenMarkTrustznSHOyH.transferFrom.call(addressrMosyCA, addressv449tIp, uintuqT8Rgy, {from: accounts[3]});
		const boolabZeYFb = await GreenMarkTrustznSHOyH.burnFrom.call(addressf0r4xba, uintQDsM8rs, {from: accounts[3]});

		assert.equal(boolOORhwhE, true)
		await expect(GreenMarkTrustznSHOyH.transfer.call(addressn9CLkXW, uintyxmvxgt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintV62tSo0 = BigInt("1049")
		const stringS1jzgJG = "kuEDFDJ26beQTAly"
		const stringlKsPYFn = "CgTMUnNozCqewcKuQlZLqUWPqcDt7fk8bw2iwFY94dm9v5w3qRwzORSnLM6JULsx7fIWFG"
		const GreenMarkTrustznSHOyH = await GreenMarkTrust.new(uintV62tSo0, stringS1jzgJG, stringlKsPYFn, {from: accounts[3]});
		const uintpgMZsRh = BigInt("1836")
		const addressuTPCwhi = accounts[0]
		const uintaJvYAAu = BigInt("721")
		const addressJmqGom = "0x0000000000000000000000000000000000000000"
		const addressSG50jJU = accounts[0]
		const uintlvjTdxb = BigInt("72")
		const addressQuPctWW = accounts[1]
		const addressjviBCTU = accounts[4]
		const boolzSdzjR = await GreenMarkTrustznSHOyH.transfer.call(addressuTPCwhi, uintpgMZsRh, {from: accounts[3]});
		const boolKaRkInn = await GreenMarkTrustznSHOyH.transferFrom.call(addressSG50jJU, addressJmqGom, uintaJvYAAu, {from: accounts[3]});
		const booldP4g7rl = await GreenMarkTrustznSHOyH.transferFrom.call(addressjviBCTU, addressQuPctWW, uintlvjTdxb, {from: accounts[0]});

		assert.equal(boolzSdzjR, true)
		await expect(GreenMarkTrustznSHOyH.transferFrom.call(addressSG50jJU, addressJmqGom, uintaJvYAAu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintD9WfC2A = BigInt("1049")
		const stringS1jzgJG = "kuEDFDJ26beQTAly"
		const stringlKsPYFn = "CgTMUnNozCqewcKuQlZLqUWPqcDt7fk8bw2iwFY94dm9v5w3qRwzORSnLM6JULsx7fIWFG"
		const GreenMarkTrustznSHOyH = await GreenMarkTrust.new(uintD9WfC2A, stringS1jzgJG, stringlKsPYFn, {from: accounts[3]});
		const uintTtjDdC = BigInt("721")
		const addressVDP2gmg = "0x00000000000000000000000000000000000000-1"
		const addressUZw0NYu = accounts[0]
		const uintUFbHv5I = BigInt("1738")
		const addressNP8zMB = accounts[4]
		const addressutlYlRp = accounts[1]
		const boolKaRkInn = await GreenMarkTrustznSHOyH.transferFrom.call(addressUZw0NYu, addressVDP2gmg, uintTtjDdC, {from: accounts[3]});
		const boolHasIfCP = await GreenMarkTrustznSHOyH.transferFrom.call(addressutlYlRp, addressNP8zMB, uintUFbHv5I, {from: accounts[2]});

		await expect(GreenMarkTrustznSHOyH.transferFrom.call(addressUZw0NYu, addressVDP2gmg, uintTtjDdC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})