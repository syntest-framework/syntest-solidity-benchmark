const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintFMXlOb = BigInt("800")
		const stringYVuu23d = "sNxu10Uce77XPOTL8org9JXyvVnAfWEJtONg53GQXA3yjFYchTJTbDBuL8VdlJ6KWq3YKUSeeP"
		const stringOT1dZzB = "cTrdfbCwSg1B8OANWeEtDX4z"
		const INSsdEAoKY = await INS.new(uintFMXlOb, stringYVuu23d, stringOT1dZzB, {from: accounts[3]});
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
		const boolr7GcTDO = await INSsdEAoKY.approveAndCall.call(addressYoCvlSv, uintHtL3Hfi, byteCinrWeq, {from: accounts[4]});
		const booly8A6GtO = await INSsdEAoKY.transferFrom.call(addresssNBsuK3, addressaMeJ1EW, uintZNkJRwq, {from: accounts[2]});
		const boolBDPjOgJ = await INSsdEAoKY.approveAndCall.call(addressJLUq0xC, uintJXfsQkU, byteCYYHxLf, {from: accounts[4]});
		const boolBlnVca1 = await INSsdEAoKY.approve.call(addressSyvnRVi, uintlemlZMY, {from: accounts[0]});

		await expect(INSsdEAoKY.approveAndCall.call(addressYoCvlSv, uintHtL3Hfi, byteCinrWeq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintwbawwCs = BigInt("1655")
		const stringn7FRAKV = "KjJewquzhyfiw"
		const stringlipQ7Tt = "LYyE7NVSC9oRwj9gHvNmmYOPmQAPgoixQ8ENB1g2"
		const INSS22fRvY = await INS.new(uintwbawwCs, stringn7FRAKV, stringlipQ7Tt, {from: accounts[3]});
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
		const bool2giJyk = await INSS22fRvY.transferFrom.call(addressPGF6y6o, addressveOEk1e, uintaNrPQj4, {from: accounts[3]});
		const boolKRaS6z5 = await INSS22fRvY.transfer.call(addressAXyJH1, uintMPfOj87, {from: accounts[1]});
		const boolnGvJEEx = await INSS22fRvY.transfer.call(addresskIr0u4, uintMnFRxYo, {from: accounts[0]});
		const boolzd4hpHy = await INSS22fRvY.transferFrom.call(addressUxlr30Z, addressje0y8vU, uintYs4vN0, {from: accounts[3]});
		const boolVNQ8S2E = await INSS22fRvY.approve.call(addressTta61Y, uintaPcm2iX, {from: accounts[1]});
		const boolFZDBSN = await INSS22fRvY.transferFrom.call(addressSCovyPs, addressFf9G1Af, uintnl7Qvg1, {from: accounts[4]});

		await expect(INSS22fRvY.transferFrom.call(addressPGF6y6o, addressveOEk1e, uintaNrPQj4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintxXy4Wa = BigInt("1503")
		const string5YpRIp = "Z6EaUXK0B2IzMf8mskHu7NAHoy9CKt59I1S1Q5EF2W31gpMKuFGxWgdVnKa4FnCnjtUfduhBV9fB73mNFgM7y6G1X"
		const stringw0AW7z9 = "p9k6TFhb8nV4RTdXsHIeny7i9QDhVys4HqHoB9wiK6"
		const INSe11pbZz = await INS.new(uintxXy4Wa, string5YpRIp, stringw0AW7z9, {from: accounts[0]});
		const uintgxebhHL = BigInt("1061")
		const addressvFEXFU = accounts[0]
		const byteozgyhNI = "0x0712110d08120b1406141110011618"
		const uintTBqzrIW = BigInt("1483")
		const addresso6syuWa = accounts[1]
		const boolKcOwkZ = await INSe11pbZz.burnFrom.call(addressvFEXFU, uintgxebhHL, {from: accounts[0]});
		const bool9XYmxX = await INSe11pbZz.approveAndCall.call(addresso6syuWa, uintTBqzrIW, byteozgyhNI, {from: accounts[2]});

		await expect(INSe11pbZz.burnFrom.call(addressvFEXFU, uintgxebhHL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintVmzc3lf = BigInt("574")
		const stringAZRb8Gu = "1aAcqS2r6KTmF7wYkUSRMnxH5AgTsBzQK1XVDje2YPcx8YmSp6rcWVcQFh3KeQha1whBIyFcaXKX528eX8badyv"
		const stringifgGBtu = "ZpmRCLqpLhkGy8RGD25sduNLRdtiPGjnMgfx3BkBvZmy8WDVGug5XmpB1LTomYeSv"
		const INSixE8Po3 = await INS.new(uintVmzc3lf, stringAZRb8Gu, stringifgGBtu, {from: "0x0000000000000000000000000000000000000001"});
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
		const boolbMVkf8E = await INSixE8Po3.approveAndCall.call(addressl9ydGR, uintmfB7GZE, byteGvLlR8, {from: accounts[4]});
		const boolEc8ng6t = await INSixE8Po3.transfer.call(addressdEXhIc0, uintiFTNXPO, {from: accounts[3]});
		const boolZkO9Fr = await INSixE8Po3.transferFrom.call(addressqZYCetu, addressBfB9Gxr, uintOM7u5uC, {from: accounts[4]});
		const boolvkHpqQu = await INSixE8Po3.approve.call(addressxeDi6Mv, uintF7MNotS, {from: accounts[3]});
		const boolNT8Yhf6 = await INSixE8Po3.approve.call(addressUXSfz6L, uintpz4GC0, {from: accounts[1]});
	});

	it('test for INS', async () => {
		const uintuEb5Nc = BigInt("1503")
		const string5YpRIp = "Z6EaUXK0B2IzMf8mskHu7NAHoy9CKt59I1S1Q5EF2W31gpMKuFGxWgdVnKa4FnCnjtUfduhBV9fB73mNFgM7y6G1X"
		const stringw0AW7z9 = "p9k6TFhb8nV4RTdXsHIeny7i9QDhVys4HqHoB9wiK6"
		const INSe11pbZz = await INS.new(uintuEb5Nc, string5YpRIp, stringw0AW7z9, {from: accounts[0]});
		const uinteq1rCi3 = BigInt("1226")
		const uintBYp9jA8 = BigInt("1023")
		const addressadcv6q = accounts[2]
		const uinttnt6L1l = BigInt("1061")
		const addresss0YpHR3 = accounts[0]
		const byteIP2CWx = "0x0712110d08120b1406141110011618"
		const uintVSBORw = BigInt("1483")
		const addressT2w2kgF = accounts[1]
		const boolhBrlK2F = await INSe11pbZz.burn.call(uinteq1rCi3, {from: accounts[5]});
		const boolK8TSjzF = await INSe11pbZz.burnFrom.call(addressadcv6q, uintBYp9jA8, {from: accounts[0]});
		const boolKcOwkZ = await INSe11pbZz.burnFrom.call(addresss0YpHR3, uinttnt6L1l, {from: accounts[0]});
		const bool9XYmxX = await INSe11pbZz.approveAndCall.call(addressT2w2kgF, uintVSBORw, byteIP2CWx, {from: accounts[2]});

		await expect(INSe11pbZz.burn.call(uinteq1rCi3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uinte5tt5tw = BigInt("982")
		const stringw9C2E4s = "oj8wGjPzJThg4RjaG8m1JGnfPCvoFqpC0TPz7F6"
		const stringmsXqi3e = "ru1O2yaf2K3YeVn"
		const INSDk7QnYv = await INS.new(uinte5tt5tw, stringw9C2E4s, stringmsXqi3e, {from: accounts[0]});
		const uintWH5L3iV = BigInt("70")
		const addresshEyaPha = accounts[3]
		const uintfvbyhIu = BigInt("1516")
		const address5uwKXH = accounts[3]
		const boolOHqxDa = await INSDk7QnYv.transfer.call(addresshEyaPha, uintWH5L3iV, {from: accounts[3]});
		const boolsvmEOb = await INSDk7QnYv.transfer.call(address5uwKXH, uintfvbyhIu, {from: accounts[1]});

		await expect(INSDk7QnYv.transfer.call(addresshEyaPha, uintWH5L3iV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})