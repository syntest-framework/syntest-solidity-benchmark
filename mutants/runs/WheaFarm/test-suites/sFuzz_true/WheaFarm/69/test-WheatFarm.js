const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringL9DK33D = "n3VATwDYkFrpOuSYka6fu2FlYJ1Dj3YHcDq9JsvF6FI27ikOYpKP5C2xwvf5FIBqcoVKBc5K5gKyN"
		const stringQzz0v1c = "OoUtiNRwfZuQbtdXp6QmOI74cizf9intwhOwcUZuyRinfHePvmHTumAi9v"
		const uints55ONFl = BigInt("1293")
		const WheatFarmOrQNdJ8 = await WheatFarm.new(stringL9DK33D, stringQzz0v1c, uints55ONFl, {from: accounts[3]});
		const addressDVpCprU = accounts[1]
		const addressg8MMVft = "0x0000000000000000000000000000000000000001"
		const addressErX1Yo3 = accounts[0]
		const uintl4sX406 = await WheatFarmOrQNdJ8.allowance.call(addressg8MMVft, addressDVpCprU, {from: accounts[2]});
		const uintPQJiwY = await WheatFarmOrQNdJ8.balanceOf.call(addressErX1Yo3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintPQJiwY, BigInt("0"))
		assert.equal(uintl4sX406, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const stringAJfwhd0 = "5J5UTc7iw4LzzzwWVr79NyrKmvwkAADxG3xTB8Tehe42eNkgtISenEHuwAHhiMS8XAOESi58qA2378EDBALq7"
		const stringqJFUC8m = "3f4j0mLmB3cvAUsaW3eNtMhbVVp"
		const uintDXELLj1 = BigInt("2028")
		const WheatFarmMdTMA2e = await WheatFarm.new(stringAJfwhd0, stringqJFUC8m, uintDXELLj1, {from: accounts[3]});
		const uintGZgvO8c = BigInt("1166")
		const addresszBZZAGK = accounts[2]
		const addressXXzK5XH = accounts[3]
		const uintSW5aHfW = BigInt("126")
		const addressMhPVJao = accounts[0]
		const uintQRlN1D3 = BigInt("842")
		const addressZkUDwdu = "0x0000000000000000000000000000000000000001"
		const uinteIo9ol = BigInt("63")
		const addressvTgeiN = accounts[2]
		const addressn0Mgd7p = accounts[2]
		const uintIUNYJhd = BigInt("1482")
		const addressz8bexe = "0x0000000000000000000000000000000000000001"
		const boolgV6nyM = await WheatFarmMdTMA2e.transferFrom.call(addressXXzK5XH, addresszBZZAGK, uintGZgvO8c, {from: accounts[4]});
		const bool0j9hXd = await WheatFarmMdTMA2e.approveAndCall.call(addressMhPVJao, uintSW5aHfW, {from: accounts[0]});
		const boolTArbpUF = await WheatFarmMdTMA2e.increaseAllowance.call(addressZkUDwdu, uintQRlN1D3, {from: accounts[1]});
		const stringxhWXV6O = await WheatFarmMdTMA2e.name.call({from: accounts[3]});
		const boolSHfJakY = await WheatFarmMdTMA2e.transferFrom.call(addressn0Mgd7p, addressvTgeiN, uinteIo9ol, {from: accounts[1]});
		const boolmrhJBwX = await WheatFarmMdTMA2e.approveAndCall.call(addressz8bexe, uintIUNYJhd, {from: accounts[3]});

		await expect(WheatFarmMdTMA2e.transferFrom.call(addressXXzK5XH, addresszBZZAGK, uintGZgvO8c, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringGNYquil = "PxSG"
		const stringi9KdEUk = "N2jfYtXWvnG0QiBvAOzviVbR030jTi1ubnwz4KJ5HncobfPluuOfCpF4KELP4eftwvDUpCT3Ejxmz9dt3PfHh8P2"
		const uintoIu7JWu = BigInt("149")
		const WheatFarmxjDtxzS = await WheatFarm.new(stringGNYquil, stringi9KdEUk, uintoIu7JWu, {from: accounts[1]});
		const uintJgvSzot = BigInt("1504")
		const addressQJBrHgG = accounts[4]
		const addresshO9hvg2 = accounts[2]
		const uintqvWnYsp = BigInt("588")
		const addressxjQmWue = accounts[1]
		const addressRiBKhr = accounts[3]
		const addressH3L4Hjr = accounts[4]
		const boolAdVbI1E = await WheatFarmxjDtxzS.increaseAllowance.call(addressQJBrHgG, uintJgvSzot, {from: accounts[0]});
		const uintQ0IZwC = await WheatFarmxjDtxzS.balanceOf.call(addresshO9hvg2, {from: accounts[0]});
		const boolSD9Ho1N = await WheatFarmxjDtxzS.decreaseAllowance.call(addressxjQmWue, uintqvWnYsp, {from: accounts[0]});
		const uintgYth69 = await WheatFarmxjDtxzS.allowance.call(addressH3L4Hjr, addressRiBKhr, {from: accounts[1]});

		await expect(WheatFarmxjDtxzS.increaseAllowance.call(addressQJBrHgG, uintJgvSzot, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringe7pMvW = "bktpmoFU41sXNvgNnry8M5ntUwm0wwhoOTPfLoEGuxVCeg6LA51eRmGmPxW4SBSdV3fEYITvhEqrR3On1C"
		const stringxmrlD4M = "mdBsl5MTPfJwT56mWVu4LoOGOLiT0duTpZZaRMjXXudhbyL8GoPqxYfNjG8EWfszmOSfX7PiCUDS6HpYTwLYeXDkIKDq"
		const uintFtvs850 = BigInt("143")
		const WheatFarmjXFiRhp = await WheatFarm.new(stringe7pMvW, stringxmrlD4M, uintFtvs850, {from: accounts[1]});
		const uintgcEXPP5 = BigInt("297")
		const addressjUB081g = accounts[5]
		const uintohWvATP = BigInt("1874")
		const addresskOqf1rf = accounts[0]
		const uintpSFPjX5 = BigInt("686")
		const addressQGKDYI = accounts[4]
		const addresso5jYxp = accounts[0]
		const addressO6FH8od = "0x0000000000000000000000000000000000000001"
		const boolC1CH5Vu = await WheatFarmjXFiRhp.transfer.call(addressjUB081g, uintgcEXPP5, {from: accounts[3]});
		const boolG7ooGLs = await WheatFarmjXFiRhp.approve.call(addresskOqf1rf, uintohWvATP, {from: accounts[0]});
		const boolhA3yBGJ = await WheatFarmjXFiRhp.transferFrom.call(addresso5jYxp, addressQGKDYI, uintpSFPjX5, {from: accounts[2]});
		const uintLQSE0QE = await WheatFarmjXFiRhp.balanceOf.call(addressO6FH8od, {from: accounts[4]});

		await expect(WheatFarmjXFiRhp.transfer.call(addressjUB081g, uintgcEXPP5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringWFC4pdj = "KajBok6wbscpbOsVSy1PDx4mDPVS9o9qs"
		const stringOiZSuTt = "T1vLtNM5gwu2HgY5iKAwIW239iW7kftJsleD7KcjQpleUgicX83jNKkUBdAy7"
		const uintGSkggnb = BigInt("1000")
		const WheatFarmNJxgtfr = await WheatFarm.new(stringWFC4pdj, stringOiZSuTt, uintGSkggnb, {from: accounts[1]});
		const uintAcJvJ5j = BigInt("589")
		const addressAdKd0u1 = accounts[2]
		const uintLfH84C8 = BigInt("692")
		const addressHf5KREJ = accounts[2]
		const uintDNiVbG2 = BigInt("1955")
		const addressEnbngsz = accounts[3]
		const boolHwvqNrX = await WheatFarmNJxgtfr.transfer.call(addressAdKd0u1, uintAcJvJ5j, {from: accounts[1]});
		const boolyNfa67v = await WheatFarmNJxgtfr.transfer.call(addressHf5KREJ, uintLfH84C8, {from: accounts[5]});
		const stringy7xnSs4 = await WheatFarmNJxgtfr.symbol.call({from: accounts[3]});
		const stringvhCKy3O = await WheatFarmNJxgtfr.symbol.call({from: accounts[2]});
		const boolSYnBdN5 = await WheatFarmNJxgtfr.decreaseAllowance.call(addressEnbngsz, uintDNiVbG2, {from: accounts[5]});

		assert.equal(boolHwvqNrX, true)
		await expect(WheatFarmNJxgtfr.transfer.call(addressHf5KREJ, uintLfH84C8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringe7pMvW = "bktpmoFU41sXNvgNnry8M5ntUwm0wwhoOTPfLoEGuxVCeg6LA51eRmGmPxW4SBSdV3fEYITvhEqrR3On1C"
		const stringxmrlD4M = "mdBsl5MTPfJwT56mWVu4LoOGOLiT0duTpZZaRMjXXudhbyL8GoPqxYfNjG8EWfszmOSfX7PiCUDS6HpYTwLYeXDkIKDq"
		const uintMSBhdWv = BigInt("143")
		const WheatFarmjXFiRhp = await WheatFarm.new(stringe7pMvW, stringxmrlD4M, uintMSBhdWv, {from: accounts[1]});
		const uintltV8pn = BigInt("1874")
		const addressuzHL0qU = accounts[0]
		const uintZ7fvYBR = BigInt("686")
		const addresstSLJdsW = accounts[5]
		const addressDj4MFGq = accounts[0]
		const addressGSVCNk = "0x0000000000000000000000000000000000000001"
		const uint8ewWX1X9 = await WheatFarmjXFiRhp.decimals.call({from: accounts[4]});
		const boolG7ooGLs = await WheatFarmjXFiRhp.approve.call(addressuzHL0qU, uintltV8pn, {from: accounts[0]});
		const boolhA3yBGJ = await WheatFarmjXFiRhp.transferFrom.call(addressDj4MFGq, addresstSLJdsW, uintZ7fvYBR, {from: accounts[2]});
		const uintLQSE0QE = await WheatFarmjXFiRhp.balanceOf.call(addressGSVCNk, {from: accounts[4]});

		assert.equal(boolG7ooGLs, true)
		assert.equal(uint8ewWX1X9, BigInt("18"))
		await expect(WheatFarmjXFiRhp.transferFrom.call(addressDj4MFGq, addresstSLJdsW, uintZ7fvYBR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringe7pMvW = "bktpmoFU41sXNvgNnry8M5ntUwm0wwhoOTPfLoEGuxVCeg6LA51eRmGmPxW4SBSdV3fEYITvhEqrR3On1C"
		const stringxmrlD4M = "mdBsl5MTPfJwT56mWVu4LoOGOLiT0duTpZZaRMjXXudhbyL8GoPqxYfNjG8EWfszmOSfX7PiCUDS6HpYTwLYeXDkIKDq"
		const uintxBEhrV = BigInt("143")
		const WheatFarmjXFiRhp = await WheatFarm.new(stringe7pMvW, stringxmrlD4M, uintxBEhrV, {from: accounts[1]});
		const uintuYu96xV = BigInt("62")
		const addressB0yBynI = accounts[3]
		const uintWxO7NtU = BigInt("297")
		const addresssOjmPXr = accounts[5]
		const addressTmWcWsr = "0x0000000000000000000000000000000000000001"
		const uint8LKaevsM = await WheatFarmjXFiRhp.decimals.call({from: accounts[3]});
		const boold0hIHos = await WheatFarmjXFiRhp.approveAndCall.call(addressB0yBynI, uintuYu96xV, {from: accounts[2]});
		const boolC1CH5Vu = await WheatFarmjXFiRhp.transfer.call(addresssOjmPXr, uintWxO7NtU, {from: accounts[3]});
		const uintLQSE0QE = await WheatFarmjXFiRhp.balanceOf.call(addressTmWcWsr, {from: accounts[4]});

		assert.equal(uint8LKaevsM, BigInt("18"))
		await expect(WheatFarmjXFiRhp.approveAndCall.call(addressB0yBynI, uintuYu96xV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringNkTu7Lt = "nQTdahbM2EgYiJd25FLsxTM2gNr6U5"
		const stringbu9Mtnm = "LuIjF5GtpgPkgGVLIwRCzleqg2GcC5PixpXI7qqot88h5FMHrlC7fCuci8da2yRzAMs8AevC7HsqVNjLgfDGiMf"
		const uintlGriKFF = BigInt("68")
		const WheatFarmeaeIlLL = await WheatFarm.new(stringNkTu7Lt, stringbu9Mtnm, uintlGriKFF, {from: "0x0000000000000000000000000000000000000001"});
		const uintUNkMqms = BigInt("649")
		const addressF4Fw79x = accounts[4]
		const addressJVe3EdS = accounts[1]
		const uintCaF96ds = BigInt("177")
		const addresshbA1Xdy = accounts[4]
		const uintZFrDh07 = BigInt("1416")
		const addressOPuh2Ml = accounts[4]
		const string3Wau0x = await WheatFarmeaeIlLL.name.call({from: accounts[4]});
		const boolK7pXydK = await WheatFarmeaeIlLL.transferFrom.call(addressJVe3EdS, addressF4Fw79x, uintUNkMqms, {from: accounts[2]});
		const boolSNd4RDh = await WheatFarmeaeIlLL.approve.call(addresshbA1Xdy, uintCaF96ds, {from: "0x0000000000000000000000000000000000000001"});
		const boolPZSm08t = await WheatFarmeaeIlLL.increaseAllowance.call(addressOPuh2Ml, uintZFrDh07, {from: accounts[1]});
		const uint8KIEixc8 = await WheatFarmeaeIlLL.decimals.call({from: accounts[2]});
	});

	it('test for WheatFarm', async () => {
		const stringibnhXbP = "t5bHDaweIq0dotgx0xOtfWkwzXL01ZBNvog7rqqtzdCPlex6wJwBKLciEANKMYAm7wxbIiFNJxYcNfHX2Enmq8QV7o8rkL2S"
		const stringq9oZ5O = "LomgxOqW2pGmrUhcJaGZAsrVmfyNa"
		const uintc7BP4IG = BigInt("48")
		const WheatFarmPOv7HVO = await WheatFarm.new(stringibnhXbP, stringq9oZ5O, uintc7BP4IG, {from: accounts[3]});
		const uinta1v4Rra = BigInt("407")
		const addressd4eDRUQ = accounts[3]
		const uintUJS3alX = BigInt("108")
		const addressC5jYa2M = accounts[4]
		const addressK1m2Cm = accounts[2]
		const addressV7Gqf1w = accounts[3]
		const boolZOAulYK = await WheatFarmPOv7HVO.approveAndCall.call(addressd4eDRUQ, uinta1v4Rra, {from: accounts[3]});
		const boolQ9IXdxY = await WheatFarmPOv7HVO.transferFrom.call(addressK1m2Cm, addressC5jYa2M, uintUJS3alX, {from: accounts[5]});
		const boolbJJ5fZz = await WheatFarmPOv7HVO.transferownership.call(addressV7Gqf1w, {from: accounts[4]});

		assert.equal(boolZOAulYK, true)
		await expect(WheatFarmPOv7HVO.transferFrom.call(addressK1m2Cm, addressC5jYa2M, uintUJS3alX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringibnhXbP = "t5bHDaweIq0dotgx0xOtfWkwzXL01ZBNvog7rqqtzdCPlex6wJwBKLciEANKMYAm7wxbIiFNJxYcNfHX2Enmq8QV7o8rkL2S"
		const stringq9oZ5O = "LomgxOqW2pGmrUhcJaGZAsrVmfyNa"
		const uintJ3yyVYk = BigInt("48")
		const WheatFarmPOv7HVO = await WheatFarm.new(stringibnhXbP, stringq9oZ5O, uintJ3yyVYk, {from: accounts[3]});
		const uintzKI1JGW = BigInt("408")
		const addressnx70HMv = accounts[3]
		const addresskGnHu1m = accounts[3]
		const boolZOAulYK = await WheatFarmPOv7HVO.approveAndCall.call(addressnx70HMv, uintzKI1JGW, {from: accounts[3]});
		const boolbJJ5fZz = await WheatFarmPOv7HVO.transferownership.call(addresskGnHu1m, {from: accounts[4]});

		assert.equal(boolZOAulYK, true)
		await expect(WheatFarmPOv7HVO.transferownership.call(addresskGnHu1m, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringe7pMvW = "bktpmoFU41sXNvgNnry8M5ntUwm0wwhoOTPfLoEGuxVCeg6LA51eRmGmPxW4SBSdV3fEYITvhEqrR3On1C"
		const stringxmrlD4M = "mdBsl5MTPfJwT56mWVu4LoOGOLiT0duTpZZaRMjXXudhbyL8GoPqxYfNjG8EWfszmOSfX7PiCUDS6HpYTwLYeXDkIKDq"
		const uintmZCqlVr = BigInt("143")
		const WheatFarmjXFiRhp = await WheatFarm.new(stringe7pMvW, stringxmrlD4M, uintmZCqlVr, {from: accounts[1]});
		const address0e7KcC = accounts[5]
		const uintrc7WrD1 = BigInt("305")
		const addressMKHiQq = accounts[6]
		const uintNcyc9EE = await WheatFarmjXFiRhp.totalSupply.call({from: accounts[4]});
		const boolIHqSA5t = await WheatFarmjXFiRhp.transferownership.call(address0e7KcC, {from: accounts[1]});
		const boolC1CH5Vu = await WheatFarmjXFiRhp.transfer.call(addressMKHiQq, uintrc7WrD1, {from: accounts[3]});

		assert.equal(boolIHqSA5t, true)
		assert.equal(uintNcyc9EE, BigInt("143000000000000000000"))
		await expect(WheatFarmjXFiRhp.transfer.call(addressMKHiQq, uintrc7WrD1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringibnhXbP = "t5bHDaweIq0dotgx0xOtfWkwzXL01ZBNvog7rqqtzdCPlex6wJwBKLciEANKMYAm7wxbIiFNJxYcNfHX2Enmq8QV7o8rkL2S"
		const stringq9oZ5O = "LomgxOqW2pGmrUhcJaGZAsrVmfyNa"
		const uintUaLo0n7 = BigInt("48")
		const WheatFarmPOv7HVO = await WheatFarm.new(stringibnhXbP, stringq9oZ5O, uintUaLo0n7, {from: accounts[3]});
		const uintEAde5rb = BigInt("0")
		const addressHImvpNG = accounts[5]
		const addresscbPOK0Z = accounts[5]
		const addressyCeeoFS = accounts[4]
		const addresstMqJnGt = accounts[0]
		const uintXzSGKq8 = BigInt("723")
		const addressq5DtYem = accounts[2]
		const stringNyIbM6 = await WheatFarmPOv7HVO.symbol.call({from: accounts[0]});
		const stringKdaLlJe = await WheatFarmPOv7HVO.name.call({from: accounts[1]});
		const boolKkxcR8h = await WheatFarmPOv7HVO.transferFrom.call(addresscbPOK0Z, addressHImvpNG, uintEAde5rb, {from: accounts[0]});
		const uintyb5oml = await WheatFarmPOv7HVO.allowance.call(addresstMqJnGt, addressyCeeoFS, {from: accounts[1]});
		const boolFpvwK1H = await WheatFarmPOv7HVO.transfer.call(addressq5DtYem, uintXzSGKq8, {from: accounts[2]});

		assert.equal(boolKkxcR8h, true)
		assert.equal(stringKdaLlJe, "t5bHDaweIq0dotgx0xOtfWkwzXL01ZBNvog7rqqtzdCPlex6wJwBKLciEANKMYAm7wxbIiFNJxYcNfHX2Enmq8QV7o8rkL2S")
		assert.equal(stringNyIbM6, "LomgxOqW2pGmrUhcJaGZAsrVmfyNa")
		assert.equal(uintyb5oml, BigInt("0"))
		await expect(WheatFarmPOv7HVO.transfer.call(addressq5DtYem, uintXzSGKq8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})