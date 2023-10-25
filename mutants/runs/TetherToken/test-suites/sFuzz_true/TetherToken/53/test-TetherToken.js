const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintFc9zubw = BigInt("304")
		const stringLUDcnYu = "4Mn6BEpco6FM3Mtl47TwoicLdUKqLLaXQ"
		const stringQfQ2n7 = "qYE3mxuSdhhwxOxG5gKs5Ug9J6mOewApdTFlGtXq4yrxEPvKODF0"
		const uintw8SLKiu = BigInt("1195")
		const TetherTokenwdY8xNI = await TetherToken.new(uintFc9zubw, stringLUDcnYu, stringQfQ2n7, uintw8SLKiu, {from: accounts[2]});
		const uintSviKSJR = BigInt("772")
		const addresseAIgQpp = accounts[3]
		const uintUnBXrFb = BigInt("1226")
		const uintr3nRQvD = BigInt("950")
		const uintB8gxUDl = BigInt("58")
		const uintwsPk35I = await TetherTokenwdY8xNI.totalSupply.call({from: accounts[4]});
		const addressWEIdyOB = await TetherTokenwdY8xNI.approve.call(addresseAIgQpp, uintSviKSJR, {from: accounts[5]});
		const uintHk0Ba5B = await TetherTokenwdY8xNI.issue.call(uintUnBXrFb, {from: accounts[3]});
		const uintujzSkp = await TetherTokenwdY8xNI.setParams.call(uintB8gxUDl, uintr3nRQvD, {from: accounts[3]});

		assert.equal(uintwsPk35I, BigInt("304"))
		await expect(TetherTokenwdY8xNI.issue.call(uintUnBXrFb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintJbUUi9b = BigInt("1813")
		const stringv3RYro = "R3NBFfG7bJjlS3IMdOokXSifDWzwxilVqRBRRUJwC6bBb"
		const stringGAAMnv5 = "p44fozk3USGNIsLm8ByCy8zYnoXbvstmAIY"
		const uintubSbiL = BigInt("142")
		const TetherTokenpD1TwPR = await TetherToken.new(uintJbUUi9b, stringv3RYro, stringGAAMnv5, uintubSbiL, {from: accounts[3]});
		const uintDnN1QiK = BigInt("698")
		const uintgQih62D = BigInt("217")
		const addresshq4dxfw = accounts[0]
		const addressdXUGlhJ = accounts[5]
		const addresst8Dvf2 = "0x0000000000000000000000000000000000000001"
		const addressxKGiRJP = accounts[0]
		const addressKgqLg1t = accounts[5]
		const uintvbQOrXE = BigInt("1695")
		const addresspgxz6M9 = accounts[0]
		const address7LQwKI = accounts[0]
		const uintxcMRpTk = await TetherTokenpD1TwPR.setParams.call(uintgQih62D, uintDnN1QiK, {from: accounts[3]});
		const address4C9we8 = await TetherTokenpD1TwPR.deprecate.call(addresshq4dxfw, {from: "0x0000000000000000000000000000000000000001"});
		const addressVafOx7A = await TetherTokenpD1TwPR.deprecate.call(addressdXUGlhJ, {from: accounts[4]});
		const uintUQKVbJk = await TetherTokenpD1TwPR.balanceOf.call(addresst8Dvf2, {from: accounts[3]});
		const uintUFqyK0p = await TetherTokenpD1TwPR.allowance.call(addressKgqLg1t, addressxKGiRJP, {from: accounts[4]});
		const addressvb2w1qV = await TetherTokenpD1TwPR.transferFrom.call(address7LQwKI, addresspgxz6M9, uintvbQOrXE, {from: accounts[5]});

		await expect(TetherTokenpD1TwPR.setParams.call(uintgQih62D, uintDnN1QiK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintBMBy1CQ = BigInt("152")
		const stringy5wZ0L = "AD4DsMRaDxJNM6l64lcOaW"
		const stringRyRTKi = "Z1yrl3hQQiXRrsJmH3ZmDvcXPeYAaAzvqKA64Hfvq67wMN2HR3SHrcx4tb1hvvuvCgYxTMv9znX3ENwFELY"
		const uintyCL0eBs = BigInt("503")
		const TetherTokentCfABJi = await TetherToken.new(uintBMBy1CQ, stringy5wZ0L, stringRyRTKi, uintyCL0eBs, {from: accounts[1]});
		const uintI9dxNh9 = BigInt("83")
		const addressUA9Rhhg = accounts[2]
		const addresseIodrhA = accounts[4]
		const uintfyAerr9 = BigInt("682")
		const uintqV5Yn1X = BigInt("1045")
		const uint0BEY4y = BigInt("713")
		const addressOOZsjK0 = accounts[4]
		const addressTlmtqc = accounts[0]
		const uintO3g4w9O = BigInt("696")
		const addressUK4NWFh = accounts[1]
		const addressSO8SKj = accounts[4]
		const addressMxJdfsL = await TetherTokentCfABJi.transferFrom.call(addresseIodrhA, addressUA9Rhhg, uintI9dxNh9, {from: accounts[4]});
		const uintExxEgjR = await TetherTokentCfABJi.setParams.call(uintqV5Yn1X, uintfyAerr9, {from: accounts[2]});
		const addresscwVPcfz = await TetherTokentCfABJi.transferFrom.call(addressTlmtqc, addressOOZsjK0, uint0BEY4y, {from: accounts[4]});
		const addressGIC8z1U = await TetherTokentCfABJi.transferFrom.call(addressSO8SKj, addressUK4NWFh, uintO3g4w9O, {from: accounts[5]});

		await expect(TetherTokentCfABJi.transferFrom.call(addresseIodrhA, addressUA9Rhhg, uintI9dxNh9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintLMYx6Ue = BigInt("1893")
		const stringyMiyOpy = "PPvSsBJrrEbHUyPjfSOeWJKY3SrFqhx7P8Qz6oxrHmO"
		const stringhgWRw6 = "LDGl"
		const uintHSGnIna = BigInt("1710")
		const TetherToken4VYiSU = await TetherToken.new(uintLMYx6Ue, stringyMiyOpy, stringhgWRw6, uintHSGnIna, {from: accounts[4]});
		const addressc02WHx1 = accounts[4]
		const uintdBBiSfS = BigInt("1890")
		const uintXT3WWam = BigInt("1737")
		const addressHAFpmPP = accounts[1]
		const uintXQlj1IC = BigInt("1642")
		const addressFu7M3IT = accounts[0]
		const addressPTrHDXl = await TetherToken4VYiSU.deprecate.call(addressc02WHx1, {from: accounts[1]});
		const uintl1vS4nk = await TetherToken4VYiSU.issue.call(uintdBBiSfS, {from: accounts[5]});
		const uintq0oDQao = await TetherToken4VYiSU.issue.call(uintXT3WWam, {from: accounts[5]});
		const addressvy4Skl = await TetherToken4VYiSU.deprecate.call(addressHAFpmPP, {from: accounts[0]});
		const addressLtlsdlM = await TetherToken4VYiSU.approve.call(addressFu7M3IT, uintXQlj1IC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherToken4VYiSU.deprecate.call(addressc02WHx1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintl23Bl3a = BigInt("1891")
		const stringEZxdXyB = "F6LqKFk5l7g51D8lhhOMJgYUIj8JhGN9TQwl9xXjkwGWDYg6o"
		const stringhhus5EH = "ovfOX2EV7j6VzS7vd9j422i10PmRTktKHrB1K7mqbpY1lRQ7nUsCRPiUEjb3yMGcFI4oj38jj"
		const uintc0jqVJW = BigInt("207")
		const TetherTokencZKzb3z = await TetherToken.new(uintl23Bl3a, stringEZxdXyB, stringhhus5EH, uintc0jqVJW, {from: accounts[3]});
		const uintXC908JJ = BigInt("146")
		const uintwgZhyOA = BigInt("62")
		const uintIC2Jtxx = BigInt("1848")
		const uintop08Umb = BigInt("1696")
		const uintulqVwoV = BigInt("1202")
		const uintKgzNJGe = await TetherTokencZKzb3z.redeem.call(uintXC908JJ, {from: accounts[3]});
		const uintsmkZmsk = await TetherTokencZKzb3z.redeem.call(uintwgZhyOA, {from: accounts[1]});
		const uintL1w6Feg = await TetherTokencZKzb3z.setParams.call(uintop08Umb, uintIC2Jtxx, {from: accounts[4]});
		const uintOaqfjw1 = await TetherTokencZKzb3z.redeem.call(uintulqVwoV, {from: accounts[5]});

		await expect(TetherTokencZKzb3z.redeem.call(uintwgZhyOA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uinttOHYI6c = BigInt("1936")
		const stringFpvgB94 = "yqMXwREmmFwkv8k6PONZakN4awXKktS8BshSYGJPNVjfiLPjKyqMT7r3Kgvwvn0jiwBo1edVzbR03wWBW"
		const stringnKlMJw7 = "cy1yM5rBArNYupgzfVNqf"
		const uintsDtzHEp = BigInt("701")
		const TetherTokenpJdJTO = await TetherToken.new(uinttOHYI6c, stringFpvgB94, stringnKlMJw7, uintsDtzHEp, {from: accounts[5]});
		const addresskpgZ2v = accounts[4]
		const uintErgNK14 = BigInt("1004")
		const addressDyZ84Kg = accounts[2]
		const addressoADVHK = accounts[2]
		const addressVA7vfHR = accounts[0]
		const addressf0YVnQI = accounts[2]
		const uintmH4yBw = await TetherTokenpJdJTO.balanceOf.call(addresskpgZ2v, {from: accounts[0]});
		const uintPyjJMux = await TetherTokenpJdJTO.redeem.call(uintErgNK14, {from: accounts[0]});
		const uintRuRFPMh = await TetherTokenpJdJTO.balanceOf.call(addressDyZ84Kg, {from: accounts[2]});
		const uintikZC8mn = await TetherTokenpJdJTO.allowance.call(addressVA7vfHR, addressoADVHK, {from: "0x0000000000000000000000000000000000000001"});
		const addressLRcVOaK = await TetherTokenpJdJTO.deprecate.call(addressf0YVnQI, {from: accounts[1]});

		assert.equal(uintmH4yBw, BigInt("0"))
		await expect(TetherTokenpJdJTO.redeem.call(uintErgNK14, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintgdhMKWu = BigInt("1343")
		const stringrYsIH7O = "JwBryATuvNJEC0ufcPc9RvxrWTfOyKQEMmToxydMG4xAXa"
		const stringCJq3mZB = "my3xQFWSJnc1yPse9JTwHEXrboofooAHvgu9X5pD51FYVMM0u1YVqhTtRjjj"
		const uintx7ZgIGY = BigInt("1656")
		const TetherTokenkxhLgo3 = await TetherToken.new(uintgdhMKWu, stringrYsIH7O, stringCJq3mZB, uintx7ZgIGY, {from: accounts[4]});
		const addresswLipGKO = "0x0000000000000000000000000000000000000001"
		const addressJRWdv35 = accounts[2]
		const uintXbNO7D9 = BigInt("379")
		const addresslqBwdWQ = accounts[2]
		const addressK7TBVeT = "0x0000000000000000000000000000000000000001"
		const uintC8z7JQP = BigInt("991")
		const addresst2uyjnQ = accounts[3]
		const uintS2I9kLg = BigInt("1043")
		const uintLz2Lqx1 = await TetherTokenkxhLgo3.allowance.call(addressJRWdv35, addresswLipGKO, {from: accounts[2]});
		const uintO1JLxrn = await TetherTokenkxhLgo3.totalSupply.call({from: accounts[2]});
		const addressHg6PMfH = await TetherTokenkxhLgo3.transferFrom.call(addressK7TBVeT, addresslqBwdWQ, uintXbNO7D9, {from: accounts[5]});
		const addressOql08HA = await TetherTokenkxhLgo3.approve.call(addresst2uyjnQ, uintC8z7JQP, {from: accounts[1]});
		const uintRYWGeXC = await TetherTokenkxhLgo3.issue.call(uintS2I9kLg, {from: accounts[2]});

		assert.equal(uintLz2Lqx1, BigInt("0"))
		assert.equal(uintO1JLxrn, BigInt("1343"))
		await expect(TetherTokenkxhLgo3.transferFrom.call(addressK7TBVeT, addresslqBwdWQ, uintXbNO7D9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintXbqrVuH = BigInt("517")
		const stringxoVv1ka = "Xq"
		const stringK0UmD2p = "r5x1R2IwIzwVXccUItQHYjJ5JUoEGq1GejyZYvQksYP"
		const uintU3crR7z = BigInt("1735")
		const TetherTokenJDQcNBU = await TetherToken.new(uintXbqrVuH, stringxoVv1ka, stringK0UmD2p, uintU3crR7z, {from: accounts[0]});
		const addressO9cIi5L = accounts[5]
		const addressbeXWnzM = accounts[3]
		const addressZsw351n = "0x0000000000000000000000000000000000000001"
		const addressMkLcVdD = accounts[3]
		const uintCLpUvVS = BigInt("1401")
		const uintiWbX4FN = BigInt("1592")
		const uintnJnpXSr = BigInt("1099")
		const addressSmBsehM = accounts[1]
		const uinttQDxjC5 = await TetherTokenJDQcNBU.allowance.call(addressbeXWnzM, addressO9cIi5L, {from: accounts[0]});
		const uintaUJ0BVH = await TetherTokenJDQcNBU.allowance.call(addressMkLcVdD, addressZsw351n, {from: accounts[0]});
		const uintjDBEj7h = await TetherTokenJDQcNBU.issue.call(uintCLpUvVS, {from: accounts[0]});
		const uintO4f5VOI = await TetherTokenJDQcNBU.issue.call(uintiWbX4FN, {from: accounts[5]});
		const addressyiNvWp = await TetherTokenJDQcNBU.approve.call(addressSmBsehM, uintnJnpXSr, {from: accounts[3]});

		assert.equal(uintaUJ0BVH, BigInt("0"))
		assert.equal(uinttQDxjC5, BigInt("0"))
		await expect(TetherTokenJDQcNBU.issue.call(uintiWbX4FN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintjn1jTLE = BigInt("11")
		const stringmIqQpLX = "ePtoYcVSBQEQK5bTC7eqsuAgpYqCLuu4o6W2Y1ivQkT4m5bXy1mDs8CI42"
		const stringgEhoKXc = "QSdzedQmCnM1CA9xqroqxJWnIWv4flGM3qRBd5edcpxcn9xC1TUgCsxwkPeQW9ctw9Isbp4Z1TDdSx0xPfnSY"
		const uintLdKhOBh = BigInt("951")
		const TetherToken5i8mNd = await TetherToken.new(uintjn1jTLE, stringmIqQpLX, stringgEhoKXc, uintLdKhOBh, {from: accounts[4]});
		const uintMfWUt2N = BigInt("243")
		const addressp5viIUF = accounts[3]
		const addressreBbYJM = await TetherToken5i8mNd.transfer.call(addressp5viIUF, uintMfWUt2N, {from: accounts[0]});

		await expect(TetherToken5i8mNd.transfer.call(addressp5viIUF, uintMfWUt2N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintcXKMQ1d = BigInt("304")
		const stringLUDcnYu = "4Mn6BEpco6FM3Mtl47TwoicLdUKqLLaXQ"
		const stringQfQ2n7 = "qYE3mxuSdhhwxOxG5gKs5Ug9J6mOewApdTFlGtXq4yrxEPvKODF0"
		const uintOzgOtg = BigInt("1195")
		const TetherTokenwdY8xNI = await TetherToken.new(uintcXKMQ1d, stringLUDcnYu, stringQfQ2n7, uintOzgOtg, {from: accounts[2]});
		const addressOffiWxi = accounts[2]
		const addressPbqXgxJ = accounts[1]
		const uintVKj0qYQ = BigInt("790")
		const addressijjEod2 = accounts[4]
		const uinteTpTd6x = BigInt("950")
		const uintypL2ipK = BigInt("42")
		const addressh38rCmU = await TetherTokenwdY8xNI.deprecate.call(addressOffiWxi, {from: accounts[2]});
		const addressu3XZDnd = await TetherTokenwdY8xNI.deprecate.call(addressPbqXgxJ, {from: accounts[1]});
		const addressWEIdyOB = await TetherTokenwdY8xNI.approve.call(addressijjEod2, uintVKj0qYQ, {from: accounts[5]});
		const uintujzSkp = await TetherTokenwdY8xNI.setParams.call(uintypL2ipK, uinteTpTd6x, {from: accounts[3]});

		await expect(TetherTokenwdY8xNI.deprecate.call(addressPbqXgxJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintS7iy3Il = BigInt("824")
		const stringNoxVut = "F3rri5zpaAsJVR7TR1rox3s9iVkAwELUB8u6bwpghy4y4pFb7GNBIknyCI7W4YyfYJD6EGxyTCCci6jCiy4R"
		const stringDwkb2Ia = "pTbEEnAOeJEgS8hwDVjfCXW3"
		const uint3k55K6 = BigInt("1886")
		const TetherTokenKFJqBTm = await TetherToken.new(uintS7iy3Il, stringNoxVut, stringDwkb2Ia, uint3k55K6, {from: "0x0000000000000000000000000000000000000001"});
		const uintPRIbxPE = BigInt("44")
		const addresswYIadTk = accounts[2]
		const uintP48n68Z = BigInt("926")
		const uintsWMzsZf = BigInt("1894")
		const addressLHSvvhw = "0x0000000000000000000000000000000000000001"
		const addressWpr7u1j = await TetherTokenKFJqBTm.approve.call(addresswYIadTk, uintPRIbxPE, {from: accounts[3]});
		const uintF6qxyK = await TetherTokenKFJqBTm.redeem.call(uintP48n68Z, {from: accounts[4]});
		const addressVSUO9w = await TetherTokenKFJqBTm.approve.call(addressLHSvvhw, uintsWMzsZf, {from: accounts[4]});
	});
})