const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringJtrymEC = "Jp874KLqfGkeFJ6sP8xIQ2E9ypTFFIkfB7Wi2NlybXfaKyef6iQE3D0OLbbo1MtParvSMfk8gXViokiEwLVqAMHu7WcnCoAxi"
		const stringdsZWwQZ = "IrT351OaBFOdswaC3mMTM3dkG"
		const uintVvLaeZJ = BigInt("979")
		const FinalqA3hPMg = await Final.new(stringJtrymEC, stringdsZWwQZ, uintVvLaeZJ, {from: accounts[1]});
		const uintGe3eK3e = BigInt("223")
		const addressCnryR8 = accounts[3]
		const boolUFTxPtI = await FinalqA3hPMg.approve.call(addressCnryR8, uintGe3eK3e, {from: accounts[4]});
		const stringT09JavS = await FinalqA3hPMg.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8aBK3Jk4 = await FinalqA3hPMg.decimals.call({from: accounts[4]});

		assert.equal(boolUFTxPtI, true)
		assert.equal(stringT09JavS, "Jp874KLqfGkeFJ6sP8xIQ2E9ypTFFIkfB7Wi2NlybXfaKyef6iQE3D0OLbbo1MtParvSMfk8gXViokiEwLVqAMHu7WcnCoAxi")
		assert.equal(uint8aBK3Jk4, BigInt("18"))
	});

	it('test for Final', async () => {
		const stringDMRg6H = "E5lyF8by6D1QWM4upJmUJGMdU20STaVN6kFVtaVKUPQPnRYjEaEVFYHsQmnnkJ"
		const stringzWlih4R = "o2DREdgNMbDrFv44GBvoTALKggW998g6LEhRAuuUbCkbN88AKpcULgh4fA9siXBaugWIn3CBXWVR"
		const uintENeQwMA = BigInt("1492")
		const FinalqBNw30y = await Final.new(stringDMRg6H, stringzWlih4R, uintENeQwMA, {from: accounts[1]});
		const addressDzfEDKz = accounts[1]
		const addressjnjkkav = "0x0000000000000000000000000000000000000001"
		const uintAxSsUj = BigInt("539")
		const addressdtilHwq = accounts[0]
		const uintQe6Hn0u = BigInt("918")
		const addresso7Wnc10 = accounts[3]
		const uintmDbPU3G = BigInt("896")
		const addresslkYfbVU = "0x0000000000000000000000000000000000000001"
		const uintw4Kvk5 = BigInt("1746")
		const addressKT46oj8 = accounts[0]
		const uintZO9dVtg = await FinalqBNw30y.allowance.call(addressjnjkkav, addressDzfEDKz, {from: accounts[1]});
//		const boolTMGNy1r = await FinalqBNw30y.decreaseAllowance.call(addressdtilHwq, uintAxSsUj, {from: accounts[1]});
//		const boolWCRxl8K = await FinalqBNw30y.transfer.call(addresso7Wnc10, uintQe6Hn0u, {from: accounts[4]});
//		const stringqlqmJLj = await FinalqBNw30y.symbol.call({from: accounts[5]});
//		const boolGkmOk8 = await FinalqBNw30y.approve.call(addresslkYfbVU, uintmDbPU3G, {from: accounts[3]});
//		const boollnO6E7I = await FinalqBNw30y.approve.call(addressKT46oj8, uintw4Kvk5, {from: accounts[1]});

		assert.equal(uintZO9dVtg, BigInt("0"))
		await expect(FinalqBNw30y.decreaseAllowance.call(addressdtilHwq, uintAxSsUj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringkps6GKT = "7EGL9eG91NWH9Qvyb8VURhRlqmvgWG5WxROZUU1oign4yzEhXUZ2NfdRFafPEnaqmj571nycOH1r5FDWku1Gryb4EwWAWzJ"
		const stringfCvkbp = "57MIYW6BWnmM53J3b7F"
		const uint6CEl8J = BigInt("2005")
		const FinalSXKrEy3 = await Final.new(stringkps6GKT, stringfCvkbp, uint6CEl8J, {from: "0x0000000000000000000000000000000000000001"});
		const uintPP9GeLQ = BigInt("1050")
		const addressICOO6bj = accounts[2]
		const boolCXygBrE = await FinalSXKrEy3.transfer.call(addressICOO6bj, uintPP9GeLQ, {from: accounts[0]});
		const uint8ZTeWVWo = await FinalSXKrEy3.decimals.call({from: accounts[0]});
	});

	it('test for Final', async () => {
		const stringVIiIsK = "M"
		const stringNB0OXLe = "WElCP4EOs9FNIjwau"
		const uintJKbdOz0 = BigInt("1532")
		const FinalcInG19b = await Final.new(stringVIiIsK, stringNB0OXLe, uintJKbdOz0, {from: accounts[3]});
		const uintgm535LP = BigInt("192")
		const addressUJdJNHN = accounts[3]
		const uintUnEKLI = await FinalcInG19b.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolkRmStWC = await FinalcInG19b.approveAndCall.call(addressUJdJNHN, uintgm535LP, {from: accounts[2]});
//		const uint8v6fPN0g = await FinalcInG19b.decimals.call({from: accounts[3]});

		assert.equal(uintUnEKLI, BigInt("1532000000000000000000"))
		await expect(FinalcInG19b.approveAndCall.call(addressUJdJNHN, uintgm535LP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const string3oq15O = "Tboxp84VFtvGILTzIGfe5R5iKjDAvbnQI3Mqd3Qx71A"
		const stringYPPOd01 = "drVOQPbrCY1ryBzr"
		const uintce77pse = BigInt("1256")
		const FinaljDTB5v = await Final.new(string3oq15O, stringYPPOd01, uintce77pse, {from: accounts[1]});
		const uintnsOO9OH = BigInt("1942")
		const addressoqmdbXI = accounts[5]
		const uintkrvhhq8 = BigInt("411")
		const addressCklTGCu = "0x0000000000000000000000000000000000000001"
		const uintDnbvMJP = BigInt("1167")
		const addressT4pMLe5 = accounts[1]
		const uintAhIJ3tO = BigInt("64")
		const addresspZE6UK = accounts[3]
		const uintaUyGp6L = BigInt("1928")
		const addresswMydxwN = accounts[1]
		const uint8e6iL5Lu = await FinaljDTB5v.decimals.call({from: accounts[0]});
//		const boolZR6gS4a = await FinaljDTB5v.transfer.call(addressoqmdbXI, uintnsOO9OH, {from: accounts[0]});
//		const boolxpiWBYl = await FinaljDTB5v.increaseAllowance.call(addressCklTGCu, uintkrvhhq8, {from: accounts[4]});
//		const boolEvIm1gY = await FinaljDTB5v.approve.call(addressT4pMLe5, uintDnbvMJP, {from: accounts[3]});
//		const boolxP1I3wM = await FinaljDTB5v.increaseAllowance.call(addresspZE6UK, uintAhIJ3tO, {from: accounts[0]});
//		const boolbOfPMV = await FinaljDTB5v.approve.call(addresswMydxwN, uintaUyGp6L, {from: accounts[0]});

		assert.equal(uint8e6iL5Lu, BigInt("18"))
		await expect(FinaljDTB5v.transfer.call(addressoqmdbXI, uintnsOO9OH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringDEQ01gG = "i1IJb6GLFV9K8SoyE52BysBPXIrQVmmzd8BfSf"
		const stringsmAmHS = "ZDqAjFoV4zxXltZNZ3NlY1TVmwt8gp42Hz9TaGcqjn0tmTGeJd7V0bDHFSWHaKAG1NnJ"
		const uintC9nApS = BigInt("331")
		const FinalWbdl2uu = await Final.new(stringDEQ01gG, stringsmAmHS, uintC9nApS, {from: accounts[1]});
		const addressQZLZQDm = accounts[1]
		const addressvoD5VMF = accounts[3]
		const addressPYJ1A48 = accounts[3]
		const uintvdmUZVM = await FinalWbdl2uu.totalSupply.call({from: accounts[2]});
//		const boolcm82Cj7 = await FinalWbdl2uu.transferownership.call(addressQZLZQDm, {from: "0x0000000000000000000000000000000000000001"});
//		const uintoTVJWMu = await FinalWbdl2uu.balanceOf.call(addressvoD5VMF, {from: accounts[2]});
//		const uintq6sSdqP = await FinalWbdl2uu.balanceOf.call(addressPYJ1A48, {from: accounts[3]});

		assert.equal(uintvdmUZVM, BigInt("331000000000000000000"))
		await expect(FinalWbdl2uu.transferownership.call(addressQZLZQDm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringDEQ01gG = "i1IJb6GLFV9K8SoyE52BysBPXIrQVmmzd8BfSf"
		const stringsmAmHS = "ZDqAjFoV4zxXltZNZ3NlY1TVmwt8gp42Hz9TaGcqjn0tmTGeJd7V0bDHFSWHaKAG1NnJ"
		const uintEFRNTr = BigInt("331")
		const FinalWbdl2uu = await Final.new(stringDEQ01gG, stringsmAmHS, uintEFRNTr, {from: accounts[1]});
		const uintUFWdCTu = BigInt("1843")
		const addressHy5Wmr5 = accounts[1]
		const uintt5UneUm = BigInt("1160")
		const addressFTJVMoN = accounts[3]
		const addresskeq22hu = accounts[3]
		const uintjt7To6t = BigInt("649")
		const addressy88RRn = accounts[5]
		const addresscBXolao = accounts[4]
		const uintvdmUZVM = await FinalWbdl2uu.totalSupply.call({from: accounts[2]});
//		const boolfl8RV0W = await FinalWbdl2uu.transfer.call(addressHy5Wmr5, uintUFWdCTu, {from: accounts[0]});
//		const boolO10lnZF = await FinalWbdl2uu.transfer.call(addressFTJVMoN, uintt5UneUm, {from: accounts[0]});
//		const uintoTVJWMu = await FinalWbdl2uu.balanceOf.call(addresskeq22hu, {from: accounts[2]});
//		const uint8lnD4h6X = await FinalWbdl2uu.decimals.call({from: accounts[2]});
//		const boolVKqUqfN = await FinalWbdl2uu.approve.call(addressy88RRn, uintjt7To6t, {from: accounts[3]});
//		const uintq6sSdqP = await FinalWbdl2uu.balanceOf.call(addresscBXolao, {from: accounts[3]});

		assert.equal(uintvdmUZVM, BigInt("331000000000000000000"))
		await expect(FinalWbdl2uu.transfer.call(addressHy5Wmr5, uintUFWdCTu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringSSZPpO9 = "qHtUL3y8n7RtBXszqBxGKKBFhIEg"
		const string8HHMEf = "x8S91"
		const uintQtdgu2E = BigInt("175")
		const FinalZyXqoNC = await Final.new(stringSSZPpO9, string8HHMEf, uintQtdgu2E, {from: accounts[5]});
		const uintYzc8ePY = BigInt("50")
		const addresswJVijqe = "0x00000000000000000000000000000000000000-1"
		const uintFfuXO27 = BigInt("259")
		const addresspRiRoNe = accounts[2]
//		const booliM1YMcE = await FinalZyXqoNC.transfer.call(addresswJVijqe, uintYzc8ePY, {from: accounts[2]});
//		const boolxU0uhd3 = await FinalZyXqoNC.decreaseAllowance.call(addresspRiRoNe, uintFfuXO27, {from: accounts[0]});

		await expect(FinalZyXqoNC.transfer.call(addresswJVijqe, uintYzc8ePY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringSSZPpO9 = "qHtUL3y8n7RtBXszqBxGKKBFhIEg"
		const string8HHMEf = "x8S91"
		const uintLn2MVfR = BigInt("175")
		const FinalZyXqoNC = await Final.new(stringSSZPpO9, string8HHMEf, uintLn2MVfR, {from: accounts[5]});
		const uintDx1ImgP = BigInt("0")
		const addressDOei85F = "0x0000000000000000000000000000000000000000"
		const addressLKJvCl0 = accounts[3]
		const uintubRgJP = BigInt("657")
		const addressNiILX5H = accounts[4]
		const booliM1YMcE = await FinalZyXqoNC.transfer.call(addressDOei85F, uintDx1ImgP, {from: accounts[2]});
		const uints1ezUnR = await FinalZyXqoNC.balanceOf.call(addressLKJvCl0, {from: accounts[5]});
		const stringlqYqXq = await FinalZyXqoNC.symbol.call({from: accounts[2]});
//		const boolszr6UXP = await FinalZyXqoNC.transfer.call(addressNiILX5H, uintubRgJP, {from: accounts[1]});
//		const stringak2Uv7l = await FinalZyXqoNC.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booliM1YMcE, true)
		assert.equal(stringlqYqXq, "x8S91")
		assert.equal(uints1ezUnR, BigInt("0"))
		await expect(FinalZyXqoNC.transfer.call(addressNiILX5H, uintubRgJP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringge7C8zO = "hCTcADzPAzNcrqKFDTKGONWNI48KJR64Ju"
		const stringhoFz5nW = "XT2oL7RtpZy4VpyX"
		const uinty1NPADN = BigInt("175")
		const FinalFAgtyy9 = await Final.new(stringge7C8zO, stringhoFz5nW, uinty1NPADN, {from: accounts[2]});
		const addressz6TmB6j = "0x0000000000000000000000000000000000000001"
		const addressboAclNF = accounts[3]
		const uintGCB4LTR = BigInt("1936")
		const addresslhKf53n = accounts[1]
		const uintkVdt6hf = BigInt("455")
		const addressDSSSzK = accounts[0]
		const uint4onLGs = await FinalFAgtyy9.allowance.call(addressboAclNF, addressz6TmB6j, {from: "0x0000000000000000000000000000000000000001"});
		const boolN2MQvT6 = await FinalFAgtyy9.approve.call(addresslhKf53n, uintGCB4LTR, {from: accounts[1]});
		const boole6HKSM9 = await FinalFAgtyy9.approveAndCall.call(addressDSSSzK, uintkVdt6hf, {from: accounts[2]});
		const uint82PwwvV = await FinalFAgtyy9.decimals.call({from: accounts[4]});

		assert.equal(boolN2MQvT6, true)
		assert.equal(boole6HKSM9, true)
		assert.equal(uint4onLGs, BigInt("0"))
		assert.equal(uint82PwwvV, BigInt("18"))
	});
})