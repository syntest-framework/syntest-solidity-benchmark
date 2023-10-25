const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringJBilIrX = "AgVRuFaZN6ksmCrGb5"
		const stringp7wwCFP = "AsKuvPifCpoGgogGJiBkC8CwVWyQp"
		const uintAuXPIjX = BigInt("1115")
		const Dipexg0zVJPF = await Dipex.new(stringJBilIrX, stringp7wwCFP, uintAuXPIjX, {from: accounts[1]});
		const uintHvj4WZe = BigInt("1817")
		const addressMCzLO0s = accounts[2]
		const addressEbmPtQt = accounts[5]
		const uintHje05hI = BigInt("2012")
		const addressxwoZaIL = accounts[2]
		const uintvPjjLHk = BigInt("1182")
		const addresss4Y3jPr = accounts[3]
		const uintPFDHyar = BigInt("1297")
		const addressMgDKOBp = accounts[5]
		const uintP1IE0Ws = BigInt("1786")
		const addresswP2ILk = accounts[2]
		const uintkCYBtdR = BigInt("100")
		const addresskFL8mRv = accounts[0]
		const boolh3R7oI7 = await Dipexg0zVJPF.transferFrom.call(addressEbmPtQt, addressMCzLO0s, uintHvj4WZe, {from: accounts[5]});
		const booljWDrzjt = await Dipexg0zVJPF.approve.call(addressxwoZaIL, uintHje05hI, {from: accounts[3]});
		const boolLmErbnt = await Dipexg0zVJPF.approveAndCall.call(addresss4Y3jPr, uintvPjjLHk, {from: accounts[3]});
		const boolJijThVq = await Dipexg0zVJPF.approveAndCall.call(addressMgDKOBp, uintPFDHyar, {from: accounts[2]});
		const booly3nZpj0 = await Dipexg0zVJPF.approveAndCall.call(addresswP2ILk, uintP1IE0Ws, {from: accounts[4]});
		const boolgGI712 = await Dipexg0zVJPF.transfer.call(addresskFL8mRv, uintkCYBtdR, {from: accounts[4]});

		await expect(Dipexg0zVJPF.transferFrom.call(addressEbmPtQt, addressMCzLO0s, uintHvj4WZe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringgC5cGjE = "pIO1YykRJL1NEXvDWnBtx5kzzudhGf7MM9Yo6IKzeUyR1QxygaTRoHcizJyTb0goEL6Db8Knu8dMMvJMBIubJSRilY6sl"
		const stringAqMmEAt = "4oWekFFii9bxIUVkiwmmKWIk7BAgzQ2WPxKu8R5Fs"
		const uintaaNRJRn = BigInt("1808")
		const Dipexp1zZPJT = await Dipex.new(stringgC5cGjE, stringAqMmEAt, uintaaNRJRn, {from: accounts[5]});
		const uintzVL2yyV = BigInt("1989")
		const address6GF1Ax = accounts[4]
		const uintroY7nvm = BigInt("1775")
		const addressmp22Vwl = accounts[2]
		const uintzEGFET = BigInt("1350")
		const addressWJA4Cu0 = accounts[2]
		const addressP1sRUNK = accounts[3]
		const uintJGnPHxc = BigInt("366")
		const addressl6dg6g1 = accounts[3]
		const uintTwMllWJ = BigInt("1705")
		const addressSfnGJOe = accounts[2]
		const addresskFtRSUj = accounts[4]
		const boolDT6gZII = await Dipexp1zZPJT.approveAndCall.call(address6GF1Ax, uintzVL2yyV, {from: accounts[2]});
		const boolOTy8pFC = await Dipexp1zZPJT.approveAndCall.call(addressmp22Vwl, uintroY7nvm, {from: accounts[2]});
		const boolpU4zqA = await Dipexp1zZPJT.transferFrom.call(addressP1sRUNK, addressWJA4Cu0, uintzEGFET, {from: accounts[1]});
		const boolXDrp5b = await Dipexp1zZPJT.approveAndCall.call(addressl6dg6g1, uintJGnPHxc, {from: accounts[2]});
		const boolooZ0VI5 = await Dipexp1zZPJT.approveAndCall.call(addressSfnGJOe, uintTwMllWJ, {from: accounts[1]});
		const boolBl15NJ6 = await Dipexp1zZPJT.transferownership.call(addresskFtRSUj, {from: accounts[4]});

		await expect(Dipexp1zZPJT.approveAndCall.call(address6GF1Ax, uintzVL2yyV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringLTALEkq = "d29RFGdldNgUWw2UVuoehm7KWc9nts0rcbp183LitKOO6wvja1q8Td8AcolzK1LMj2hhrGthpg2VT8afj1tilYpxhQOrJb58cp"
		const string0V6OJB = "aV6k1ibk6ptVnXqaCtAMgJtUjXJ5PyJKt7DnWxa8DrpnUcOhAVSu0DRE22tSjGnWtjafsPlittlxXt7bvcsNMvyC"
		const uintX1CPeXd = BigInt("1338")
		const DipexHlMwr9y = await Dipex.new(stringLTALEkq, string0V6OJB, uintX1CPeXd, {from: accounts[5]});
		const uintkiejKAj = BigInt("792")
		const addressztrpu9u = accounts[5]
		const uintlL6aQNZ = BigInt("61")
		const address9XN60H = "0x0000000000000000000000000000000000000001"
		const uintv8MWKCX = BigInt("1034")
		const addressfDGtz0Y = accounts[3]
		const boolhKVep1T = await DipexHlMwr9y.approve.call(addressztrpu9u, uintkiejKAj, {from: accounts[3]});
		const boolAVN4fyh = await DipexHlMwr9y.approveAndCall.call(address9XN60H, uintlL6aQNZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolRneJJTK = await DipexHlMwr9y.approve.call(addressfDGtz0Y, uintv8MWKCX, {from: accounts[4]});

		assert.equal(boolhKVep1T, true)
		await expect(DipexHlMwr9y.approveAndCall.call(address9XN60H, uintlL6aQNZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringqGis9D7 = "eBRDQPh9JqTQ3PGn78sJNHq7x2jkYd9f2AgKTblMDDWpHXzvv2"
		const stringwAisP0i = "J5pKLg5nCmp12B1sP30QvPi6Js1mbR4cfIkbx"
		const uintBNB42ec = BigInt("1434")
		const DipexPWoqS3 = await Dipex.new(stringqGis9D7, stringwAisP0i, uintBNB42ec, {from: accounts[4]});
		const uintF5HEj9g = BigInt("1626")
		const addressfhBcWpf = accounts[5]
		const uintS7LEJcS = BigInt("86")
		const addressWekZ3I = accounts[3]
		const boolJkDI1WT = await DipexPWoqS3.approveAndCall.call(addressfhBcWpf, uintF5HEj9g, {from: accounts[4]});
		const boolnj11RJG = await DipexPWoqS3.approve.call(addressWekZ3I, uintS7LEJcS, {from: accounts[5]});

		assert.equal(boolJkDI1WT, true)
		assert.equal(boolnj11RJG, true)
	});

	it('test for Dipex', async () => {
		const stringqGis9D7 = "eBRDQPh9JqTQ3PGn78sJNHq7x2jkYd9f2AgKTblMDDWpHXzvv2"
		const stringwAisP0i = "J5pKLg5nCmp12B1sP30QvPi6Js1mbR4cfIkbx"
		const uintNZWpENj = BigInt("1434")
		const DipexPWoqS3 = await Dipex.new(stringqGis9D7, stringwAisP0i, uintNZWpENj, {from: accounts[4]});
		const addressFOCtKjS = accounts[4]
		const uintbJ6bU9w = BigInt("1626")
		const addressmXSU9hP = accounts[5]
		const uintMsk8KdL = BigInt("86")
		const addressFkiKXrO = accounts[3]
		const booltlANd5h = await DipexPWoqS3.transferownership.call(addressFOCtKjS, {from: accounts[5]});
		const boolJkDI1WT = await DipexPWoqS3.approveAndCall.call(addressmXSU9hP, uintbJ6bU9w, {from: accounts[4]});
		const boolnj11RJG = await DipexPWoqS3.approve.call(addressFkiKXrO, uintMsk8KdL, {from: accounts[5]});

		await expect(DipexPWoqS3.transferownership.call(addressFOCtKjS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringGUk1Kd = "nhCtvicf27hUqLgkPKfr"
		const stringKvXBgll = "APYbk6giaa2C6Wge3l2E5fHVeIdUKwW51Pwhd5hMfIQVILyW7uJxPOOjaQmYZizvKplX6WyfVvGSNK6xSXIxIJ7XBK1pTKYT"
		const uintUXUIKP9 = BigInt("1778")
		const DipexwuXlwYj = await Dipex.new(stringGUk1Kd, stringKvXBgll, uintUXUIKP9, {from: accounts[0]});
		const uintpwFtKR2 = BigInt("435")
		const addressv1V6QO = accounts[1]
		const uintFJW18So = BigInt("1546")
		const addressoUjSRst = accounts[3]
		const addressXR1Fxbj = accounts[3]
		const uintyAQFQLb = BigInt("1670")
		const addressxwl0zsf = accounts[0]
		const uinttOqoEN7 = BigInt("1912")
		const addressVFALtHN = accounts[1]
		const uintnrbqmgm = BigInt("1395")
		const addressIunBgWJ = accounts[4]
		const addressKcYwWrR = accounts[4]
		const boolDw9o8xO = await DipexwuXlwYj.transfer.call(addressv1V6QO, uintpwFtKR2, {from: accounts[1]});
		const boolfE3pLnf = await DipexwuXlwYj.transferFrom.call(addressXR1Fxbj, addressoUjSRst, uintFJW18So, {from: accounts[2]});
		const boolKqlfEyv = await DipexwuXlwYj.approveAndCall.call(addressxwl0zsf, uintyAQFQLb, {from: accounts[1]});
		const boolrQ1WoBh = await DipexwuXlwYj.transfer.call(addressVFALtHN, uinttOqoEN7, {from: accounts[0]});
		const boolvHhb79n = await DipexwuXlwYj.transferFrom.call(addressKcYwWrR, addressIunBgWJ, uintnrbqmgm, {from: accounts[0]});

		await expect(DipexwuXlwYj.transfer.call(addressv1V6QO, uintpwFtKR2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringNjAmkMR = "iFvUfloaeHWDJHgAVUSNPcjbOClRASkr4s9Wuxk6UoFDkwE6ttqQSya0mkdHJyDCzhES9odby"
		const stringxad0Xqy = "pziDNIHxolHfXjanavGS3r4SosLfedbeWHlozxJNQtlsfsWk5tqA8vApiO2WK"
		const uintoJf4AY = BigInt("1848")
		const DipexJ6D6qDv = await Dipex.new(stringNjAmkMR, stringxad0Xqy, uintoJf4AY, {from: accounts[0]});
		const uintYO0Iq3v = BigInt("1149")
		const addressDM2tOcz = accounts[1]
		const uintzf0ZQvT = BigInt("276")
		const addressdFLN2q = "0x0000000000000000000000000000000000000001"
		const uintBY2drxu = BigInt("214")
		const addressqBkCeIC = accounts[0]
		const uintbnIFDvv = BigInt("1919")
		const addressAxHtLd = accounts[4]
		const uintgQnb536 = BigInt("45")
		const addressvdM7Er9 = accounts[2]
		const boolK6ijk4U = await DipexJ6D6qDv.approve.call(addressDM2tOcz, uintYO0Iq3v, {from: accounts[0]});
		const boold3bn0Cb = await DipexJ6D6qDv.approveAndCall.call(addressdFLN2q, uintzf0ZQvT, {from: accounts[0]});
		const boolTAlCJGk = await DipexJ6D6qDv.transfer.call(addressqBkCeIC, uintBY2drxu, {from: accounts[0]});
		const boolfWdg0RT = await DipexJ6D6qDv.approve.call(addressAxHtLd, uintbnIFDvv, {from: accounts[4]});
		const booll736fY6 = await DipexJ6D6qDv.approve.call(addressvdM7Er9, uintgQnb536, {from: accounts[2]});

		assert.equal(boolK6ijk4U, true)
		assert.equal(boolTAlCJGk, true)
		assert.equal(boold3bn0Cb, true)
		assert.equal(boolfWdg0RT, true)
		assert.equal(booll736fY6, true)
	});

	it('test for Dipex', async () => {
		const stringwXzDPST = "nFJB5wQIIRWRsxHxfsTWglo5E8GuuDcIyln5PDYcUkjmlleBQuLyciGJcISn6E3OwSVKEyhKxFUpDeWPPSLba8SQbd3bz7HKyG"
		const stringG3a1WFM = "6XsLIN1YJg6vgyVOSkMWO9SFWcFXXLSDvIPoMIGe"
		const uintGG10ypZ = BigInt("1837")
		const DipexbqKDjP = await Dipex.new(stringwXzDPST, stringG3a1WFM, uintGG10ypZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintzNXyYi6 = BigInt("606")
		const addressZ24018 = accounts[1]
		const addressnaCcYdr = accounts[0]
		const uintc4K4Z4z = BigInt("57")
		const addressV0YgkS5 = accounts[2]
		const addresskO2aeBx = accounts[0]
		const boolkIQqt05 = await DipexbqKDjP.approveAndCall.call(addressZ24018, uintzNXyYi6, {from: accounts[3]});
		const boolr3iYVs4 = await DipexbqKDjP.transferownership.call(addressnaCcYdr, {from: accounts[2]});
		const boolMcZpxtv = await DipexbqKDjP.transferFrom.call(addresskO2aeBx, addressV0YgkS5, uintc4K4Z4z, {from: accounts[4]});
	});

	it('test for Dipex', async () => {
		const stringNjAmkMR = "iFvUfloaeHWDJHgAVUSNPcjbOClRASkr4s9Wuxk6UoFDkwE6ttqQSya0mkdHJyDCzhES9odby"
		const stringxad0Xqy = "pziDNIHxolHfXjanavGS3r4SosLfedbeWHlozxJNQtlsfsWk5tqA8vApiO2WK"
		const uintePHar3E = BigInt("1848")
		const DipexJ6D6qDv = await Dipex.new(stringNjAmkMR, stringxad0Xqy, uintePHar3E, {from: accounts[0]});
		const uintfWlI3DX = BigInt("0")
		const addressdFfwvuB = accounts[4]
		const addressrdf5Xpr = accounts[3]
		const uintDDQlr9M = BigInt("973")
		const addressiLZU7Ng = accounts[3]
		const addresscrAeljC = "0x0000000000000000000000000000000000000001"
		const boola4TPwb5 = await DipexJ6D6qDv.transferFrom.call(addressrdf5Xpr, addressdFfwvuB, uintfWlI3DX, {from: accounts[2]});
		const boolJ6HiFle = await DipexJ6D6qDv.transferFrom.call(addresscrAeljC, addressiLZU7Ng, uintDDQlr9M, {from: accounts[2]});

		assert.equal(boola4TPwb5, true)
		await expect(DipexJ6D6qDv.transferFrom.call(addresscrAeljC, addressiLZU7Ng, uintDDQlr9M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringfMx2hTk = "Ec15rXQd4bKLBHHqtXHS3khi"
		const stringciDnAti = "f3VvEUT9JmKOpd51TFAKMggKVEd9sUqCwYvp0l6WgNCeiJdcjO7gNzX54PrAz5fd"
		const uinthgicT3u = BigInt("1415")
		const DipexJl6iPpK = await Dipex.new(stringfMx2hTk, stringciDnAti, uinthgicT3u, {from: accounts[0]});
		const uintTILHUiz = BigInt("1458")
		const addressie1nZyC = accounts[2]
		const uintQ3TRyB8 = BigInt("0")
		const addressrKhhqN7 = accounts[0]
		const uintpQdZeR8 = BigInt("1827")
		const addresshkM4Frq = accounts[3]
		const uintFTCj6HT = BigInt("2018")
		const addressjjWSU00 = accounts[2]
		const addressYT8s02 = accounts[4]
		const uintvUrO8Y1 = BigInt("1741")
		const addressg8BJtVB = accounts[1]
		const boolXLsE58e = await DipexJl6iPpK.approve.call(addressie1nZyC, uintTILHUiz, {from: accounts[3]});
		const boolzSeFrf = await DipexJl6iPpK.approveAndCall.call(addressrKhhqN7, uintQ3TRyB8, {from: accounts[0]});
		const boolwoGvDdS = await DipexJl6iPpK.approveAndCall.call(addresshkM4Frq, uintpQdZeR8, {from: accounts[1]});
		const booluojULR = await DipexJl6iPpK.transferFrom.call(addressYT8s02, addressjjWSU00, uintFTCj6HT, {from: accounts[2]});
		const boolEyvZANW = await DipexJl6iPpK.approveAndCall.call(addressg8BJtVB, uintvUrO8Y1, {from: accounts[5]});

		assert.equal(boolXLsE58e, true)
		assert.equal(boolzSeFrf, true)
		await expect(DipexJl6iPpK.approveAndCall.call(addresshkM4Frq, uintpQdZeR8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})