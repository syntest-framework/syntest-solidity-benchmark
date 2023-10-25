const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringMV16Nu8 = "UK8T0PDV91nMYelxHMnuXfKRm3ETCBibRQAFOsl5e58XRX1NU0t2I6HQLCzsFX9478hDNdvr4dEmJghcdf1ns34"
		const stringBk713bV = "nScuWWq8gQyxb6ZJ1uJJzNbifix1qkeGDf6iy9GGB2z98RTW8lKiGaCuIVxUWU5OAchVHA2xEfZIeGqw"
		const uintB9N5V4C = BigInt("1848")
		const RexonaqjUC364 = await Rexona.new(stringMV16Nu8, stringBk713bV, uintB9N5V4C, {from: accounts[4]});
		const uintSobZCvd = BigInt("211")
		const addressulv4hU = "0x0000000000000000000000000000000000000001"
		const uintcPO6up8 = BigInt("1309")
		const addresszoMFSGS = accounts[1]
		const uintUEeiMbO = BigInt("333")
		const addressIW2metT = accounts[3]
		const uintcF6qiis = BigInt("818")
		const addressd8I0GT6 = accounts[0]
		const boollQwGIU = await RexonaqjUC364.approve.call(addressulv4hU, uintSobZCvd, {from: accounts[2]});
		const boolNe3lDdh = await RexonaqjUC364.approve.call(addresszoMFSGS, uintcPO6up8, {from: accounts[3]});
		const boolk07xYLu = await RexonaqjUC364.approve.call(addressIW2metT, uintUEeiMbO, {from: accounts[5]});
//		const boolxhXAzG1 = await RexonaqjUC364.approveAndCall.call(addressd8I0GT6, uintcF6qiis, {from: accounts[3]});

		assert.equal(boolNe3lDdh, true)
		assert.equal(boolk07xYLu, true)
		assert.equal(boollQwGIU, true)
		await expect(RexonaqjUC364.approveAndCall.call(addressd8I0GT6, uintcF6qiis, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringbrY854D = "3J1Qn1oOZVvo2BoSlOz4zgJuNiN6zaQpUqaD4Os6O5uPy7L8"
		const stringzcdf6IV = "YU5cHY8ajbnQgjbykq"
		const uintJf88S8y = BigInt("213")
		const RexonadbibIgv = await Rexona.new(stringbrY854D, stringzcdf6IV, uintJf88S8y, {from: accounts[2]});
		const uintEXmRpvj = BigInt("261")
		const address4ZNTuu = accounts[1]
		const uintPcixJp1 = BigInt("1700")
		const addressXqybZfM = accounts[4]
		const uintd9NHy9X = BigInt("25")
		const addressiTX4Uwv = "0x0000000000000000000000000000000000000001"
		const addresse1kvMBz = accounts[3]
		const uintGnjfoOS = BigInt("702")
		const addressmbVB7SA = accounts[3]
		const uintjlcnlbK = BigInt("615")
		const addressTWnyDxG = accounts[0]
		const boolSa96aTo = await RexonadbibIgv.approve.call(address4ZNTuu, uintEXmRpvj, {from: accounts[0]});
		const boolMlH3pn8 = await RexonadbibIgv.transfer.call(addressXqybZfM, uintPcixJp1, {from: accounts[2]});
//		const boolK3rPZ9b = await RexonadbibIgv.transferFrom.call(addresse1kvMBz, addressiTX4Uwv, uintd9NHy9X, {from: accounts[4]});
//		const boolMcuoX0 = await RexonadbibIgv.approve.call(addressmbVB7SA, uintGnjfoOS, {from: accounts[1]});
//		const boolIsLBqUM = await RexonadbibIgv.approveAndCall.call(addressTWnyDxG, uintjlcnlbK, {from: accounts[4]});

		assert.equal(boolMlH3pn8, true)
		assert.equal(boolSa96aTo, true)
		await expect(RexonadbibIgv.transferFrom.call(addresse1kvMBz, addressiTX4Uwv, uintd9NHy9X, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringWTmZMpJ = "n5wmuaKVwOlyECM8LUt9nn6oRsBGwwQgJ7X1GrfeXLNOk8BQcK4fAkxgA6LVkwUF3hgbDPxR5dTLntwP4p2UV1NvA"
		const stringGiRMhuR = "zAPl7qtf2AMUJrNcECPkgIfLq9TyVVVPXKozJsQgCbA"
		const uintXjy7gTP = BigInt("71")
		const RexonaucM1nPW = await Rexona.new(stringWTmZMpJ, stringGiRMhuR, uintXjy7gTP, {from: accounts[0]});
		const uintEL9anKJ = BigInt("75")
		const addressvdkrNOu = accounts[2]
		const uintNoFaPv = BigInt("722")
		const addresscFHKxIn = accounts[2]
		const uintmSNaTg = BigInt("442")
		const addresskZhioE = accounts[5]
		const uintmjC3T2H = BigInt("707")
		const addressMdBXoK6 = accounts[0]
		const addressmzMsXKQ = accounts[0]
		const uintILJQHvw = BigInt("176")
		const addresspgFs0j = accounts[1]
//		const boolb6LHRs = await RexonaucM1nPW.transfer.call(addressvdkrNOu, uintEL9anKJ, {from: accounts[3]});
//		const boolWcfGOO = await RexonaucM1nPW.approve.call(addresscFHKxIn, uintNoFaPv, {from: accounts[3]});
//		const bool9yOni8 = await RexonaucM1nPW.approve.call(addresskZhioE, uintmSNaTg, {from: accounts[5]});
//		const booluadrgu = await RexonaucM1nPW.transferFrom.call(addressmzMsXKQ, addressMdBXoK6, uintmjC3T2H, {from: accounts[3]});
//		const boolzMwUcIE = await RexonaucM1nPW.approveAndCall.call(addresspgFs0j, uintILJQHvw, {from: accounts[0]});

		await expect(RexonaucM1nPW.transfer.call(addressvdkrNOu, uintEL9anKJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringGlR30Gs = "HNjWbdzhJGmsK6Ltbl12laXnTo"
		const stringps6zQg5 = "h7TyVFTgQIF20shNzWT1zJT8rC6Z2M4LXtqAW"
		const uintVWZexfD = BigInt("1716")
		const Rexonaq8hOWTO = await Rexona.new(stringGlR30Gs, stringps6zQg5, uintVWZexfD, {from: accounts[2]});
		const addressP5jwMa6 = accounts[2]
		const uintpbS0boS = BigInt("1097")
		const addresscxYViC = accounts[1]
		const addressoHQeJm = accounts[4]
		const uintxz3mzzW = BigInt("1855")
		const addresswpgG5Ia = accounts[1]
		const addressvSqHYaX = accounts[3]
		const uintaMcdSa = BigInt("296")
		const addressLCYoRu8 = accounts[0]
//		const boolIL2SQX = await Rexonaq8hOWTO.transferownership.call(addressP5jwMa6, {from: accounts[1]});
//		const boolEKAYUfv = await Rexonaq8hOWTO.transferFrom.call(addressoHQeJm, addresscxYViC, uintpbS0boS, {from: accounts[0]});
//		const boolfrUYJ0p = await Rexonaq8hOWTO.transferFrom.call(addressvSqHYaX, addresswpgG5Ia, uintxz3mzzW, {from: accounts[1]});
//		const boolpET6AQ0 = await Rexonaq8hOWTO.approve.call(addressLCYoRu8, uintaMcdSa, {from: accounts[0]});

		await expect(Rexonaq8hOWTO.transferownership.call(addressP5jwMa6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringqhSU7l1 = "nDOSgmSZXUp2pzktZ2cgl7rfmJVpEdN0AS59OjXnCqnCYdblzsWUUDel49SCkoqkriTgehWqt"
		const stringmyqVyUU = "0H"
		const uintpsLdT4w = BigInt("945")
		const RexonaUtGknj9 = await Rexona.new(stringqhSU7l1, stringmyqVyUU, uintpsLdT4w, {from: accounts[1]});
		const uintgH7YEZ = BigInt("1267")
		const addressiRLx0Nu = accounts[0]
		const uintUSTRsLL = BigInt("652")
		const addressOeLeFIY = accounts[4]
		const uintRzGtZRR = BigInt("1763")
		const addressPdYi9JV = accounts[0]
		const uintlSiUchR = BigInt("952")
		const addressRmbWKvW = accounts[4]
		const addressNcbR5gs = accounts[3]
		const boolNNOagN = await RexonaUtGknj9.approve.call(addressiRLx0Nu, uintgH7YEZ, {from: accounts[1]});
		const boolAhDJUHG = await RexonaUtGknj9.approveAndCall.call(addressOeLeFIY, uintUSTRsLL, {from: accounts[1]});
		const boolGg4CLI = await RexonaUtGknj9.approve.call(addressPdYi9JV, uintRzGtZRR, {from: accounts[5]});
//		const boolalxt9hZ = await RexonaUtGknj9.transferFrom.call(addressNcbR5gs, addressRmbWKvW, uintlSiUchR, {from: accounts[5]});

		assert.equal(boolAhDJUHG, true)
		assert.equal(boolGg4CLI, true)
		assert.equal(boolNNOagN, true)
		await expect(RexonaUtGknj9.transferFrom.call(addressNcbR5gs, addressRmbWKvW, uintlSiUchR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringbrY854D = "3J1Qn1oOZVvo2BoSlOz4zgJuNiN6zaQpUqaD4Os6O5uPy7L8"
		const stringzcdf6IV = "YU5cHY8ajbnQgjbykq"
		const uintgFriE2m = BigInt("213")
		const RexonadbibIgv = await Rexona.new(stringbrY854D, stringzcdf6IV, uintgFriE2m, {from: accounts[2]});
		const uintUrRJe3Y = BigInt("1324")
		const addressOyYG17D = "0x00000000000000000000000000000000000000-1"
		const addressGFwyLdh = accounts[3]
		const uintWemmhLt = BigInt("2032")
		const addressnbKrjsR = accounts[0]
		const addressZQ72zUt = accounts[4]
		const uintCPmVEDh = BigInt("1982")
		const addressKkTjrDR = accounts[5]
		const uint7ZRLLr = BigInt("702")
		const addressjB6BD6Y = accounts[3]
		const uintVACbvCy = BigInt("615")
		const address3zZPAf = accounts[0]
//		const boolK3rPZ9b = await RexonadbibIgv.transferFrom.call(addressGFwyLdh, addressOyYG17D, uintUrRJe3Y, {from: accounts[4]});
//		const boolL21l9p = await RexonadbibIgv.transferFrom.call(addressZQ72zUt, addressnbKrjsR, uintWemmhLt, {from: accounts[5]});
//		const boolgYNq1jU = await RexonadbibIgv.approve.call(addressKkTjrDR, uintCPmVEDh, {from: accounts[5]});
//		const boolMcuoX0 = await RexonadbibIgv.approve.call(addressjB6BD6Y, uint7ZRLLr, {from: accounts[1]});
//		const boolIsLBqUM = await RexonadbibIgv.approveAndCall.call(address3zZPAf, uintVACbvCy, {from: accounts[4]});

		await expect(RexonadbibIgv.transferFrom.call(addressGFwyLdh, addressOyYG17D, uintUrRJe3Y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const string4A5P2Y = "bDVGpmSxgWTRFj57LdcnwPS36VWthkAy81AqdEp3UqRUHG5pUyrdTWYRzXaOaEPg8Q50zBT5Md9Ep"
		const stringXwCVc5B = "eYM3nCECvIIFjbykgI0uQMC9y5O4KEdKDcpBkWqbxXd3qfXyKrLHMCx83gDkGEgEnqc"
		const uinteb8Q6Kl = BigInt("1613")
		const RexonaaZssTI9 = await Rexona.new(string4A5P2Y, stringXwCVc5B, uinteb8Q6Kl, {from: "0x0000000000000000000000000000000000000001"});
		const uintdWArWQT = BigInt("1032")
		const addressyX4GIIm = accounts[1]
		const addressCpbTGLa = accounts[0]
		const addressFSfZTGF = accounts[3]
		const uintYS7yry = BigInt("1149")
		const addressLM6u40Q = accounts[3]
		const addressjbQd7n4 = accounts[5]
		const uintaWFE3ID = BigInt("730")
		const addresso75WexT = "0x0000000000000000000000000000000000000001"
		const uintVJESiS = BigInt("859")
		const addresspNDpzw = accounts[0]
		const boolrswmS2 = await RexonaaZssTI9.transferFrom.call(addressCpbTGLa, addressyX4GIIm, uintdWArWQT, {from: accounts[1]});
		const boolTjV2Q7v = await RexonaaZssTI9.transferownership.call(addressFSfZTGF, {from: accounts[3]});
		const boolxxW6BeS = await RexonaaZssTI9.transferFrom.call(addressjbQd7n4, addressLM6u40Q, uintYS7yry, {from: "0x0000000000000000000000000000000000000001"});
		const booluSGwph3 = await RexonaaZssTI9.approveAndCall.call(addresso75WexT, uintaWFE3ID, {from: accounts[1]});
		const boolwdr330r = await RexonaaZssTI9.approve.call(addresspNDpzw, uintVJESiS, {from: accounts[2]});
	});

	it('test for Rexona', async () => {
		const stringbrY854D = "3J1Qn1oOZVvo2BoSlOz4zgJuNiN6zaQpUqaD4Os6O5uPy7L8"
		const stringzcdf6IV = "YU5cHY8ajbnQgjbykq"
		const uintqrC2LVb = BigInt("213")
		const RexonadbibIgv = await Rexona.new(stringbrY854D, stringzcdf6IV, uintqrC2LVb, {from: accounts[2]});
		const uinthCyQlhl = BigInt("0")
		const addressjvMlrat = accounts[0]
		const addressyEVVRCM = accounts[1]
		const uintWJAVmsG = BigInt("614")
		const addresso7KnTl = accounts[1]
		const boolR3yno1t = await RexonadbibIgv.transfer.call(addressjvMlrat, uinthCyQlhl, {from: accounts[5]});
//		const boolnhNsWiD = await RexonadbibIgv.transferownership.call(addressyEVVRCM, {from: accounts[4]});
//		const boolIsLBqUM = await RexonadbibIgv.approveAndCall.call(addresso7KnTl, uintWJAVmsG, {from: accounts[4]});

		assert.equal(boolR3yno1t, true)
		await expect(RexonadbibIgv.transferownership.call(addressyEVVRCM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})