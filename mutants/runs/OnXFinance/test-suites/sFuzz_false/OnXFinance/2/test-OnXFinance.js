const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringxpYQta = "upnTiTtQw0jRUax3p6qLoGXJXERzyX3Af720IeK9dLwr9vOI27Wl29Ay6d8Mv1XeHWSgc5HyoVRLL"
		const stringQFZWf6I = "Y3VKhl8oobhAhqqWsHVj9WkzjZ9uk3CIUqA2BoNiS85ULJHHnrLS5NLWOQrARvzlSGbJFIh1dOmARf2LP"
		const uintSQBnpvg = BigInt("605")
		const OnXFinancempcbVL = await OnXFinance.new(stringxpYQta, stringQFZWf6I, uintSQBnpvg, {from: accounts[4]});
		const uintGyPaej8 = BigInt("1055")
		const addressFEREGPF = accounts[0]
		const addressvQJnP7b = accounts[0]
		const uintHCOqOD9 = BigInt("1621")
		const addressTl4lEVx = accounts[0]
		const boolsA2tXNB = await OnXFinancempcbVL.approve.call(addressFEREGPF, uintGyPaej8, {from: accounts[3]});
		const uintV6k3cpb = await OnXFinancempcbVL.balanceOf.call(addressvQJnP7b, {from: accounts[3]});
		const boolAzyJzJE = await OnXFinancempcbVL.approve.call(addressTl4lEVx, uintHCOqOD9, {from: accounts[1]});
		const uint8tP27BDL = await OnXFinancempcbVL.decimals.call({from: accounts[5]});

		assert.equal(boolAzyJzJE, true)
		assert.equal(boolsA2tXNB, true)
		assert.equal(uint8tP27BDL, BigInt("18"))
		assert.equal(uintV6k3cpb, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringb2SKgtq = "GM1ECGzTRWefne6NJMjbTAKaDouaezphpCbJV18yxkU7w4cC4oVO0RqkbhF982M2o6FiwhJD26d0g6XU37TIl2DXPzHibB"
		const stringW4b4jDG = "9XXJiKy1GyDHzrhfMmxgurxFKWMlgvJlattmJzIuOCapW31GtqWp1gdH4CPnaHzKGVXipACyPWEM4xgD"
		const uintD2q7GFf = BigInt("1424")
		const OnXFinance27bY04 = await OnXFinance.new(stringb2SKgtq, stringW4b4jDG, uintD2q7GFf, {from: "0x0000000000000000000000000000000000000001"});
		const uintZCuDz8x = BigInt("84")
		const addressMedrOOX = accounts[3]
		const uint8FDzaXpN = await OnXFinance27bY04.decimals.call({from: accounts[0]});
		const uintkTAkCg = await OnXFinance27bY04.totalSupply.call({from: accounts[2]});
		const boolMXoeHF8 = await OnXFinance27bY04.approve.call(addressMedrOOX, uintZCuDz8x, {from: accounts[4]});
	});

	it('test for OnXFinance', async () => {
		const stringTyiP53O = "nfjHcVLDI9AL2A93SGKCtxbMwo6Pc4clwkD8Erh3ZJAmqvO29t8oAPWzYVFOL3TKxtHqOAf0TkDI11cono"
		const stringA4ZBhOl = "O2EaFsNZNav44z2eyDTKhwweuldiXRqxX6yrvzu3k9op88lQj"
		const uintDTmsXMY = BigInt("1326")
		const OnXFinanceAEWW82U = await OnXFinance.new(stringTyiP53O, stringA4ZBhOl, uintDTmsXMY, {from: accounts[4]});
		const uintaoUtNz7 = BigInt("582")
		const addressq7N6Bsb = accounts[0]
		const uintZmXxB5 = BigInt("1316")
		const addressXTyc7A2 = accounts[4]
		const uinta5tnQIe = BigInt("1136")
		const addressP9RqM19 = accounts[4]
		const uintx7CmrdZ = BigInt("1036")
		const addressvNXNH9I = accounts[0]
		const uintqkNvoas = BigInt("1737")
		const addressxoMoOlE = accounts[0]
		const boolpMgSY8y = await OnXFinanceAEWW82U.transfer.call(addressq7N6Bsb, uintaoUtNz7, {from: accounts[1]});
		const stringDoZMq5y = await OnXFinanceAEWW82U.name.call({from: accounts[0]});
		const boolkQddunP = await OnXFinanceAEWW82U.approve.call(addressXTyc7A2, uintZmXxB5, {from: accounts[5]});
		const boolYvgJybs = await OnXFinanceAEWW82U.transfer.call(addressP9RqM19, uinta5tnQIe, {from: accounts[3]});
		const boolvlYr8y = await OnXFinanceAEWW82U.decreaseAllowance.call(addressvNXNH9I, uintx7CmrdZ, {from: accounts[0]});
		const boolbyeZjcR = await OnXFinanceAEWW82U.transfer.call(addressxoMoOlE, uintqkNvoas, {from: accounts[2]});

		await expect(OnXFinanceAEWW82U.transfer.call(addressq7N6Bsb, uintaoUtNz7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const string9cHs5V = "TythUB3UxeNSj9ZU8Jy1goIQguVFD7NcBH2KSgLGNhLxCfjzbroqhIhDtU5mw6fRU6ULyBPdHEs0BS"
		const stringhTkbegy = "js3RcNhqRYBQ"
		const uintsmK960F = BigInt("244")
		const OnXFinanceonURtYm = await OnXFinance.new(string9cHs5V, stringhTkbegy, uintsmK960F, {from: accounts[1]});
		const uintGVZzNiF = BigInt("349")
		const addressYwrBodQ = accounts[0]
		const uinteAnVyik = await OnXFinanceonURtYm.totalSupply.call({from: accounts[5]});
		const uintyKTa0Td = await OnXFinanceonURtYm.totalSupply.call({from: accounts[4]});
		const boolTGFRYdP = await OnXFinanceonURtYm.increaseAllowance.call(addressYwrBodQ, uintGVZzNiF, {from: accounts[3]});

		assert.equal(uinteAnVyik, BigInt("244000000000000000000"))
		assert.equal(uintyKTa0Td, BigInt("244000000000000000000"))
		await expect(OnXFinanceonURtYm.increaseAllowance.call(addressYwrBodQ, uintGVZzNiF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringznP5XhQ = "XRAQ1qc9k8k2DRWv5MfciX7D7fhv1CNR7TO4h6DC4fpGR3NRivpVwt2rhq9Q4X"
		const stringwSP2pu = "ThGpcfC4RBXLrynHqY2gBYluu67c6ojFMJ0WieHAGyCenNtMubA8dSAgEmGsADtqL1AnhzReuTVwLp1ViMyv6pe4OlZCKx"
		const uintZ1g3GqA = BigInt("176")
		const OnXFinanceG1Xo40f = await OnXFinance.new(stringznP5XhQ, stringwSP2pu, uintZ1g3GqA, {from: accounts[1]});
		const uintGZciPK = BigInt("1291")
		const addressrffcm89 = accounts[2]
		const uintVvpktSa = BigInt("1809")
		const addressycnXiIc = accounts[5]
		const uintdyINwrL = BigInt("1097")
		const addressuMJAbV = accounts[1]
		const uintc45Qsub = BigInt("1807")
		const addressnkEVCGJ = accounts[3]
		const uintJDxUhfA = BigInt("1110")
		const addressBnrBNXU = accounts[1]
		const boollHog1no = await OnXFinanceG1Xo40f.approveAndCall.call(addressrffcm89, uintGZciPK, {from: accounts[2]});
		const boolngZ5aIv = await OnXFinanceG1Xo40f.transfer.call(addressycnXiIc, uintVvpktSa, {from: accounts[4]});
		const stringg2ieGR = await OnXFinanceG1Xo40f.name.call({from: accounts[5]});
		const boolM1B3vlF = await OnXFinanceG1Xo40f.approve.call(addressuMJAbV, uintdyINwrL, {from: accounts[0]});
		const boolq2BfQo7 = await OnXFinanceG1Xo40f.approveAndCall.call(addressnkEVCGJ, uintc45Qsub, {from: accounts[4]});
		const boolAckayPa = await OnXFinanceG1Xo40f.transfer.call(addressBnrBNXU, uintJDxUhfA, {from: accounts[4]});

		await expect(OnXFinanceG1Xo40f.approveAndCall.call(addressrffcm89, uintGZciPK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringhdPAkMm = "hTUIKFaoIaqJ2F3iOvRkmE74tiJAI3wGIYmQEszH7YDVlfwJHcBu7nREh9J"
		const stringFLi0NNm = "FotPCVJzGNkcQWaQqhkEqcRYE6CJE6dTiFWXfKABpSl1"
		const uintQQm1G2j = BigInt("250")
		const OnXFinanceU3dTVtm = await OnXFinance.new(stringhdPAkMm, stringFLi0NNm, uintQQm1G2j, {from: accounts[3]});
		const addressJEb6u8k = accounts[0]
		const addressGqXeqMu = accounts[0]
		const uintMNlCUrt = BigInt("1988")
		const addressgMve2qQ = accounts[2]
		const addressmcCRBso = accounts[2]
		const uintwFc1z5i = await OnXFinanceU3dTVtm.balanceOf.call(addressJEb6u8k, {from: accounts[0]});
		const boolZ2OuEtN = await OnXFinanceU3dTVtm.transferownership.call(addressGqXeqMu, {from: accounts[3]});
		const stringPbQ5PJb = await OnXFinanceU3dTVtm.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolczZ7W4m = await OnXFinanceU3dTVtm.transferFrom.call(addressmcCRBso, addressgMve2qQ, uintMNlCUrt, {from: accounts[0]});

		assert.equal(boolZ2OuEtN, true)
		assert.equal(stringPbQ5PJb, "FotPCVJzGNkcQWaQqhkEqcRYE6CJE6dTiFWXfKABpSl1")
		assert.equal(uintwFc1z5i, BigInt("0"))
		await expect(OnXFinanceU3dTVtm.transferFrom.call(addressmcCRBso, addressgMve2qQ, uintMNlCUrt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringWfFKYw = "ArY4foXIGcR1gkw6yWaR"
		const stringRZAm1B8 = "udMiZ1hMbzWOmjNapvcObba4SxIQ84CiY4PObiRSGflMndWrNHhS8UXxCgEcm"
		const uintiNniHLP = BigInt("1363")
		const OnXFinancefrfE25v = await OnXFinance.new(stringWfFKYw, stringRZAm1B8, uintiNniHLP, {from: accounts[4]});
		const uintCMWikfg = BigInt("1623")
		const addressyvUQXWh = accounts[4]
		const uintMikHMS9 = BigInt("850")
		const addressbA3udoU = accounts[0]
		const uintDN92d3T = BigInt("1942")
		const addressrOu3qk6 = accounts[0]
		const uintsuSkSTe = BigInt("1121")
		const addressEtKEaZ = accounts[0]
		const uintf5VgyWz = BigInt("167")
		const addressJdXnZUA = accounts[4]
		const boolGk6NNbB = await OnXFinancefrfE25v.transfer.call(addressyvUQXWh, uintCMWikfg, {from: accounts[3]});
		const bool5Fm4VR = await OnXFinancefrfE25v.approve.call(addressbA3udoU, uintMikHMS9, {from: accounts[0]});
		const boolB94djaX = await OnXFinancefrfE25v.approve.call(addressrOu3qk6, uintDN92d3T, {from: accounts[4]});
		const boolbABcJqb = await OnXFinancefrfE25v.transfer.call(addressEtKEaZ, uintsuSkSTe, {from: accounts[2]});
		const booljvNxrOr = await OnXFinancefrfE25v.transfer.call(addressJdXnZUA, uintf5VgyWz, {from: accounts[1]});

		await expect(OnXFinancefrfE25v.transfer.call(addressyvUQXWh, uintCMWikfg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringWfFKYw = "ArY4foXIGcR1gkw6yWaR"
		const stringRZAm1B8 = "udMiZ1hMbzWOmjNapvcObba4SxIQ84CiY4PObiRSGflMndWrNHhS8UXxCgEcm"
		const uinttD2YUBj = BigInt("1363")
		const OnXFinancefrfE25v = await OnXFinance.new(stringWfFKYw, stringRZAm1B8, uinttD2YUBj, {from: accounts[4]});
		const uintBfBQfWn = BigInt("0")
		const addresssjFrNbs = accounts[4]
		const addresszmWTBQX = accounts[5]
		const addressKcWEgVk = accounts[3]
		const uintgEH6B9 = BigInt("535")
		const addressHiS1lmD = accounts[1]
		const addressjYaM7g2 = accounts[0]
		const addressiaR0F0W = accounts[0]
		const boolTBZ5Kla = await OnXFinancefrfE25v.transfer.call(addresssjFrNbs, uintBfBQfWn, {from: accounts[1]});
		const uintRVl84qX = await OnXFinancefrfE25v.allowance.call(addressKcWEgVk, addresszmWTBQX, {from: accounts[3]});
		const boolXvD2y6y = await OnXFinancefrfE25v.approveAndCall.call(addressHiS1lmD, uintgEH6B9, {from: accounts[0]});
		const uintq311Xrj = await OnXFinancefrfE25v.allowance.call(addressiaR0F0W, addressjYaM7g2, {from: accounts[2]});

		assert.equal(boolTBZ5Kla, true)
		assert.equal(uintRVl84qX, BigInt("0"))
		await expect(OnXFinancefrfE25v.approveAndCall.call(addressHiS1lmD, uintgEH6B9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringy2gwZbW = "vpgnaurCzXFWQglqQYpbWLfraP8iEiDxVBgHOVU8N4S6olyTI5IAlVFNbBjJ7erHrOZKQbz87PjuBmLdMhRVZFbYPJL4O"
		const stringjdhoE99 = "qjNSwl53ctC6Fxsj2VbkgJsjH1CV5ra1lcvKq741D9sXIcDaexZYenMb1uZNDlprMM6c3CJxGFxpA9dOc6WC7"
		const uintCSBagO6 = BigInt("245")
		const OnXFinanceWSt8wIh = await OnXFinance.new(stringy2gwZbW, stringjdhoE99, uintCSBagO6, {from: accounts[1]});
		const uintXtXmVl = BigInt("127")
		const addressM0WtGoq = accounts[2]
		const uintJNFbPun = BigInt("676")
		const address9qc2Iv = accounts[3]
		const stringoKCVdq5 = await OnXFinanceWSt8wIh.symbol.call({from: accounts[5]});
		const boolFoGCwAX = await OnXFinanceWSt8wIh.approveAndCall.call(addressM0WtGoq, uintXtXmVl, {from: accounts[1]});
		const booln4vIT7O = await OnXFinanceWSt8wIh.transfer.call(address9qc2Iv, uintJNFbPun, {from: accounts[4]});
		const uint9kQroZ = await OnXFinanceWSt8wIh.totalSupply.call({from: accounts[3]});

		assert.equal(boolFoGCwAX, true)
		assert.equal(stringoKCVdq5, "qjNSwl53ctC6Fxsj2VbkgJsjH1CV5ra1lcvKq741D9sXIcDaexZYenMb1uZNDlprMM6c3CJxGFxpA9dOc6WC7")
		await expect(OnXFinanceWSt8wIh.transfer.call(address9qc2Iv, uintJNFbPun, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringy2gwZbW = "vpgnaurCzXFWQglqQYpbWLfraP8iEiDxVBgHOVU8N4S6olyTI5IAlVFNbBjJ7erHrOZKQbz87PjuBmLdMhRVZFbYPJL4O"
		const stringjdhoE99 = "qjNSwl53ctC6Fxsj2VbkgJsjH1CV5ra1lcvKq741D9sXIcDaexZYenMb1uZNDlprMM6c3CJxGFxpA9dOc6WC7"
		const uintDByMmzU = BigInt("245")
		const OnXFinanceWSt8wIh = await OnXFinance.new(stringy2gwZbW, stringjdhoE99, uintDByMmzU, {from: accounts[1]});
		const uintK6EuGKE = BigInt("332")
		const addresstE8gv3I = accounts[5]
		const uintqW4Lkur = BigInt("0")
		const addresskBl1AcT = accounts[2]
		const boolBVh9PK8 = await OnXFinanceWSt8wIh.approve.call(addresstE8gv3I, uintK6EuGKE, {from: accounts[5]});
		const boolFoGCwAX = await OnXFinanceWSt8wIh.approveAndCall.call(addresskBl1AcT, uintqW4Lkur, {from: accounts[1]});

		assert.equal(boolBVh9PK8, true)
		assert.equal(boolFoGCwAX, true)
	});
})