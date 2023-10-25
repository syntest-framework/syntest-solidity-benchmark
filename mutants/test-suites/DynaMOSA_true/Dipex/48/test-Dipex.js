const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringO0T8bvl = "X6X1yQnaAmzp9eoXSQ2E35eyRlgYt6FC7ryzPRqFI1KHbX6wObvBDhkaFwb1tmy6IYAMGuktNT7LBs"
		const stringFbCZLH = "kBrYZzGd12UtcnHo5icTD3T635qD3HP7JFrFnvVVyNns4pxZHgDR5K6OfsUcV70Wd1nX4y2g"
		const uint2diDev = BigInt("1658")
		const DipexQOvUHQ = await Dipex.new(stringO0T8bvl, stringFbCZLH, uint2diDev, {from: accounts[0]});
		const uintUca3YLa = BigInt("603")
		const addressXFCVkAl = accounts[2]
		const addressyW8izo5 = accounts[2]
		const uintbBc57fO = BigInt("945")
		const addressvzTcH2a = accounts[4]
		const uintJ0ufiVi = BigInt("1373")
		const addressxv6JLq8 = accounts[2]
		const uintwJdC0FF = BigInt("29")
		const addressBSzEwhN = accounts[0]
		const uintN9LurJ0 = BigInt("1702")
		const addressLLzAZ3M = accounts[4]
//		const boolmPwwea = await DipexQOvUHQ.transfer.call(addressXFCVkAl, uintUca3YLa, {from: accounts[3]});
//		const boolAPznqUh = await DipexQOvUHQ.transferownership.call(addressyW8izo5, {from: accounts[5]});
//		const boolZ7dGZns = await DipexQOvUHQ.approve.call(addressvzTcH2a, uintbBc57fO, {from: accounts[2]});
//		const boolTXfiRk1 = await DipexQOvUHQ.transfer.call(addressxv6JLq8, uintJ0ufiVi, {from: accounts[0]});
//		const boolRf35gty = await DipexQOvUHQ.transfer.call(addressBSzEwhN, uintwJdC0FF, {from: "0x0000000000000000000000000000000000000001"});
//		const boolV27Nf3O = await DipexQOvUHQ.approveAndCall.call(addressLLzAZ3M, uintN9LurJ0, {from: accounts[2]});

		await expect(DipexQOvUHQ.transfer.call(addressXFCVkAl, uintUca3YLa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringw80T8Ph = "iphmjbKyA8mZJtVYUzeTNYpkF9ViKocXfKQynmx2we5ZfrHwcYuRDHNXmD1ODzx46L7zAwad97IiYBr7TNnw7i32jI"
		const string9qP9Ne = "c1RsC69RIhqfnja7g8X35WYmgeUhhy1bL4sLIpetddGTTRIkNHKmdz9BpyWcSmxvcUPHdoVo1QwJQqxcdC4f"
		const uintpNNSWro = BigInt("330")
		const Dipexxr6Z7WY = await Dipex.new(stringw80T8Ph, string9qP9Ne, uintpNNSWro, {from: accounts[2]});
		const uintCT7ZlRa = BigInt("299")
		const addressFSkRNEk = accounts[0]
		const addressbE3Oh4d = accounts[3]
		const uintnmvnpfd = BigInt("1072")
		const addressn00Xeh = accounts[2]
		const uintY3fNiLh = BigInt("686")
		const addressV4XlEMa = accounts[0]
		const addressLvdowvb = accounts[5]
		const uintcohrR2t = BigInt("48")
		const addresszUecnC7 = "0x0000000000000000000000000000000000000001"
		const uintf5RsT7e = BigInt("1320")
		const addresscsKqbAL = "0x0000000000000000000000000000000000000001"
//		const boolrFudxbW = await Dipexxr6Z7WY.transferFrom.call(addressbE3Oh4d, addressFSkRNEk, uintCT7ZlRa, {from: accounts[0]});
//		const bool8esS1O = await Dipexxr6Z7WY.transfer.call(addressn00Xeh, uintnmvnpfd, {from: accounts[0]});
//		const boolAxiwUwA = await Dipexxr6Z7WY.transferFrom.call(addressLvdowvb, addressV4XlEMa, uintY3fNiLh, {from: "0x0000000000000000000000000000000000000001"});
//		const boolByUKaXQ = await Dipexxr6Z7WY.approve.call(addresszUecnC7, uintcohrR2t, {from: accounts[0]});
//		const boolUnVeJD = await Dipexxr6Z7WY.approve.call(addresscsKqbAL, uintf5RsT7e, {from: accounts[0]});

		await expect(Dipexxr6Z7WY.transferFrom.call(addressbE3Oh4d, addressFSkRNEk, uintCT7ZlRa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringpIkHxOS = "onsDAxXF19RCDpPNKapk4g9Rdz9KiGEwWj42lpGb6K5q3GC6Rxu4nght6zMIkV3QbDp4UbLZvKaFTpNMbCFB0zTZ"
		const string2nYtJc = "dOonn6Wl9R4oXdhvJJ7Ik4rYLDP4RX55lvd4ulX08p"
		const uintb36ahEw = BigInt("732")
		const DipexQX1w1W2 = await Dipex.new(stringpIkHxOS, string2nYtJc, uintb36ahEw, {from: accounts[3]});
		const uintw9SRqM = BigInt("276")
		const addressjj0qFUx = accounts[0]
		const uintnSc0xD1 = BigInt("1749")
		const addressZNi3Q0H = accounts[5]
		const uintCgdtxqi = BigInt("1423")
		const addressmMHXhTX = accounts[0]
		const uintw2LPp3L = BigInt("1492")
		const addressEvZjDx3 = accounts[4]
		const uintjOr1uZO = BigInt("539")
		const addressU2JFQGH = "0x0000000000000000000000000000000000000001"
		const addressIBudWw9 = accounts[2]
		const uintQ9cNoGB = BigInt("162")
		const addressRVFPi7 = accounts[4]
		const boolhkkbx86 = await DipexQX1w1W2.approve.call(addressjj0qFUx, uintw9SRqM, {from: accounts[5]});
		const boolPtVByMM = await DipexQX1w1W2.approve.call(addressZNi3Q0H, uintnSc0xD1, {from: accounts[2]});
		const boolECfodey = await DipexQX1w1W2.approve.call(addressmMHXhTX, uintCgdtxqi, {from: accounts[2]});
		const boolkzSjhEQ = await DipexQX1w1W2.approve.call(addressEvZjDx3, uintw2LPp3L, {from: accounts[4]});
//		const boolDz0v1F5 = await DipexQX1w1W2.transferFrom.call(addressIBudWw9, addressU2JFQGH, uintjOr1uZO, {from: accounts[2]});
//		const boolaG9aZVf = await DipexQX1w1W2.transfer.call(addressRVFPi7, uintQ9cNoGB, {from: accounts[1]});

		assert.equal(boolECfodey, true)
		assert.equal(boolPtVByMM, true)
		assert.equal(boolhkkbx86, true)
		assert.equal(boolkzSjhEQ, true)
		await expect(DipexQX1w1W2.transferFrom.call(addressIBudWw9, addressU2JFQGH, uintjOr1uZO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringYHGJ6ZI = "JFKUaz8agwX81PIKSaKvLJMMqIdLX1DVThX4z6gsIv8HDX9dkhBEHSFHTT1b8oApH9xn7mJGKiafZvOC"
		const stringMt9L3wl = "UXjeuXok3ls89KtQgzsEmX7470SDXkdPlhjoJ2A6cE2yncHllo38w1kz"
		const uintQQtmJDc = BigInt("1224")
		const DipexlD7CSmZ = await Dipex.new(stringYHGJ6ZI, stringMt9L3wl, uintQQtmJDc, {from: accounts[3]});
		const uinty5u3zKH = BigInt("1608")
		const addresscCr4idU = accounts[3]
		const addressvJ8eyYh = accounts[4]
		const uintmaT8N2 = BigInt("1319")
		const addressBdqbOU = accounts[5]
		const uintaP6LVUJ = BigInt("766")
		const addresslOJWuN1 = "0x0000000000000000000000000000000000000001"
//		const boolz8tTmOz = await DipexlD7CSmZ.transfer.call(addresscCr4idU, uinty5u3zKH, {from: accounts[2]});
//		const boolE68dWeQ = await DipexlD7CSmZ.transferownership.call(addressvJ8eyYh, {from: accounts[4]});
//		const boolaQPtDny = await DipexlD7CSmZ.approveAndCall.call(addressBdqbOU, uintmaT8N2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQVrmssA = await DipexlD7CSmZ.approve.call(addresslOJWuN1, uintaP6LVUJ, {from: accounts[3]});

		await expect(DipexlD7CSmZ.transfer.call(addresscCr4idU, uinty5u3zKH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringvHIuozq = "BU5njB7Tt61sBXj6aMP9bgaE1PekLgnAN9XisJrTrXK4ENrV5oKVKmTFDJ293FDOVYWJNqxBWDSufUVJud4t7m7jkaO"
		const stringkYXAFS8 = "uLwTeUmfWn"
		const uint2i57kX = BigInt("1358")
		const DipexfCgxkJ7 = await Dipex.new(stringvHIuozq, stringkYXAFS8, uint2i57kX, {from: accounts[2]});
		const uintBlovjSA = BigInt("717")
		const addressHYdZfOA = accounts[2]
		const uintPzAkaIf = BigInt("293")
		const addressfbxGfJ = accounts[0]
		const uintG0aUkkn = BigInt("1398")
		const addressJPbSnor = "0x0000000000000000000000000000000000000001"
		const uintdxVP8ZQ = BigInt("1795")
		const addressQitaJCV = accounts[1]
		const booljkZ16xe = await DipexfCgxkJ7.transfer.call(addressHYdZfOA, uintBlovjSA, {from: accounts[2]});
//		const boolvqMT9a2 = await DipexfCgxkJ7.approveAndCall.call(addressfbxGfJ, uintPzAkaIf, {from: accounts[3]});
//		const boolFJ0XbuS = await DipexfCgxkJ7.approveAndCall.call(addressJPbSnor, uintG0aUkkn, {from: accounts[1]});
//		const boolzwuwITe = await DipexfCgxkJ7.approve.call(addressQitaJCV, uintdxVP8ZQ, {from: accounts[3]});

		assert.equal(booljkZ16xe, true)
		await expect(DipexfCgxkJ7.approveAndCall.call(addressfbxGfJ, uintPzAkaIf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringCrnHDn = "sr5civ2FSvUErmbVuLiF5PDmNEDDeL8jcpUnP1Cd6Qiv8ttzCDSPADVRqgTTw26T5mXsyndVPetNi6WtubF9F"
		const stringGlKtvT4 = "UXGQyia8X8NY6ZhdZ9q2F856ucLA1O"
		const uintj1cMdaf = BigInt("2004")
		const DipexpgwMQl0 = await Dipex.new(stringCrnHDn, stringGlKtvT4, uintj1cMdaf, {from: accounts[2]});
		const uintGd2CzA = BigInt("1512")
		const addressLmOHODZ = accounts[5]
		const uintNAKBJ0 = BigInt("999")
		const addressVkAP4C = accounts[2]
		const uintcdoez3 = BigInt("758")
		const addressZiRZdmX = accounts[0]
		const addressj7zmv4w = accounts[4]
		const boolMxsFBsL = await DipexpgwMQl0.approve.call(addressLmOHODZ, uintGd2CzA, {from: accounts[4]});
		const boolCkqGPGC = await DipexpgwMQl0.approveAndCall.call(addressVkAP4C, uintNAKBJ0, {from: accounts[2]});
//		const boolhAbikF = await DipexpgwMQl0.transferFrom.call(addressj7zmv4w, addressZiRZdmX, uintcdoez3, {from: accounts[3]});

		assert.equal(boolCkqGPGC, true)
		assert.equal(boolMxsFBsL, true)
		await expect(DipexpgwMQl0.transferFrom.call(addressj7zmv4w, addressZiRZdmX, uintcdoez3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringw80T8Ph = "iphmjbKyA8mZJtVYUzeTNYpkF9ViKocXfKQynmx2we5ZfrHwcYuRDHNXmD1ODzx46L7zAwad97IiYBr7TNnw7i32jI"
		const string9qP9Ne = "c1RsC69RIhqfnja7g8X35WYmgeUhhy1bL4sLIpetddGTTRIkNHKmdz9BpyWcSmxvcUPHdoVo1QwJQqxcdC4f"
		const uintYqNwXR = BigInt("330")
		const Dipexxr6Z7WY = await Dipex.new(stringw80T8Ph, string9qP9Ne, uintYqNwXR, {from: accounts[2]});
		const addresscD7OCDA = "0x0000000000000000000000000000000000000001"
		const uintqTzylTt = BigInt("1806")
		const addressxc977m6 = accounts[2]
		const uintA406qxV = BigInt("299")
		const addressWDtsokC = accounts[1]
		const addressf31ydw = accounts[3]
		const uintXhYuu5d = BigInt("1073")
		const addressfs26Yg = accounts[2]
		const uintRsWvinr = BigInt("686")
		const addressxediktz = accounts[0]
		const addresskhhZ9Vr = accounts[5]
		const uintTZ8tpa = BigInt("48")
		const addressqiIXjH2 = "0x0000000000000000000000000000000000000001"
		const uintFsFyXsS = BigInt("1320")
		const addressIYOGH6 = "0x0000000000000000000000000000000000000001"
		const boolKwjcU6J = await Dipexxr6Z7WY.transferownership.call(addresscD7OCDA, {from: accounts[2]});
//		const booltYjnAfs = await Dipexxr6Z7WY.approveAndCall.call(addressxc977m6, uintqTzylTt, {from: accounts[0]});
//		const boolrFudxbW = await Dipexxr6Z7WY.transferFrom.call(addressf31ydw, addressWDtsokC, uintA406qxV, {from: accounts[0]});
//		const bool8esS1O = await Dipexxr6Z7WY.transfer.call(addressfs26Yg, uintXhYuu5d, {from: accounts[0]});
//		const boolAxiwUwA = await Dipexxr6Z7WY.transferFrom.call(addresskhhZ9Vr, addressxediktz, uintRsWvinr, {from: "0x0000000000000000000000000000000000000001"});
//		const boolByUKaXQ = await Dipexxr6Z7WY.approve.call(addressqiIXjH2, uintTZ8tpa, {from: accounts[0]});
//		const boolUnVeJD = await Dipexxr6Z7WY.approve.call(addressIYOGH6, uintFsFyXsS, {from: accounts[0]});

		assert.equal(boolKwjcU6J, true)
		await expect(Dipexxr6Z7WY.approveAndCall.call(addressxc977m6, uintqTzylTt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringOSf31Xj = "Qh9gEHOhANjNI4XXJft2Cajj13DXTD7c2N0jQ6DOvJx3StJ3TCLSUBJFTawZKxKYQ3WK5dJgM8evmWHvxLuqYHdj3L"
		const stringWLVKK0k = "aTCWJOBqBP1QRHfiBGxeYrZMbDep4nUCbDKzqQt3tqhCEyjMbCPY30MYXaMRm4Eml9"
		const uintguQLCVJ = BigInt("1346")
		const DipexSMY9QM = await Dipex.new(stringOSf31Xj, stringWLVKK0k, uintguQLCVJ, {from: "0x0000000000000000000000000000000000000001"});
		const uintLQhhYIF = BigInt("641")
		const addressl9J3RhH = accounts[1]
		const uint4itO4w = BigInt("403")
		const addresseMVeNpz = accounts[1]
		const uintLz6cnG = BigInt("119")
		const addressOAUl73I = accounts[0]
		const addressfd2xEY = accounts[3]
		const uintM4ih7cI = BigInt("1504")
		const addressyFndkJt = accounts[2]
		const uintCZ2hpIn = BigInt("471")
		const addressgXv8nA2 = accounts[2]
		const addressfltrSAb = accounts[0]
		const addressIVe3BQS = accounts[3]
		const boollZvE771 = await DipexSMY9QM.approveAndCall.call(addressl9J3RhH, uintLQhhYIF, {from: accounts[3]});
		const boolN9vKfKw = await DipexSMY9QM.approveAndCall.call(addresseMVeNpz, uint4itO4w, {from: accounts[5]});
		const bool3BH9w5 = await DipexSMY9QM.transferFrom.call(addressfd2xEY, addressOAUl73I, uintLz6cnG, {from: accounts[2]});
		const boolxhaHmcu = await DipexSMY9QM.approve.call(addressyFndkJt, uintM4ih7cI, {from: accounts[0]});
		const boolKgh0kG9 = await DipexSMY9QM.transferFrom.call(addressfltrSAb, addressgXv8nA2, uintCZ2hpIn, {from: accounts[2]});
		const boolMrWZefP = await DipexSMY9QM.transferownership.call(addressIVe3BQS, {from: accounts[3]});
	});

	it('test for Dipex', async () => {
		const stringW09DvX = "tQx1oYMyGJqdiKA4PKIa7GTN7SUc4CXaloDcomOc5K7ZJjJErrOEgEcvZ2"
		const stringXqhM5OY = "eER5GF2VWndthQ"
		const uintMu2PPK2 = BigInt("180")
		const DipexJtfvy2v = await Dipex.new(stringW09DvX, stringXqhM5OY, uintMu2PPK2, {from: accounts[0]});
		const uintqn5ea7P = BigInt("0")
		const addresssbFQO9G = accounts[0]
		const addresspiJNsPJ = accounts[2]
		const uintqZEaPIq = BigInt("1812")
		const addressBmeDHh = accounts[0]
		const addresszbwxNce = accounts[0]
		const boolIQXApmd = await DipexJtfvy2v.transferFrom.call(addresspiJNsPJ, addresssbFQO9G, uintqn5ea7P, {from: accounts[0]});
//		const boolHvK8DcB = await DipexJtfvy2v.transferFrom.call(addresszbwxNce, addressBmeDHh, uintqZEaPIq, {from: accounts[2]});

		assert.equal(boolIQXApmd, true)
		await expect(DipexJtfvy2v.transferFrom.call(addresszbwxNce, addressBmeDHh, uintqZEaPIq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringGzVLAGN = "IAOk3Wm5"
		const stringFknqQDi = "amt8WIn9z6grRUEw4"
		const uintPjTxNDZ = BigInt("1316")
		const DipexuEBDZ61 = await Dipex.new(stringGzVLAGN, stringFknqQDi, uintPjTxNDZ, {from: accounts[1]});
		const uintS4gBAQV = BigInt("1107")
		const addresspOe9Io = accounts[0]
		const uintg3YtLvf = BigInt("169")
		const addressmBkgVCn = accounts[5]
		const uintigEWGMC = BigInt("509")
		const addresswpb7VlV = "0x0000000000000000000000000000000000000001"
		const uintH2lImny = BigInt("0")
		const addresskRjndEW = accounts[3]
		const uintJ8xnJk9 = BigInt("946")
		const addresshmpNrIj = accounts[6]
		const addressSA5TF9t = accounts[3]
		const boolnhea5l1 = await DipexuEBDZ61.approve.call(addresspOe9Io, uintS4gBAQV, {from: "0x0000000000000000000000000000000000000001"});
		const booltSpNKd7 = await DipexuEBDZ61.approve.call(addressmBkgVCn, uintg3YtLvf, {from: accounts[5]});
		const boolUSq607j = await DipexuEBDZ61.approve.call(addresswpb7VlV, uintigEWGMC, {from: accounts[0]});
		const boolzlykGHT = await DipexuEBDZ61.approveAndCall.call(addresskRjndEW, uintH2lImny, {from: accounts[1]});
//		const boolmpiMow1 = await DipexuEBDZ61.transferFrom.call(addressSA5TF9t, addresshmpNrIj, uintJ8xnJk9, {from: accounts[2]});

		assert.equal(boolUSq607j, true)
		assert.equal(boolnhea5l1, true)
		assert.equal(booltSpNKd7, true)
		assert.equal(boolzlykGHT, true)
		await expect(DipexuEBDZ61.transferFrom.call(addressSA5TF9t, addresshmpNrIj, uintJ8xnJk9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringW09DvX = "tQx1oYMyGJqdiKA4PKIa7GTN7SUc4CXaloDcomOc5K7ZJjJErrOEgEcvZ2"
		const stringXqhM5OY = "eER5GF2VWndthQ"
		const uinttURBvX = BigInt("180")
		const DipexJtfvy2v = await Dipex.new(stringW09DvX, stringXqhM5OY, uinttURBvX, {from: accounts[0]});
		const addresszYefDE = "0x00000000000000000000000000000000000000-1"
//		const boolXpnSxvi = await DipexJtfvy2v.transferownership.call(addresszYefDE, {from: accounts[0]});

		await expect(DipexJtfvy2v.transferownership.call(addresszYefDE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})