const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringTsLB7Hl = "S8cKg2ssjTPCPHMv"
		const stringzc6M0ui = "agjIvpw7oLbG"
		const uintG253Ee = BigInt("964")
		const WheatFarmYObpe6k = await WheatFarm.new(stringTsLB7Hl, stringzc6M0ui, uintG253Ee, {from: accounts[0]});
		const addressX3AoCGa = accounts[3]
		const addressl0OoJGG = accounts[4]
		const uintgskucx = BigInt("701")
		const addressTDnqHmn = accounts[4]
		const uintZDZmhNN = BigInt("377")
		const addresss1HiQ9U = accounts[0]
		const addressh6H4Fpn = accounts[1]
		const uintKILbFhg = await WheatFarmYObpe6k.allowance.call(addressl0OoJGG, addressX3AoCGa, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHMh0eny = await WheatFarmYObpe6k.transfer.call(addressTDnqHmn, uintgskucx, {from: accounts[4]});
//		const boolMbe4y8 = await WheatFarmYObpe6k.transferFrom.call(addressh6H4Fpn, addresss1HiQ9U, uintZDZmhNN, {from: accounts[2]});

		assert.equal(uintKILbFhg, BigInt("0"))
		await expect(WheatFarmYObpe6k.transfer.call(addressTDnqHmn, uintgskucx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringjKjQS6a = "rcBLlxXdtq4Wm8KOwU8yJuVIACmFmYy4VdmRRvuPGQj6LPVpfQ"
		const stringUGolAA = "B18QiG8QDoSJ6dRl1vF0N"
		const uinthbIj5dp = BigInt("734")
		const WheatFarmcTULjvB = await WheatFarm.new(stringjKjQS6a, stringUGolAA, uinthbIj5dp, {from: accounts[2]});
		const uintw38nPHg = BigInt("489")
		const addressgF5Whpo = accounts[4]
		const addressgXWKdQ = accounts[5]
		const uinthhMJsru = BigInt("1036")
		const addresspX7tmIV = accounts[2]
		const uintbzpjtGA = BigInt("1847")
		const addresstU53CJS = accounts[0]
		const boolQOQkh5B = await WheatFarmcTULjvB.approve.call(addressgF5Whpo, uintw38nPHg, {from: accounts[5]});
//		const boolJ1575UG = await WheatFarmcTULjvB.transferownership.call(addressgXWKdQ, {from: accounts[3]});
//		const boolkN2BUku = await WheatFarmcTULjvB.approve.call(addresspX7tmIV, uinthhMJsru, {from: accounts[1]});
//		const boolquroQ6C = await WheatFarmcTULjvB.approve.call(addresstU53CJS, uintbzpjtGA, {from: accounts[4]});

		assert.equal(boolQOQkh5B, true)
		await expect(WheatFarmcTULjvB.transferownership.call(addressgXWKdQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringvTa8LxN = "E2gJ8gQKa"
		const stringPJVTJF5 = "adkH74On6bxPwvrdnQDc0YpSV0H2JbquD5APyzSdexotOGi"
		const uintXSxjNg3 = BigInt("1235")
		const WheatFarmy9GlvMI = await WheatFarm.new(stringvTa8LxN, stringPJVTJF5, uintXSxjNg3, {from: accounts[1]});
		const uintodcKHFQ = BigInt("1290")
		const addressDfSiMId = accounts[0]
		const uintaMylccs = BigInt("214")
		const addressp1cz5pt = accounts[3]
		const uintwCOnadO = BigInt("1240")
		const addressO8UCsvy = accounts[0]
		const uintFez4eG5 = BigInt("1197")
		const addressKTGQtZl = "0x0000000000000000000000000000000000000001"
//		const boolKVZZy5J = await WheatFarmy9GlvMI.increaseAllowance.call(addressDfSiMId, uintodcKHFQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolVJPdM31 = await WheatFarmy9GlvMI.transfer.call(addressp1cz5pt, uintaMylccs, {from: accounts[3]});
//		const boolvPkR8Y = await WheatFarmy9GlvMI.transfer.call(addressO8UCsvy, uintwCOnadO, {from: accounts[1]});
//		const boolSP0yerm = await WheatFarmy9GlvMI.increaseAllowance.call(addressKTGQtZl, uintFez4eG5, {from: accounts[3]});

		await expect(WheatFarmy9GlvMI.increaseAllowance.call(addressDfSiMId, uintodcKHFQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringmVBq7wP = "ka4PRkRMisD6aJgmJljkkel8GbU0WT0WubOQt41nRzJESudMgrkCeLM7hpaDm7zIRIaCZOerTgVQ2e4gNtCikOraYs"
		const stringkd1uRm3 = "sbz6rTKisNB"
		const uintMVhJcZx = BigInt("5")
		const WheatFarmFTLBTEw = await WheatFarm.new(stringmVBq7wP, stringkd1uRm3, uintMVhJcZx, {from: accounts[2]});
		const uintWbxvjJf = BigInt("773")
		const addressk6OgROf = accounts[3]
		const uintlKT18ii = BigInt("126")
		const addressZ0GiHIE = accounts[0]
		const uintWKZH1nO = BigInt("1686")
		const addressfQInDlS = accounts[4]
		const addressG5lcT4v = accounts[0]
		const addressykXpZio = accounts[3]
		const address9DXHqn = accounts[0]
		const stringym6bCv5 = await WheatFarmFTLBTEw.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolUj448p2 = await WheatFarmFTLBTEw.transfer.call(addressk6OgROf, uintWbxvjJf, {from: accounts[2]});
		const boolNvNkSj = await WheatFarmFTLBTEw.approve.call(addressZ0GiHIE, uintlKT18ii, {from: accounts[0]});
//		const boolCB6zJk = await WheatFarmFTLBTEw.transferFrom.call(addressG5lcT4v, addressfQInDlS, uintWKZH1nO, {from: accounts[1]});
//		const uintNBvWxOi = await WheatFarmFTLBTEw.balanceOf.call(addressykXpZio, {from: accounts[0]});
//		const boolrdlQ89X = await WheatFarmFTLBTEw.transferownership.call(address9DXHqn, {from: accounts[5]});

		assert.equal(boolNvNkSj, true)
		assert.equal(boolUj448p2, true)
		assert.equal(stringym6bCv5, "sbz6rTKisNB")
		await expect(WheatFarmFTLBTEw.transferFrom.call(addressG5lcT4v, addressfQInDlS, uintWKZH1nO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringeuIJLNn = "gvrcjLqFC2fCCvxRKPSSNVtRLcijCTjdg1a1XUjy3x4wFaFhbpFodm3OoMM73RuwyDLIayb1llX7B5TN61JbiKhLdTzu"
		const stringGpIZole = "uK6"
		const uintALFSVxD = BigInt("8")
		const WheatFarmZV0jARk = await WheatFarm.new(stringeuIJLNn, stringGpIZole, uintALFSVxD, {from: "0x0000000000000000000000000000000000000001"});
		const uintIGrCiU9 = BigInt("1034")
		const addressDeKvoiL = accounts[2]
		const uintZmaXdat = BigInt("1767")
		const addressKvviI0B = accounts[4]
		const uintRupdLA = BigInt("345")
		const addressK4TFYms = accounts[3]
		const address5Ir4bF = "0x0000000000000000000000000000000000000001"
		const addressOx6wiIG = accounts[2]
		const boolLgtKqv = await WheatFarmZV0jARk.transfer.call(addressDeKvoiL, uintIGrCiU9, {from: accounts[3]});
		const boolLaDxHWi = await WheatFarmZV0jARk.approveAndCall.call(addressKvviI0B, uintZmaXdat, {from: accounts[2]});
		const boolQywZh6Z = await WheatFarmZV0jARk.transferFrom.call(address5Ir4bF, addressK4TFYms, uintRupdLA, {from: accounts[1]});
		const uinteIyGf0x = await WheatFarmZV0jARk.balanceOf.call(addressOx6wiIG, {from: accounts[5]});
	});

	it('test for WheatFarm', async () => {
		const stringEysk8D4 = "K2DbKxpwID1H7xoX61MbOl3wtXsB8X3w4r6GNeAT8DGfWfiBQ7HocP1KmNFekA7LynWfA7eyzl7zpGCAX2QAY9wR5CHVY"
		const stringBegpbDn = "Or1fbJaq97qX"
		const uintNdVZzle = BigInt("740")
		const WheatFarmrhsK3U = await WheatFarm.new(stringEysk8D4, stringBegpbDn, uintNdVZzle, {from: accounts[5]});
		const uinttDy3kkw = BigInt("1026")
		const addressxvX4qKm = "0x0000000000000000000000000000000000000001"
		const stringUxe7qEv = await WheatFarmrhsK3U.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolWciPWcc = await WheatFarmrhsK3U.approveAndCall.call(addressxvX4qKm, uinttDy3kkw, {from: accounts[3]});
//		const uint8YgwfR6B = await WheatFarmrhsK3U.decimals.call({from: accounts[2]});
//		const uint8EyqIaL = await WheatFarmrhsK3U.decimals.call({from: accounts[4]});
//		const stringrNLcWdg = await WheatFarmrhsK3U.name.call({from: accounts[1]});

		assert.equal(stringUxe7qEv, "K2DbKxpwID1H7xoX61MbOl3wtXsB8X3w4r6GNeAT8DGfWfiBQ7HocP1KmNFekA7LynWfA7eyzl7zpGCAX2QAY9wR5CHVY")
		await expect(WheatFarmrhsK3U.approveAndCall.call(addressxvX4qKm, uinttDy3kkw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringQn0XUsq = "ILhFSUVr3y7YPF6bFzScjdNROq0G2lsKtL766LkIPKi"
		const stringHvIE41Z = "CnX2OCPRiGFlNKNv4z8lIhuslc5ajc4crPxIv18zNbnU4jacS8UewnAlKySwHCwWYTY2eTQu8tYk4gHoLGKH8G8bJWiHPtH"
		const uintwgmZygY = BigInt("1102")
		const WheatFarmhVesjaD = await WheatFarm.new(stringQn0XUsq, stringHvIE41Z, uintwgmZygY, {from: accounts[2]});
		const uintJYqO67 = BigInt("1913")
		const addressD7SVwM1 = accounts[2]
		const uintojKuU6q = BigInt("1628")
		const addressEYuv5Kj = "0x0000000000000000000000000000000000000001"
		const uintu4AqpFT = BigInt("1812")
		const addressXzgJAlh = accounts[1]
		const uintNiKHa1v = BigInt("1177")
		const addressxQGG0aa = accounts[3]
		const boolZvDXLwt = await WheatFarmhVesjaD.transfer.call(addressD7SVwM1, uintJYqO67, {from: accounts[2]});
		const boolWzDLUID = await WheatFarmhVesjaD.approveAndCall.call(addressEYuv5Kj, uintojKuU6q, {from: accounts[2]});
		const boolHXXVIn4 = await WheatFarmhVesjaD.approve.call(addressXzgJAlh, uintu4AqpFT, {from: accounts[0]});
		const uintKKQmO5R = await WheatFarmhVesjaD.totalSupply.call({from: accounts[5]});
		const boolTJSW0fF = await WheatFarmhVesjaD.approveAndCall.call(addressxQGG0aa, uintNiKHa1v, {from: accounts[2]});

		assert.equal(boolHXXVIn4, true)
		assert.equal(boolTJSW0fF, true)
		assert.equal(boolWzDLUID, true)
		assert.equal(boolZvDXLwt, true)
		assert.equal(uintKKQmO5R, BigInt("1102000000000000000000"))
	});

	it('test for WheatFarm', async () => {
		const stringuCWhL6m = "dpEUTbzQfgy1FNFyEAGKl7hHldieatthAbJEfWUN02rdGIros2XuS18QaP134IqMKSRQ2SSmpmHtVOcLaq6W711"
		const stringUoZsBUm = "tqc5vNftMQdm3vc1gZRepqeyMkC2YHj2V15JL"
		const uintKrjfSGl = BigInt("63")
		const WheatFarmiegv8ap = await WheatFarm.new(stringuCWhL6m, stringUoZsBUm, uintKrjfSGl, {from: accounts[2]});
		const addressE3sO5Wi = accounts[0]
		const uintXFWykTG = BigInt("1927")
		const addressbK4QOWl = accounts[5]
		const addressfY4Ge9I = accounts[0]
		const boolGSRGcXW = await WheatFarmiegv8ap.transferownership.call(addressE3sO5Wi, {from: accounts[2]});
		const stringIIXfo9c = await WheatFarmiegv8ap.symbol.call({from: accounts[5]});
//		const boolCExbbx = await WheatFarmiegv8ap.transferFrom.call(addressfY4Ge9I, addressbK4QOWl, uintXFWykTG, {from: accounts[0]});

		assert.equal(boolGSRGcXW, true)
		assert.equal(stringIIXfo9c, "tqc5vNftMQdm3vc1gZRepqeyMkC2YHj2V15JL")
		await expect(WheatFarmiegv8ap.transferFrom.call(addressfY4Ge9I, addressbK4QOWl, uintXFWykTG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringTsLB7Hl = "S8cKg2ssjTPCPHMv"
		const stringzc6M0ui = "agjIvpw7oLbG"
		const uintpyR10ef = BigInt("964")
		const WheatFarmYObpe6k = await WheatFarm.new(stringTsLB7Hl, stringzc6M0ui, uintpyR10ef, {from: accounts[0]});
		const uintm38g799 = BigInt("399")
		const addresszCzgsEO = "0x00000000000000000000000000000000000000-1"
//		const boolKd2MNMY = await WheatFarmYObpe6k.approveAndCall.call(addresszCzgsEO, uintm38g799, {from: accounts[0]});

		await expect(WheatFarmYObpe6k.approveAndCall.call(addresszCzgsEO, uintm38g799, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringix4YnWy = "eAz9dUvPBpcYyL3yWsC2UoUmhkMj3pkNzK0M12hmuAYDAJg7rNqR8ayjhc0Qxi9J6bd6gYs"
		const stringsJSsNVh = "qPSqa9RQjnIFtg7B5X"
		const uintakkOeeS = BigInt("108")
		const WheatFarmgcsThoq = await WheatFarm.new(stringix4YnWy, stringsJSsNVh, uintakkOeeS, {from: accounts[4]});
		const uintvXARQeK = BigInt("0")
		const addressxCqBfOk = accounts[1]
		const addressreJEeVw = accounts[1]
		const addressddoKAsz = accounts[0]
		const boolI2RA6OR = await WheatFarmgcsThoq.transferFrom.call(addressreJEeVw, addressxCqBfOk, uintvXARQeK, {from: accounts[3]});
		const uintOt3bwMb = await WheatFarmgcsThoq.balanceOf.call(addressddoKAsz, {from: accounts[0]});

		assert.equal(boolI2RA6OR, true)
		assert.equal(uintOt3bwMb, BigInt("0"))
	});
})