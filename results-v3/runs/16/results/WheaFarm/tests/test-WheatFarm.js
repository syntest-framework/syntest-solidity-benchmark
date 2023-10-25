const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringox90Ad = "q6PPgVeR7ilqKg4RiCXWrhydrEGJSioCuZExiAGXWE88ASjfJ7DcoZNfsckqYGvXfCLMxedJSkyEJZzXXAf6Am"
		const stringlNFGN7 = "wPpQB9rB900e15KMiMxKpUiseht6ea7ST5maarUao27r6cz5Cfpg1xZB64H"
		const uintisWmKT = BigInt("1614")
		const WheatFarmHhciYQr = await WheatFarm.new(stringox90Ad, stringlNFGN7, uintisWmKT, {from: accounts[1]});
		const addresszTWedPx = "0x0000000000000000000000000000000000000001"
		const addressTb5KIFB = accounts[3]
		const addressDN81VWA = accounts[1]
		const addressqojev6C = accounts[2]
		const uintIVWPePp = await WheatFarmHhciYQr.allowance.call(addressTb5KIFB, addresszTWedPx, {from: accounts[3]});
		const uint8GoGcO7T = await WheatFarmHhciYQr.decimals.call({from: accounts[3]});
		const stringbjD9Owi = await WheatFarmHhciYQr.symbol.call({from: accounts[2]});
		const uintQvdU0qh = await WheatFarmHhciYQr.allowance.call(addressqojev6C, addressDN81VWA, {from: accounts[1]});
		const uint8C3bQwFd = await WheatFarmHhciYQr.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringbjD9Owi, "wPpQB9rB900e15KMiMxKpUiseht6ea7ST5maarUao27r6cz5Cfpg1xZB64H")
		assert.equal(uint8C3bQwFd, BigInt("18"))
		assert.equal(uint8GoGcO7T, BigInt("18"))
		assert.equal(uintIVWPePp, BigInt("0"))
		assert.equal(uintQvdU0qh, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const stringGlMcvb0 = "RaaGDAWpLrJf9ElE1emAQWDvHSaCYaJg1PfrFCAOA0fHVKYH59p71UUBtQY4SVzH6u2Oz"
		const stringLB5S1Tc = "ChUr43FS0hWV5JPJboXeQUpDOXwXG1YUgQqSrzENDBV5vP7BkSbQoiAERQZ"
		const uintAnzCXc4 = BigInt("1963")
		const WheatFarmnALL9ht = await WheatFarm.new(stringGlMcvb0, stringLB5S1Tc, uintAnzCXc4, {from: accounts[2]});
		const uintoHgKd4X = BigInt("2029")
		const addressdCjNAKO = accounts[3]
		const uintibrhSOS = BigInt("1655")
		const addresssgwhF2b = accounts[0]
		const uintTfdW4Xh = BigInt("2006")
		const addressejuaEXh = accounts[0]
		const addressgSFVBt = accounts[4]
		const uintUsMw0Ij = BigInt("468")
		const addressP7DECr8 = accounts[3]
		const boolxrDljB = await WheatFarmnALL9ht.transfer.call(addressdCjNAKO, uintoHgKd4X, {from: accounts[1]});
		const boolsj0V5Na = await WheatFarmnALL9ht.approve.call(addresssgwhF2b, uintibrhSOS, {from: accounts[5]});
		const boolDaRsiri = await WheatFarmnALL9ht.transferFrom.call(addressgSFVBt, addressejuaEXh, uintTfdW4Xh, {from: accounts[3]});
		const boolbAUtBEH = await WheatFarmnALL9ht.approveAndCall.call(addressP7DECr8, uintUsMw0Ij, {from: accounts[2]});

		await expect(WheatFarmnALL9ht.transfer.call(addressdCjNAKO, uintoHgKd4X, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringrPxo2PU = "ww4TgGW1La9jjeRVpLBlGUwZKUAuV0Bmb24Bl45Ob"
		const stringYxZddt7 = "bsnyHROMKZCCrKyhobF"
		const uintg6e3Sc = BigInt("1221")
		const WheatFarmNcxX56R = await WheatFarm.new(stringrPxo2PU, stringYxZddt7, uintg6e3Sc, {from: accounts[2]});
		const uintXFWs8Mx = BigInt("876")
		const addresslWgdvI7 = accounts[1]
		const addressQM1NbiU = accounts[1]
		const addressXF44WdG = accounts[1]
		const addresslsPSQao = accounts[2]
		const boolr3dhOne = await WheatFarmNcxX56R.transferFrom.call(addressQM1NbiU, addresslWgdvI7, uintXFWs8Mx, {from: accounts[0]});
		const uintJZG6hF = await WheatFarmNcxX56R.allowance.call(addresslsPSQao, addressXF44WdG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WheatFarmNcxX56R.transferFrom.call(addressQM1NbiU, addresslWgdvI7, uintXFWs8Mx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringxeSVvYo = "axYKyW5c3Wk4njVhiapKdwwO6daS7b"
		const stringDZlaoIM = "PKyz6Hn9b9zKcPuXedTRu5t8JOw2kjDR7SoBMaQrfDhLLs0eTOzka3Ccrr"
		const uintOET2gsX = BigInt("247")
		const WheatFarmUEuhQlA = await WheatFarm.new(stringxeSVvYo, stringDZlaoIM, uintOET2gsX, {from: "0x0000000000000000000000000000000000000001"});
		const addressvq3hKGW = accounts[3]
		const uintSajGf3I = BigInt("1067")
		const addressOwJ1Pr = accounts[3]
		const addressE1y33X = accounts[4]
		const uintl2TF848 = BigInt("1072")
		const addressEAJrwcl = "0x0000000000000000000000000000000000000001"
		const addressGdg2gUd = accounts[4]
		const uintmwd8PLY = await WheatFarmUEuhQlA.balanceOf.call(addressvq3hKGW, {from: accounts[1]});
		const boolQBxNbY2 = await WheatFarmUEuhQlA.transferFrom.call(addressE1y33X, addressOwJ1Pr, uintSajGf3I, {from: accounts[3]});
		const booltkigT7 = await WheatFarmUEuhQlA.transferFrom.call(addressGdg2gUd, addressEAJrwcl, uintl2TF848, {from: accounts[0]});
	});

	it('test for WheatFarm', async () => {
		const stringpeW8B0d = "vUyhfFs6MHMsxSXRo0Y3KBkLSRAVoaFBBLNrpjBYEvfrkzq7CcJpbqS0mwt405Q3FWD6yDr6UuwNAQ4KSTfX7QnU7YvVXAuT"
		const stringqZDl2pS = "Y2BiVk24HInY7hwu9qliKyhsNcxfIDCEhA4yXYIn51hy3DIVKEf9m5u06IVxuUMm7egprbcZ7MQoqJnzr3hBOFg1ohiN9S45"
		const uintACaM1MW = BigInt("1125")
		const WheatFarmapw6nqA = await WheatFarm.new(stringpeW8B0d, stringqZDl2pS, uintACaM1MW, {from: accounts[4]});
		const uintwr4Pnit = BigInt("807")
		const addressvNsK4rG = accounts[4]
		const addressZbQPhMh = accounts[3]
		const addressEty8TEa = "0x0000000000000000000000000000000000000001"
		const uintrOiBiSa = BigInt("2022")
		const addressdSjg2nP = accounts[3]
		const stringEfS2k5G = await WheatFarmapw6nqA.name.call({from: accounts[5]});
		const boolsbjFKnY = await WheatFarmapw6nqA.transfer.call(addressvNsK4rG, uintwr4Pnit, {from: accounts[1]});
		const uintgw4eXgl = await WheatFarmapw6nqA.allowance.call(addressEty8TEa, addressZbQPhMh, {from: accounts[4]});
		const booln2shQBk = await WheatFarmapw6nqA.increaseAllowance.call(addressdSjg2nP, uintrOiBiSa, {from: accounts[4]});

		assert.equal(stringEfS2k5G, "vUyhfFs6MHMsxSXRo0Y3KBkLSRAVoaFBBLNrpjBYEvfrkzq7CcJpbqS0mwt405Q3FWD6yDr6UuwNAQ4KSTfX7QnU7YvVXAuT")
		await expect(WheatFarmapw6nqA.transfer.call(addressvNsK4rG, uintwr4Pnit, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringjpohxVB = "KxVA"
		const stringwooDrTQ = "KTd5C6KA5Vw4RAmQSlISU2SlvT6W1zxE0k9YYJvMhPPqMn"
		const uintOl0YzWZ = BigInt("127")
		const WheatFarmxLH83gv = await WheatFarm.new(stringjpohxVB, stringwooDrTQ, uintOl0YzWZ, {from: accounts[3]});
		const uintD3Tlet0 = BigInt("571")
		const addressI5zuj8 = accounts[3]
		const uintr6qPLsb = BigInt("419")
		const addresstUG9HtN = accounts[4]
		const uintCrkmFsk = BigInt("920")
		const addressLged2f = accounts[5]
		const boolN6AjHyB = await WheatFarmxLH83gv.approve.call(addressI5zuj8, uintD3Tlet0, {from: accounts[1]});
		const boolqn6wwu4 = await WheatFarmxLH83gv.transfer.call(addresstUG9HtN, uintr6qPLsb, {from: accounts[0]});
		const boolm4fSVpZ = await WheatFarmxLH83gv.increaseAllowance.call(addressLged2f, uintCrkmFsk, {from: accounts[5]});

		assert.equal(boolN6AjHyB, true)
		await expect(WheatFarmxLH83gv.transfer.call(addresstUG9HtN, uintr6qPLsb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringt7pK7Jh = "3yFGmKXCvbBZqJpPxJmBGK1BLkujobvtHbamcJxbNM2"
		const stringvjCoKFu = "BlSOWRYjvD"
		const uintNc6xWNh = BigInt("225")
		const WheatFarmSJaQzvE = await WheatFarm.new(stringt7pK7Jh, stringvjCoKFu, uintNc6xWNh, {from: accounts[3]});
		const addressdfRPC7l = "0x0000000000000000000000000000000000000001"
		const uintCjPDeVA = BigInt("754")
		const addresskKHwBG3 = accounts[1]
		const uintqHeqmLo = BigInt("618")
		const addresstpZDlaN = accounts[5]
		const uintzBaQvax = BigInt("320")
		const addressYFBYX8 = accounts[4]
		const bool7adG4L = await WheatFarmSJaQzvE.transferownership.call(addressdfRPC7l, {from: accounts[3]});
		const boolBNdilWO = await WheatFarmSJaQzvE.decreaseAllowance.call(addresskKHwBG3, uintCjPDeVA, {from: accounts[2]});
		const boolqjZvVx8 = await WheatFarmSJaQzvE.approveAndCall.call(addresstpZDlaN, uintqHeqmLo, {from: accounts[2]});
		const booly4wLbtQ = await WheatFarmSJaQzvE.decreaseAllowance.call(addressYFBYX8, uintzBaQvax, {from: accounts[1]});

		assert.equal(bool7adG4L, true)
		await expect(WheatFarmSJaQzvE.decreaseAllowance.call(addresskKHwBG3, uintCjPDeVA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringuyWJOB7 = "eA5kYzZm5SdJuokAD2TO6txBJazQGfhkA8OKN9hFkzj4NORFSW5"
		const stringNzs2jQZ = "bV426l0"
		const uintZnF2H9r = BigInt("109")
		const WheatFarmnRouPFk = await WheatFarm.new(stringuyWJOB7, stringNzs2jQZ, uintZnF2H9r, {from: accounts[0]});
		const addressA1A5I9 = accounts[0]
		const addressDL7s75n = accounts[0]
		const uintSAhHwGB = BigInt("1077")
		const addressNzHXAIH = "0x0000000000000000000000000000000000000001"
		const uintv9aaQAx = BigInt("1361")
		const addressPG2Klj3 = accounts[3]
		const addressbbQpFyV = accounts[3]
		const uintd0ORtYA = BigInt("449")
		const addressgeS2jzg = accounts[2]
		const uintkIMw3aM = BigInt("516")
		const address83bZAS = accounts[0]
		const uintRzkmxAu = await WheatFarmnRouPFk.allowance.call(addressDL7s75n, addressA1A5I9, {from: accounts[5]});
		const boolB9K3NTZ = await WheatFarmnRouPFk.approveAndCall.call(addressNzHXAIH, uintSAhHwGB, {from: accounts[1]});
		const boolP8fl0du = await WheatFarmnRouPFk.transferFrom.call(addressbbQpFyV, addressPG2Klj3, uintv9aaQAx, {from: accounts[2]});
		const boolJG7EoCB = await WheatFarmnRouPFk.transfer.call(addressgeS2jzg, uintd0ORtYA, {from: accounts[1]});
		const booluj98yzP = await WheatFarmnRouPFk.transfer.call(address83bZAS, uintkIMw3aM, {from: accounts[0]});

		assert.equal(uintRzkmxAu, BigInt("0"))
		await expect(WheatFarmnRouPFk.approveAndCall.call(addressNzHXAIH, uintSAhHwGB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringj1CoT2 = "HVnkhDbGjvr5Gfsv7"
		const stringC3EYTeF = "tDBWpLRiBQNuHy9UcHSK"
		const uintqju3Ksm = BigInt("1078")
		const WheatFarmHu1yYxW = await WheatFarm.new(stringj1CoT2, stringC3EYTeF, uintqju3Ksm, {from: accounts[2]});
		const uintdQuUVWG = BigInt("1748")
		const addressWPEp8eH = accounts[1]
		const uintbU71zDv = BigInt("564")
		const addressTUla5o9 = accounts[1]
		const uintzFVmQ3H = BigInt("955")
		const addressUNDFgAm = accounts[4]
		const uintVnDoju = BigInt("1894")
		const addressTrXsgl = accounts[0]
		const uintstm0AoR = BigInt("957")
		const addressmwuWjFi = accounts[0]
		const addressW1vWkgc = accounts[1]
		const boolNZ2fl30 = await WheatFarmHu1yYxW.approve.call(addressWPEp8eH, uintdQuUVWG, {from: accounts[0]});
		const boolBGm18Fk = await WheatFarmHu1yYxW.approve.call(addressTUla5o9, uintbU71zDv, {from: accounts[0]});
		const stringdltuUwj = await WheatFarmHu1yYxW.name.call({from: accounts[1]});
		const boolXxaHiR9 = await WheatFarmHu1yYxW.approveAndCall.call(addressUNDFgAm, uintzFVmQ3H, {from: accounts[2]});
		const boolmDRNYdS = await WheatFarmHu1yYxW.approveAndCall.call(addressTrXsgl, uintVnDoju, {from: accounts[0]});
		const booloejwEAl = await WheatFarmHu1yYxW.transferFrom.call(addressW1vWkgc, addressmwuWjFi, uintstm0AoR, {from: accounts[3]});

		assert.equal(boolBGm18Fk, true)
		assert.equal(boolNZ2fl30, true)
		assert.equal(boolXxaHiR9, true)
		assert.equal(stringdltuUwj, "HVnkhDbGjvr5Gfsv7")
		await expect(WheatFarmHu1yYxW.approveAndCall.call(addressTrXsgl, uintVnDoju, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringJ6AJpjI = "cUk8vbpeC286FBhOL4ujDSYtJ1Vw2eZJsi5rvPkhQLCbdpXNwiOBvoeXfT"
		const stringXTOVEPn = "PTpNckvnOFyNHmR7ofU8x0hq9fpysAOPbnVOAxgEhnkhxwvDsVqZURHXoduM49gThf"
		const uints3Gder0 = BigInt("1141")
		const WheatFarmYfMqYWm = await WheatFarm.new(stringJ6AJpjI, stringXTOVEPn, uints3Gder0, {from: accounts[1]});
		const addressYm6QyZa = accounts[0]
		const uintoWWGO1g = BigInt("0")
		const addressjiL5Iyl = accounts[0]
		const addressRT0X6m7 = accounts[0]
		const addressXOyqkFz = accounts[2]
		const addressEUbTh7y = accounts[2]
		const uintNyjLUba = await WheatFarmYfMqYWm.balanceOf.call(addressYm6QyZa, {from: accounts[3]});
		const boolUZpbn6Q = await WheatFarmYfMqYWm.transferFrom.call(addressRT0X6m7, addressjiL5Iyl, uintoWWGO1g, {from: accounts[5]});
		const boolDjJAq2d = await WheatFarmYfMqYWm.transferownership.call(addressXOyqkFz, {from: accounts[2]});
		const boolRSABXQc = await WheatFarmYfMqYWm.transferownership.call(addressEUbTh7y, {from: accounts[1]});

		assert.equal(boolUZpbn6Q, true)
		assert.equal(uintNyjLUba, BigInt("0"))
		await expect(WheatFarmYfMqYWm.transferownership.call(addressXOyqkFz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})