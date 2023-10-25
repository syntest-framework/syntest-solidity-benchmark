const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintV6JE4QH = BigInt("148")
		const stringhTrulob = "e8MgUDiCxeNqqP2mJId6q8KFT3nOvHPYdxB5vB3RZOodPPZGQV24h5yB6qltIN3rLfi"
		const stringJoF6lfR = "6VcdmFM56v"
		const uintCfdOeUc = BigInt("1088")
		const ANRXTokenNSzvFFh = await ANRXToken.new(uintV6JE4QH, stringhTrulob, stringJoF6lfR, uintCfdOeUc, {from: accounts[4]});
		const uintWFm5FBv = BigInt("416")
		const addressvcEPhhm = accounts[1]
		const uintigpSYEs = BigInt("1150")
		const addressypgFNp = accounts[1]
		const uintDW30dgG = BigInt("1665")
//		const uintja0eq2X = await ANRXTokenNSzvFFh.redeem.call(uintWFm5FBv, {from: accounts[3]});
//		const addressx0k706V = await ANRXTokenNSzvFFh.deprecate.call(addressvcEPhhm, {from: accounts[5]});
//		const boolVkpYaYr = await ANRXTokenNSzvFFh.approve.call(addressypgFNp, uintigpSYEs, {from: accounts[0]});
//		const uintyYfcUfP = await ANRXTokenNSzvFFh.redeem.call(uintDW30dgG, {from: accounts[4]});

		await expect(ANRXTokenNSzvFFh.redeem.call(uintWFm5FBv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintolRksTs = BigInt("1213")
		const stringr6zdapI = "zR7MI7ErVlcTejENVizEgZxo9PVngu9X6aNcnKGhFz2soCyGYIePI8HjqluscrJMua3hLf4QpIiDxbKLShn7tbKQxt1T"
		const stringeHEeM6N = "79S1wyeQt0pOGkm8vroojJrCUSK"
		const uintTAZxnyo = BigInt("952")
		const ANRXTokenER5QyiK = await ANRXToken.new(uintolRksTs, stringr6zdapI, stringeHEeM6N, uintTAZxnyo, {from: accounts[1]});
		const address8Ls024 = accounts[3]
		const addressFcVcMSz = accounts[0]
		const addressp5v1ZB = accounts[0]
		const uintdDyqMhN = await ANRXTokenER5QyiK.totalSupply.call({from: accounts[0]});
//		const addresslZlV61y = await ANRXTokenER5QyiK.deprecate.call(address8Ls024, {from: accounts[4]});
//		const uintjzvn0X8 = await ANRXTokenER5QyiK.totalSupply.call({from: accounts[2]});
//		const uintOyFYbDN = await ANRXTokenER5QyiK.balanceOf.call(addressFcVcMSz, {from: accounts[5]});
//		const uintnPDgIg1 = await ANRXTokenER5QyiK.balanceOf.call(addressp5v1ZB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintdDyqMhN, BigInt("1213"))
		await expect(ANRXTokenER5QyiK.deprecate.call(address8Ls024, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintg3VQINS = BigInt("618")
		const stringOyuILl = "pwiUwhzcykKTf52lqajmJTZsBC2ef5E5TXdAUWOBIuYLdSTJgpTia6"
		const stringxEteYMc = "V3q"
		const uintljV9F3s = BigInt("272")
		const ANRXTokenWHQ8KyD = await ANRXToken.new(uintg3VQINS, stringOyuILl, stringxEteYMc, uintljV9F3s, {from: accounts[4]});
		const addressk0mx7Q6 = accounts[4]
		const addressaNJDQSF = accounts[4]
		const uintmkREdSG = BigInt("1792")
		const addresstyX4NgI = accounts[4]
		const uintQgvC0J8 = await ANRXTokenWHQ8KyD.allowance.call(addressaNJDQSF, addressk0mx7Q6, {from: accounts[5]});
		const boolwJmwnCS = await ANRXTokenWHQ8KyD.approve.call(addresstyX4NgI, uintmkREdSG, {from: accounts[0]});

		assert.equal(boolwJmwnCS, true)
		assert.equal(uintQgvC0J8, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintdsjCWk0 = BigInt("1355")
		const stringppdjx5 = "wRIYyBtD46pucn253sW9uPCVjblqKZYB"
		const stringlifCgEw = "RyZVBKSPujW5kixFB6y9ptrbBryXoOR6VIIbel1ojz7NqGl1hLAEqJAyEyV3kv56jqG"
		const uintjN4jBiC = BigInt("1315")
		const ANRXTokenzA7R4td = await ANRXToken.new(uintdsjCWk0, stringppdjx5, stringlifCgEw, uintjN4jBiC, {from: accounts[4]});
		const addressMSBzxwF = accounts[4]
		const uintCaxX8E1 = BigInt("282")
		const addressuJU9tvP = accounts[5]
		const addressvocraZ = accounts[2]
		const addressUUznILj = accounts[3]
		const uintqef5uG7 = BigInt("808")
		const addressvy0WNY = accounts[0]
		const addressX1EmSww = accounts[1]
		const addressi7a3vxQ = accounts[3]
		const uintpVz0h6S = await ANRXTokenzA7R4td.balanceOf.call(addressMSBzxwF, {from: accounts[3]});
//		const boolwWsy38k = await ANRXTokenzA7R4td.transferFrom.call(addressvocraZ, addressuJU9tvP, uintCaxX8E1, {from: "0x0000000000000000000000000000000000000001"});
//		const addressOL8MoFN = await ANRXTokenzA7R4td.deprecate.call(addressUUznILj, {from: accounts[2]});
//		const boolAKX5Zxy = await ANRXTokenzA7R4td.transferFrom.call(addressX1EmSww, addressvy0WNY, uintqef5uG7, {from: accounts[2]});
//		const addresslnkdi1z = await ANRXTokenzA7R4td.deprecate.call(addressi7a3vxQ, {from: accounts[4]});

		assert.equal(uintpVz0h6S, BigInt("1355"))
		await expect(ANRXTokenzA7R4td.transferFrom.call(addressvocraZ, addressuJU9tvP, uintCaxX8E1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintYeHVPb1 = BigInt("1008")
		const stringdRAWou = "oQDujX8i5PcmcabcIhn69altlf8YPOnG3AFofLoxwVwFXpUfnl"
		const stringMvcaiM6 = "9Czcf7R9JSJJt2w4i7gw2XxApyU77lizLaQguEa4tKBguJMlXEYc2AQbfW2ybsIaSwlXQ2wt"
		const uintV72IH5 = BigInt("916")
		const ANRXTokenmufZ9cY = await ANRXToken.new(uintYeHVPb1, stringdRAWou, stringMvcaiM6, uintV72IH5, {from: "0x0000000000000000000000000000000000000001"});
		const uintm3aXy9l = BigInt("1891")
		const addresslShdqu = "0x0000000000000000000000000000000000000001"
		const uintkls4w4V = BigInt("17")
		const addressl2TRNj1 = accounts[2]
		const uint1xzKif = BigInt("100")
		const uintXU4WwZh = BigInt("1599")
		const uintDsUAVkv = await ANRXTokenmufZ9cY.issue.call(uintm3aXy9l, {from: accounts[5]});
		const uintLbTMNL = await ANRXTokenmufZ9cY.balanceOf.call(addresslShdqu, {from: "0x0000000000000000000000000000000000000001"});
		const boolhH4cKH5 = await ANRXTokenmufZ9cY.approve.call(addressl2TRNj1, uintkls4w4V, {from: accounts[2]});
		const uintVdGkJIy = await ANRXTokenmufZ9cY.setParams.call(uintXU4WwZh, uint1xzKif, {from: accounts[2]});
	});

	it('test for ANRXToken', async () => {
		const uint2125nA = BigInt("1251")
		const stringm8PuoZh = "hKmJszMRzaqkMR2AFEHDGNd36Q91Q8L7xwEYN8BAjaMxen7fqp4u3HTzynuPDRoNMRdZGFQEOpHdS86s"
		const stringUs9jrTs = "19HM0K1KhCZc9QZ8gI"
		const uintCy6GKJS = BigInt("441")
		const ANRXTokeniSBvYkI = await ANRXToken.new(uint2125nA, stringm8PuoZh, stringUs9jrTs, uintCy6GKJS, {from: accounts[0]});
		const uintr2hp0o9 = BigInt("1487")
		const addressben3Mc2 = accounts[0]
		const uint3YIRCc = BigInt("1947")
		const uintllW4agC = BigInt("1242")
		const uintPiytEqY = BigInt("869")
		const uintK710ko = BigInt("1003")
//		const boolB4YBfOg = await ANRXTokeniSBvYkI.transfer.call(addressben3Mc2, uintr2hp0o9, {from: accounts[3]});
//		const uintX9msG8S = await ANRXTokeniSBvYkI.setParams.call(uintllW4agC, uint3YIRCc, {from: accounts[1]});
//		const uintXqFvEHs = await ANRXTokeniSBvYkI.setParams.call(uintK710ko, uintPiytEqY, {from: accounts[4]});

		await expect(ANRXTokeniSBvYkI.transfer.call(addressben3Mc2, uintr2hp0o9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintZHMQSYu = BigInt("1355")
		const stringppdjx5 = "wRIYyBtD46pucn253sW9uPCVjblqKZYB"
		const stringlifCgEw = "RyZVBKSPujW5kixFB6y9ptrbBryXoOR6VIIbel1ojz7NqGl1hLAEqJAyEyV3kv56jqG"
		const uintYNYkl14 = BigInt("1315")
		const ANRXTokenzA7R4td = await ANRXToken.new(uintZHMQSYu, stringppdjx5, stringlifCgEw, uintYNYkl14, {from: accounts[4]});
		const address2NCgEV = accounts[5]
		const addressMZP0VQ6 = "0x0000000000000000000000000000000000000001"
		const uintWCgmYDR = BigInt("1592")
		const uintMKNFBWY = BigInt("282")
		const addressqKaSvp3 = accounts[5]
		const addressoHsDdVN = accounts[2]
		const addressWzmSlnp = accounts[3]
		const uintGHmvy31 = BigInt("808")
		const addresse97qq7c = accounts[0]
		const addressgwFaN9U = accounts[1]
		const addressY1aA9m = accounts[3]
		const uintpVz0h6S = await ANRXTokenzA7R4td.balanceOf.call(address2NCgEV, {from: accounts[3]});
		const addresskvbqvja = await ANRXTokenzA7R4td.deprecate.call(addressMZP0VQ6, {from: accounts[4]});
//		const uintGMyftXl = await ANRXTokenzA7R4td.redeem.call(uintWCgmYDR, {from: accounts[3]});
//		const boolwWsy38k = await ANRXTokenzA7R4td.transferFrom.call(addressoHsDdVN, addressqKaSvp3, uintMKNFBWY, {from: "0x0000000000000000000000000000000000000001"});
//		const addressOL8MoFN = await ANRXTokenzA7R4td.deprecate.call(addressWzmSlnp, {from: accounts[2]});
//		const boolAKX5Zxy = await ANRXTokenzA7R4td.transferFrom.call(addressgwFaN9U, addresse97qq7c, uintGHmvy31, {from: accounts[2]});
//		const addresslnkdi1z = await ANRXTokenzA7R4td.deprecate.call(addressY1aA9m, {from: accounts[4]});

		assert.equal(uintpVz0h6S, BigInt("0"))
		await expect(ANRXTokenzA7R4td.redeem.call(uintWCgmYDR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintnypFlnt = BigInt("184")
		const stringEA3rcRa = "yzfrj5wxTnhcnOgl0hewOGK"
		const stringgKpoFWI = "4vO9ah"
		const uintiP7eG0A = BigInt("198")
		const ANRXTokenPkxTR5 = await ANRXToken.new(uintnypFlnt, stringEA3rcRa, stringgKpoFWI, uintiP7eG0A, {from: accounts[1]});
		const addressQBdndr = accounts[3]
		const uintXMueEjx = BigInt("884")
		const addressXOiqEvd = accounts[0]
		const uintcK62nQz = BigInt("508")
		const uintVzqJXc = await ANRXTokenPkxTR5.balanceOf.call(addressQBdndr, {from: accounts[0]});
//		const uintJqg9DV0 = await ANRXTokenPkxTR5.redeem.call(uintXMueEjx, {from: accounts[1]});
//		const uintxpL5Ns7 = await ANRXTokenPkxTR5.balanceOf.call(addressXOiqEvd, {from: accounts[5]});
//		const uintuudU4af = await ANRXTokenPkxTR5.redeem.call(uintcK62nQz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintVzqJXc, BigInt("0"))
		await expect(ANRXTokenPkxTR5.redeem.call(uintXMueEjx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintbvW7u57 = BigInt("618")
		const stringOyuILl = "pwiUwhzcykKTf52lqajmJTZsBC2ef5E5TXdAUWOBIuYLdSTJgpTia6"
		const stringxEteYMc = "V3q"
		const uintn2Wrajj = BigInt("272")
		const ANRXTokenWHQ8KyD = await ANRXToken.new(uintbvW7u57, stringOyuILl, stringxEteYMc, uintn2Wrajj, {from: accounts[4]});
		const addressCJ0XZXr = accounts[4]
		const addressu62YSQ = accounts[4]
		const addressDUGjcxc = "0x0000000000000000000000000000000000000001"
		const uintXyNDYZ0 = BigInt("1801")
		const addressvyIt9Oy = accounts[4]
		const uintYpIMhd = BigInt("481")
		const uintvgWJeEF = BigInt("1869")
		const uintQgvC0J8 = await ANRXTokenWHQ8KyD.allowance.call(addressu62YSQ, addressCJ0XZXr, {from: accounts[5]});
		const uintc0wAY4X = await ANRXTokenWHQ8KyD.balanceOf.call(addressDUGjcxc, {from: accounts[0]});
		const boolwJmwnCS = await ANRXTokenWHQ8KyD.approve.call(addressvyIt9Oy, uintXyNDYZ0, {from: accounts[0]});
//		const uintq9WkJpf = await ANRXTokenWHQ8KyD.setParams.call(uintvgWJeEF, uintYpIMhd, {from: accounts[4]});

		assert.equal(boolwJmwnCS, true)
		assert.equal(uintQgvC0J8, BigInt("0"))
		assert.equal(uintc0wAY4X, BigInt("0"))
		await expect(ANRXTokenWHQ8KyD.setParams.call(uintvgWJeEF, uintYpIMhd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintVyrDhLN = BigInt("618")
		const stringOyuILl = "pwiUwhzcykKTf52lqajmJTZsBC2ef5E5TXdAUWOBIuYLdSTJgpTia6"
		const stringxEteYMc = "V3q"
		const uintf8LG3jg = BigInt("272")
		const ANRXTokenWHQ8KyD = await ANRXToken.new(uintVyrDhLN, stringOyuILl, stringxEteYMc, uintf8LG3jg, {from: accounts[4]});
		const uintlIxWaxp = BigInt("38")
		const addressUpizox = accounts[5]
		const addresszTYt5Gp = accounts[4]
		const uinto7vD1uj = await ANRXTokenWHQ8KyD.totalSupply.call({from: accounts[3]});
		const uintHmrKqSD = await ANRXTokenWHQ8KyD.issue.call(uintlIxWaxp, {from: accounts[4]});
		const uintQgvC0J8 = await ANRXTokenWHQ8KyD.allowance.call(addresszTYt5Gp, addressUpizox, {from: accounts[5]});

		assert.equal(uintQgvC0J8, BigInt("0"))
		assert.equal(uinto7vD1uj, BigInt("618"))
	});
})